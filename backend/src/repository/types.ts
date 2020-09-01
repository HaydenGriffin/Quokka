export enum RecordType {
  ACCOUNT = 'ACCOUNT',
  ARTIST = 'ARTIST',
  TOUR = 'TOUR',
  MEMBER = 'MEMBER',
  TRACK = 'TRACK',
}
export interface Repository<T> {
  findByPK(pk: string, sk?: string): Promise<T>;
  insert(toInsert: T): Promise<any>;
  delete(pk: string, sk?: string): Promise<any>;
}
