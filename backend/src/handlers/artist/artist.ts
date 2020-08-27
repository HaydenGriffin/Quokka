import { Handler, Request, Response } from 'express';
import { ArtistItem, ArtistRepository } from '../../repository/artist';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';

export const createNewArtistHandler = (
  artistRepo: ArtistRepository
): Handler => {
  return async (req: Request, res: Response) => {
    const { ownerUuid, artistName } = req.body;
    let artistToInsert = <ArtistItem>{};
    artistToInsert.ownerUuid = ownerUuid;
    artistToInsert.artistName = artistName;
    artistToInsert.pk = uuidv4();
    artistToInsert.sk = dayjs().format();

    let result = await artistRepo.insert(artistToInsert);

    res.status(200).json({ result });
  };
};

export const createFindUserArtistsHandler = (
  artistRepo: ArtistRepository
): Handler => {
  return async (req: Request, res: Response) => {
    const { ownerUuid } = req.params;

    let result = await artistRepo.findByOwner(ownerUuid);

    res.status(200).json(result);
  };
};
