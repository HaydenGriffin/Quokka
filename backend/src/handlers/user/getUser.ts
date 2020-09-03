import { Handler, Request, Response } from 'express';
import { User, UserRepository } from '../../repository/user';

export function createGetUserHandler(userRepo: UserRepository): Handler {
    return async (req: Request, res: Response) => {
        const { sub } = req.body;

        let user = await userRepo.findByPK(sub);

        if (user === undefined) {
            user = await userRepo.insertUser(sub);
        }

        return res.json({ user });
    };
}
