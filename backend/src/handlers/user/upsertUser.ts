import { Handler, Request, Response } from 'express';
import { User, UserRepository } from '../../repository/user';

export function createUpsertUserHandler(userRepo: UserRepository): Handler {
  return async (req: Request, res: Response) => {
    const { userId, emailAddress } = req.body;
    let user = await userRepo.findByPK(userId);

    if (user === undefined) {
      user = {
        userId: userId,
        emailAddress: emailAddress,
        enabled: true,
      };
      user = await userRepo.insert(user);
    }

    return res.json({ user });
  };
}
