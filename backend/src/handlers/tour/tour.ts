import { Handler, Request, Response } from 'express';
import { TourItem, TourRepository } from '../../repository/tour';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';
import { User } from '../../repository/user';

export const createNewTourHandler = (tourRepo: TourRepository): Handler => {
  return async (req: Request, res: Response) => {
    const { artistUuid, tourName } = req.body;
    const user = req['user'] as User;

    let tourToInsert = <TourItem>{};
    tourToInsert.ownerEmailAddress = user.emailAddress;
    tourToInsert.artistUuid = artistUuid;
    tourToInsert.tourName = tourName;
    tourToInsert.pk = uuidv4();
    tourToInsert.sk = dayjs().format();

    let result = await tourRepo.insert(tourToInsert);

    res.status(200).json({ result });
  };
};

export const createFindOwnerToursHandler = (
  tourRepo: TourRepository
): Handler => {
  return async (req: Request, res: Response) => {
    const user = req['user'] as User;

    let result = await tourRepo.findByOwner(user.emailAddress);

    res.status(200).json(result);
  };
};

export const createFindOwnerArtistToursHandler = (
  tourRepo: TourRepository
): Handler => {
  return async (req: Request, res: Response) => {
    const { artistUuid } = req.params;
    const user = req['user'] as User;

    let result = await tourRepo.findByOwnerArtist(
      user.emailAddress,
      artistUuid
    );

    res.status(200).json(result);
  };
};
