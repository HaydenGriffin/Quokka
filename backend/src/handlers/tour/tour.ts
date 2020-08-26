import { Handler, Request, Response } from 'express';
import { TourItem, TourRepository } from '../../repository/tour';

export const createNewTourHandler = (tourRepo: TourRepository): Handler => {
  return async (req: Request, res: Response) => {
    const { ownerUuid, artistUuid, data } = req.body;
    const tourToInsert = new TourItem(ownerUuid, artistUuid, data);
    let result = await tourRepo.insert(tourToInsert);

    res.status(200).json({ result });
  };
};

export const createFindUserToursHandler = (
  tourRepo: TourRepository
): Handler => {
  return async (req: Request, res: Response) => {
    const { ownerUuid } = req.params;

    let result = await tourRepo.findByGSIPK(ownerUuid);

    res.status(200).json(result);
  };
};

export const createFindUserArtistToursHandler = (
  tourRepo: TourRepository
): Handler => {
  return async (req: Request, res: Response) => {
    const { ownerUuid, artistUuid } = req.params;

    let result = await tourRepo.findByGSIPKSK(ownerUuid, artistUuid);

    res.status(200).json(result);
  };
};
