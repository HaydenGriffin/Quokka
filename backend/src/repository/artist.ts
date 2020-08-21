import { v4 as uuidv4 } from 'uuid';
import { Item, RecordType } from './types';
import { Repository } from './index';

class ArtistItem extends Item {
  constructor(ownerUuid: string, data: JSON) {
    super();
    this.PK = uuidv4();
    this.SK = Date.now();
    this.ownerUuid = ownerUuid;
    this.recordTypeParentUuids = RecordType.artist;
    this.data = data;
  }
}

class ArtistRepository extends Repository<ArtistItem> {}

export { ArtistItem, ArtistRepository };
