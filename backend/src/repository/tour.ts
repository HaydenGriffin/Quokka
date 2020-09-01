import { RecordType, Repository } from './types';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

interface TourItem {
  pk: string;
  sk: string;
  ownerEmailAddress: string;
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
        ownerEmailAddress: toInsert.ownerEmailAddress,
        recordTypeParentUuid: `${RecordType.TOUR}_${toInsert.artistUuid}`,
        ...toInsert,
      },
    };

    return this.dynamoDB.put(params).promise();
  }

  async findByOwner(ownerEmailAddress: string): Promise<TourItem[]> {
    const params = {
      TableName: this.tableName,
      IndexName: 'ownerEmailAddress-recordTypeParentUuid_index',
      KeyConditionExpression:
        'ownerEmailAddress = :ownerEmailAddress and begins_with(recordTypeParentUuid, :recordType)',
      ExpressionAttributeValues: {
        ':ownerEmailAddress': ownerEmailAddress,
        ':recordType': RecordType.TOUR,
      },
    };
    return (await this.dynamoDB.query(params).promise()).Items as TourItem[];
  }

  async findByOwnerArtist(
    ownerEmailAddress: string,
    artistUuid: string
  ): Promise<TourItem[]> {
    const params = {
      TableName: this.tableName,
      IndexName: 'ownerEmailAddress-recordTypeParentUuid_index',
      KeyConditionExpression:
        'ownerEmailAddress = :ownerEmailAddress and recordTypeParentUuid = :recordTypeParentUuid',
      ExpressionAttributeValues: {
        ':ownerEmailAddress': ownerEmailAddress,
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
