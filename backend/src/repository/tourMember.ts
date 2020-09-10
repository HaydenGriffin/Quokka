import { RecordType, Repository } from './types';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

interface TourMemberItem {
  pk: string;
  sk: string;
  ownerId: string;
  emailAddress: string;
  tourUuid: string;
}

class TourMemberRepository implements Repository<TourMemberItem> {
  private readonly dynamoDB: DocumentClient;
  private readonly tableName: string;

  constructor(tableName: string, dynamoDB: DocumentClient) {
    this.tableName = tableName;
    this.dynamoDB = dynamoDB;
  }

  async findByPK(pk: string, sk: string): Promise<TourMemberItem> {
    const params = {
      TableName: this.tableName,
      Key: {
        pk,
        sk,
      },
    };
    return (await this.dynamoDB.get(params).promise()).Item as TourMemberItem;
  }

  async findUserTours(userEmailAddress: string): Promise<TourMemberItem[]> {
    const params = {
      TableName: this.tableName,
      KeyConditionExpression:
        'pk = :userEmailAddress and begins_with(sk, :recordType)',
      ExpressionAttributeValues: {
        ':userEmailAddress': userEmailAddress,
        ':recordType': RecordType.MEMBER,
      },
    };
    return (await this.dynamoDB.query(params).promise())
      .Items as TourMemberItem[];
  }

  insert(toInsert: TourMemberItem): Promise<any> {
    const params = {
      TableName: this.tableName,
      Item: {
        pk: toInsert.pk,
        sk: toInsert.sk,
        ownerId: toInsert.ownerId,
        recordTypeParentUuid: `${RecordType.MEMBER}_${toInsert.tourUuid}`,
        ...toInsert,
      },
    };

    return this.dynamoDB.put(params).promise();
  }

  async findByOwner(ownerId: string): Promise<TourMemberItem[]> {
    const params = {
      TableName: this.tableName,
      IndexName: 'ownerId-recordTypeParentUuid_index',
      KeyConditionExpression:
        'ownerId = :ownerId and begins_with(recordTypeParentUuid, :recordTypeParentUuid)',
      ExpressionAttributeValues: {
        ':ownerId': ownerId,
        ':recordTypeParentUuid': RecordType.MEMBER,
      },
    };
    return (await this.dynamoDB.query(params).promise())
      .Items as TourMemberItem[];
  }

  async findByOwnerTour(
    ownerId: string,
    tourUuid: string
  ): Promise<TourMemberItem[]> {
    const params = {
      TableName: this.tableName,
      IndexName: 'ownerId-recordTypeParentUuid_index',
      KeyConditionExpression:
        'ownerId = :ownerId and recordTypeParentUuid = :recordTypeParentUuid',
      ExpressionAttributeValues: {
        ':ownerId': ownerId,
        ':recordTypeParentUuid': `${RecordType.MEMBER}_${tourUuid}`,
      },
    };
    return (await this.dynamoDB.query(params).promise())
      .Items as TourMemberItem[];
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

export { TourMemberItem, TourMemberRepository };
