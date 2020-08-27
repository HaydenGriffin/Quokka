import { RecordType, Repository } from './types';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

interface TourItem {
  pk: string;
  sk: string;
  ownerUuid: string;
  tourName: string;
  artistUuid: string;
}

class TourRepository implements Repository<TourItem> {
  private readonly dynamoDB: DocumentClient;
  private readonly tableName: string;

  constructor(tableName: string, dynamoDB: DocumentClient) {
    this.tableName = tableName;
    this.dynamoDB = dynamoDB;
  }

  async findByPK(pk: string, sk: string): Promise<TourItem> {
    const params = {
      TableName: this.tableName,
      Key: {
        pk,
        sk,
      },
    };
    return (await this.dynamoDB.get(params).promise()).Item as TourItem;
  }

  insert(toInsert: TourItem): Promise<any> {
    const params = {
      TableName: this.tableName,
      Item: {
        pk: toInsert.pk,
        sk: toInsert.sk,
        ownerUuid: toInsert.ownerUuid,
        recordTypeParentUuid: `${RecordType.TOUR}_${toInsert.artistUuid}`,
        ...toInsert,
      },
    };

    return this.dynamoDB.put(params).promise();
  }

  async findByOwner(ownerUuid: string): Promise<TourItem[]> {
    const params = {
      TableName: this.tableName,
      IndexName: 'ownerUuid-recordTypeParentUuid_index',
      KeyConditionExpression:
        'ownerUuid = :ownerUuid and begins_with(recordTypeParentUuid, :recordType)',
      ExpressionAttributeValues: {
        ':ownerUuid': ownerUuid,
        ':recordType': RecordType.TOUR,
      },
    };
    return (await this.dynamoDB.query(params).promise()).Items as TourItem[];
  }

  async findByOwnerArtist(
    ownerUuid: string,
    artistUuid: string
  ): Promise<TourItem[]> {
    const params = {
      TableName: this.tableName,
      IndexName: 'ownerUuid-recordTypeParentUuid_index',
      KeyConditionExpression:
        'ownerUuid = :ownerUuid and recordTypeParentUuid = :recordTypeParentUuid',
      ExpressionAttributeValues: {
        ':ownerUuid': ownerUuid,
        ':recordTypeParentUuid': `${RecordType.TOUR}_${artistUuid}`,
      },
    };
    return (await this.dynamoDB.query(params).promise()).Items as TourItem[];
  }

  delete(pk: string, sk: string): Promise<any> {
    const params = {
      TableName: this.tableName,
      Key: {
        pk,
        sk,
      },
    };

    return this.dynamoDB.delete(params).promise();
  }
}

export { TourItem, TourRepository };
