export interface Repository<T> {
  findByPK(pk: string, sk: number): Promise<T>;
  findByGSI(uuid: string): Promise<T[]>;
  insert(toInsert: T): Promise<any>;
}
