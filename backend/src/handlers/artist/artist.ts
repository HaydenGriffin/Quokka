import { Handler, Request, Response } from 'express';
import { ArtistItem, ArtistRepository } from '../../repository/artist';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';
import { User } from '../../repository/user';
import { getSubFromAccessToken } from '../../data/getSubFromAccessToken';

export const createNewArtistHandler = (
  artistRepo: ArtistRepository
): Handler => {
  return async (req: Request, res: Response) => {
    const sub = getSubFromAccessToken(req.headers.authorization);
    const { artistName } = req.body;
    let artistToInsert = <ArtistItem>{};
    artistToInsert.ownerEmailAddress = sub;
    artistToInsert.artistName = artistName;
    artistToInsert.pk = uuidv4();
    artistToInsert.sk = dayjs().format();

    let result = await artistRepo.insert(artistToInsert);

    res.status(200).json({ result });
  };
};

export const createFindOwnerArtistsHandler = (
  artistRepo: ArtistRepository
): Handler => {
  return async (req: Request, res: Response) => {
    const sub = getSubFromAccessToken(req.headers.authorization);
    let result = await artistRepo.findByOwner(sub);

    res.status(200).json(result);
  };
};
