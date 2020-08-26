import { Handler, Request, Response } from 'express';
import { ArtistItem, ArtistRepository } from '../../repository/artist';

export const createNewArtistHandler = (
  artistRepo: ArtistRepository
): Handler => {
  return async (req: Request, res: Response) => {
    const { ownerUuid, data } = req.body;
    const artistToInsert = new ArtistItem(ownerUuid, data);
    let result = await artistRepo.insert(artistToInsert);

    res.status(200).json({ result });
  };
};

export const createFindUserArtistsHandler = (
  artistRepo: ArtistRepository
): Handler => {
  return async (req: Request, res: Response) => {
    const { ownerUuid } = req.params;

    let result = await artistRepo.findByGSIPK(ownerUuid);

    res.status(200).json(formatUserArtistResult(result));
  };
};

const formatUserArtistResult = (artists: ArtistItem[]): any => {
  return artists.map(function (artist: ArtistItem) {
    var responseObject = {};
    responseObject['artistName'] = artist.data['artistName'];
    responseObject['PK'] = artist.PK;
    return responseObject;
  });
};
