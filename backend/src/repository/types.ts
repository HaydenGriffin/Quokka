export enum RecordType {
  artist = 'artist',
  track = 'track',
}

export class Item {
  PK: string;
  SK: number;
  ownerUuid: string;
  recordTypeParentUuids: string;
  data: JSON;
}
