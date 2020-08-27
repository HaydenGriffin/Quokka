import { Repository, RecordType } from './types';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

interface ApiKey {
  apikey: string;
  enabled: boolean;
  ownerEmail: string;
  createdAt: string;
}

class ApiKeyRepository implements Repository<ApiKey> {
  private readonly dynamoDB: DocumentClient;
  private readonly tableName: string;

  constructor(tableName: string, dynamoDB: DocumentClient) {
    this.tableName = tableName;
    this.dynamoDB = dynamoDB;
  }

  async findByPK(pk: string): Promise<ApiKey> {
    const params = {
      TableName: this.tableName,
      Key: {
        pk,
        sk: RecordType.APIKEY,
      },
    };
    return (await this.dynamoDB.get(params).promise()).Item as ApiKey;
  }

  insert(toInsert: ApiKey): Promise<any> {
    const params = {
      TableName: this.tableName,
      Item: {
        pk: toInsert.apikey,
        sk: RecordType.APIKEY,
        ...toInsert,
      },
    };

    return this.dynamoDB.put(params).promise();
  }

  delete(pk: string): Promise<any> {
    const params = {
      TableName: this.tableName,
      Key: {
        pk,
        sk: RecordType.APIKEY,
      },
    };

    return this.dynamoDB.delete(params).promise();
  }
}

export { ApiKey, ApiKeyRepository };
