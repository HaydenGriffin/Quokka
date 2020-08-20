import { Handler, Request, Response } from 'express';
import { Artist, ArtistRepository } from '../../repository/artist';

export const createNewArtistHandler = (
  artistRepo: ArtistRepository
): Handler => {
  return async (req: Request, res: Response) => {
    const params = req.body;

    const artistToInsert = new Artist(
      params.artistName,
      params.ownerUuid,
      params.data
    );

    let result = await artistRepo.insert(artistToInsert);

    res.status(200).json({ result });
  };
};

export const createFindArtistsByGSIHandler = (
  artistRepo: ArtistRepository
): Handler => {
  return async (req: Request, res: Response) => {
    const { ownerUuid } = req.params;

    let result = await artistRepo.findByGSI(ownerUuid);

    res.status(200).json(result);
  };
};
