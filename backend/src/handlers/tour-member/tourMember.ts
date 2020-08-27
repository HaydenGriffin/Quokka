import { Handler, Request, Response } from 'express';
import {
  TourMemberItem,
  TourMemberRepository,
} from '../../repository/tourMember';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';
import { RecordType } from '../../repository/types';

export const createNewTourMemberHandler = (
  tourRepo: TourMemberRepository
): Handler => {
  return async (req: Request, res: Response) => {
    const { tourUuid } = req.params;
    const { ownerUuid, userUuid } = req.body;
    let tourMemberToInsert = <TourMemberItem>{};
    tourMemberToInsert.tourUuid = tourUuid;
    tourMemberToInsert.ownerUuid = ownerUuid;
    tourMemberToInsert.pk = userUuid;
    tourMemberToInsert.sk = `${RecordType.MEMBER}_${dayjs().format()}`;

    let result = await tourRepo.insert(tourMemberToInsert);

    res.status(200).json({ result });
  };
};

export const createFindOwnerMembersHandler = (
  tourRepo: TourMemberRepository
): Handler => {
  return async (req: Request, res: Response) => {
    const { ownerUuid } = req.params;

    let result = await tourRepo.findByOwner(ownerUuid);

    res.status(200).json(result);
  };
};

export const createFindOwnerTourMembersHandler = (
  tourRepo: TourMemberRepository
): Handler => {
  return async (req: Request, res: Response) => {
    const { ownerUuid, tourUuid } = req.params;

    let result = await tourRepo.findByOwnerTour(ownerUuid, tourUuid);

    res.status(200).json(result);
  };
};

export const createFindUserTours = (
  tourRepo: TourMemberRepository
): Handler => {
  return async (req: Request, res: Response) => {
    const { userUuid } = req.params;

    let result = await tourRepo.findUserTours(userUuid);

    res.status(200).json(result);
  };
};
