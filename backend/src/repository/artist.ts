import { RecordType, Repository } from './types';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

interface ArtistItem {
  pk: string;
  sk: string;
  ownerUuid: string;
  artistName: string;
}

class ArtistRepository implements Repository<ArtistItem> {
  private readonly dynamoDB: DocumentClient;
  private readonly tableName: string;

  constructor(tableName: string, dynamoDB: DocumentClient) {
    this.tableName = tableName;
    this.dynamoDB = dynamoDB;
  }

  async findByPK(pk: string, sk: string): Promise<ArtistItem> {
    const params = {
      TableName: this.tableName,
      Key: {
        pk,
        sk,
      },
    };
    return (await this.dynamoDB.get(params).promise()).Item as ArtistItem;
  }

  insert(toInsert: ArtistItem): Promise<any> {
    const params = {
      TableName: this.tableName,
      Item: {
        pk: toInsert.pk,
        sk: toInsert.sk,
        ownerUuid: toInsert.ownerUuid,
        recordTypeParentUuid: RecordType.ARTIST,
        ...toInsert,
      },
    };

    return this.dynamoDB.put(params).promise();
  }

  async findByOwner(ownerUuid: string): Promise<ArtistItem[]> {
    const params = {
      TableName: this.tableName,
      IndexName: 'ownerUuid-recordTypeParentUuid_index',
      KeyConditionExpression:
        'ownerUuid = :ownerUuid and recordTypeParentUuid = :recordType',
      ExpressionAttributeValues: {
        ':ownerUuid': ownerUuid,
        ':recordType': RecordType.ARTIST,
      },
    };
    return (await this.dynamoDB.query(params).promise()).Items as ArtistItem[];
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

export { ArtistItem, ArtistRepository };
