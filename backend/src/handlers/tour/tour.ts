import { Handler, Request, Response } from 'express';
import { TourItem, TourRepository } from '../../repository/tour';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';

export const createNewTourHandler = (tourRepo: TourRepository): Handler => {
  return async (req: Request, res: Response) => {
    const { ownerUuid, artistUuid } = req.body;
    let tourToInsert = <TourItem>{};
    tourToInsert.ownerUuid = ownerUuid;
    tourToInsert.artistUuid = artistUuid;
    tourToInsert.pk = uuidv4();
    tourToInsert.sk = dayjs().format();

    let result = await tourRepo.insert(tourToInsert);

    res.status(200).json({ result });
  };
};

export const createFindUserToursHandler = (
  tourRepo: TourRepository
): Handler => {
  return async (req: Request, res: Response) => {
    const { ownerUuid } = req.params;

    let result = await tourRepo.findByOwner(ownerUuid);

    res.status(200).json(result);
  };
};

export const createFindUserArtistToursHandler = (
  tourRepo: TourRepository
): Handler => {
  return async (req: Request, res: Response) => {
    const { ownerUuid, artistUuid } = req.params;

    let result = await tourRepo.findByOwnerArtist(ownerUuid, artistUuid);

    res.status(200).json(result);
  };
};
