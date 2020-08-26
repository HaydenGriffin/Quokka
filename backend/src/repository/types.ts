export enum RecordType {
  ARTIST = 'artist',
  TOUR = 'tour',
  MEMBER = 'member',
  TRACK = 'track',
}

export class Item {
  PK: string;
  SK: number;
  ownerUuid: string;
  recordTypeParentUuids: string;
  data: JSON;
}

export interface Repository<T> {
  findByPK(PK: string, SK: number): Promise<T>;
  findByGSIPK(ownerUuid: string): Promise<T[]>;
  findByGSIPKSK?(ownerUuid: string, parentUuid: string): Promise<T[]>;
  insert(toInsert: T): Promise<any>;
  delete(PK: string, SK: number): Promise<any>;
}
