import { v4 as uuidv4 } from 'uuid';
import { Item, RecordType, Repository } from './types';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

class ArtistItem extends Item {
  constructor(ownerUuid: string, data: JSON) {
    super();
    this.PK = uuidv4();
    this.SK = Date.now();
    this.ownerUuid = ownerUuid;
    this.recordTypeParentUuids = RecordType.ARTIST;
    this.data = data;
  }
}

class ArtistRepository implements Repository<ArtistItem> {
  private readonly dynamoDB: DocumentClient;
  private readonly tableName: string;

  constructor(tableName: string, dynamoDB: DocumentClient) {
    this.tableName = tableName;
    this.dynamoDB = dynamoDB;
  }

  async findByPK(PK: string, SK: number): Promise<ArtistItem> {
    const params = {
      TableName: this.tableName,
      Key: {
        PK,
        SK,
      },
    };
    return (await this.dynamoDB.get(params).promise()).Item as ArtistItem;
  }

  insert(toInsert: Item): Promise<any> {
    const params = {
      TableName: this.tableName,
      Item: {
        PK: toInsert.PK,
        SK: toInsert.SK,
        ownerUuid: toInsert.ownerUuid,
        recordTypeParentUuids: toInsert.recordTypeParentUuids,
        data: toInsert.data,
      },
    };

    return this.dynamoDB.put(params).promise();
  }

  async findByGSIPK(ownerUuid: string): Promise<ArtistItem[]> {
    const params = {
      TableName: this.tableName,
      IndexName: 'ownerUuid-recordTypeParentUuids_index',
      KeyConditionExpression:
        'ownerUuid = :ownerUuid and recordTypeParentUuids = :recordTypeParentUuids',
      ExpressionAttributeValues: {
        ':ownerUuid': ownerUuid,
        ':recordTypeParentUuids': RecordType.ARTIST,
      },
    };
    return (await this.dynamoDB.query(params).promise()).Items as ArtistItem[];
  }

  delete(PK: string, SK: number): Promise<any> {
    const params = {
      TableName: this.tableName,
      Key: {
        PK,
        SK,
      },
    };

    return this.dynamoDB.delete(params).promise();
  }
}

export { ArtistItem, ArtistRepository };
