import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { Item } from './types';

export class Repository<T> {
  private readonly dynamoDB: DocumentClient;
  private readonly tableName: string;

  constructor(tableName: string, dynamoDB: DocumentClient) {
    this.tableName = tableName;
    this.dynamoDB = dynamoDB;
  }

  async findByPK(PK: string, SK: number): Promise<T> {
    const params = {
      TableName: this.tableName,
      Key: {
        PK: PK,
        SK: SK,
      },
    };
    return (await this.dynamoDB.get(params).promise()).Item as T;
  }

  async findByGSI(
    ownerUuid: string,
    recordType?: string,
    ...parentUuids: string[]
  ): Promise<Item[]> {
    const params = {
      TableName: this.tableName,
      IndexName: 'ownerUuid-recordTypeParentUuids_index',
      KeyConditionExpression: 'ownerUuid = :ownerUuid',
      ExpressionAttributeValues: {
        ':ownerUuid': ownerUuid,
      },
    };
    return (await this.dynamoDB.query(params).promise()).Items as Item[];
  }

  async insert(toInsert: Item): Promise<any> {
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
}
