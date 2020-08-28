import { Handler, Request, Response } from 'express';
import {
  TourMemberItem,
  TourMemberRepository,
} from '../../repository/tourMember';
import dayjs from 'dayjs';
import { RecordType } from '../../repository/types';
import { User } from '../../repository/user';
import { userInfo } from 'os';

export const createNewTourMemberHandler = (
  tourMemberRepo: TourMemberRepository
): Handler => {
  return async (req: Request, res: Response) => {
    const { tourUuid } = req.params;
    const { userUuid } = req.body;
    const user = req['user'] as User;
    let tourMemberToInsert = <TourMemberItem>{};
    tourMemberToInsert.pk = userUuid;
    tourMemberToInsert.sk = `${RecordType.MEMBER}_${dayjs().format()}`;
    tourMemberToInsert.tourUuid = tourUuid;
    tourMemberToInsert.ownerUuid = user.emailAddress;

    let result = await tourMemberRepo.insert(tourMemberToInsert);

    res.status(200).json({ result });
  };
};

export const createFindOwnerMembersHandler = (
  tourRepo: TourMemberRepository
): Handler => {
  return async (req: Request, res: Response) => {
    const user = req['user'] as User;

    let result = await tourRepo.findByOwner(user.emailAddress);

    res.status(200).json(result);
  };
};

export const createFindOwnerTourMembersHandler = (
  tourRepo: TourMemberRepository
): Handler => {
  return async (req: Request, res: Response) => {
    const { tourUuid } = req.params;
    const user = req['user'] as User;

    let result = await tourRepo.findByOwnerTour(user.emailAddress, tourUuid);

    res.status(200).json(result);
  };
};

export const createFindUserTours = (
  tourRepo: TourMemberRepository
): Handler => {
  return async (req: Request, res: Response) => {
    const user = req['user'] as User;

    let result = await tourRepo.findUserTours(user.emailAddress);

    res.status(200).json(result);
  };
};
