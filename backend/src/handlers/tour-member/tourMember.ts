import { Handler, Request, Response } from 'express';
import {
  TourMemberItem,
  TourMemberRepository,
} from '../../repository/tourMember';

export const createNewTourMemberHandler = (
  tourRepo: TourMemberRepository
): Handler => {
  return async (req: Request, res: Response) => {
    const { tourUuid } = req.params;
    const { ownerUuid, data } = req.body;
    const tourToInsert = new TourMemberItem(ownerUuid, tourUuid, data);
    let result = await tourRepo.insert(tourToInsert);

    res.status(200).json({ result });
  };
};

export const createFindUserMembersHandler = (
  tourRepo: TourMemberRepository
): Handler => {
  return async (req: Request, res: Response) => {
    const { ownerUuid } = req.params;

    let result = await tourRepo.findByGSIPK(ownerUuid);

    res.status(200).json(result);
  };
};

export const createFindUserTourMembersHandler = (
  tourRepo: TourMemberRepository
): Handler => {
  return async (req: Request, res: Response) => {
    const { ownerUuid, tourUuid } = req.params;

    let result = await tourRepo.findByGSIPKSK(ownerUuid, tourUuid);

    res.status(200).json(result);
  };
};
