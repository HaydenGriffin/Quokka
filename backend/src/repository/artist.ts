import { Repository } from './types';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { v4 as uuidv4 } from 'uuid';

class Artist {
  PK: string;
  SK: number;
  itemType: string;
  ownerUuid: string;
  artistName: string;
  data: JSON;

  constructor(artistName: string, ownerUuid: string, data: JSON) {
    this.PK = uuidv4();
    this.SK = Date.now();
    this.itemType = 'artist';
    this.ownerUuid = ownerUuid;
    this.artistName = artistName;
    this.data = data;
  }
}

class ArtistRepository implements Repository<Artist> {
  private readonly dynamoDB: DocumentClient;
  private readonly tableName: string;

  constructor(tableName: string, dynamoDB: DocumentClient) {
    this.tableName = tableName;
    this.dynamoDB = dynamoDB;
  }

  async findByPK(PK: string, SK: number): Promise<Artist> {
    const params = {
      TableName: this.tableName,
      Key: {
        PK: PK,
        SK: SK,
      },
    };
    return (await this.dynamoDB.get(params).promise()).Item as Artist;
  }

  async findByGSI(ownerUuid: string): Promise<Artist[]> {
    const params = {
      TableName: this.tableName,
      IndexName: 'itemtype-ownerUuid-index',
      KeyConditionExpression: 'itemType = :itemType and ownerUuid = :ownerUuid',
      ExpressionAttributeValues: {
        ':itemType': 'artist',
        ':ownerUuid': ownerUuid,
      },
    };
    return (await this.dynamoDB.query(params).promise()).Items as Artist[];
  }

  async insert(toInsert: Artist): Promise<any> {
    const params = {
      TableName: this.tableName,
      Item: {
        PK: toInsert.PK,
        SK: toInsert.SK,
        itemType: toInsert.itemType,
        ownerUuid: toInsert.ownerUuid,
        artistName: toInsert.artistName,
        data: toInsert.data,
      },
    };

    return this.dynamoDB.put(params).promise();
  }
}

export { Artist, ArtistRepository };
