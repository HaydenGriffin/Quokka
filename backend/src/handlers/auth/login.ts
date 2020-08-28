import bcrypt from 'bcryptjs';
import { Handler, Request, Response } from 'express';

import { RequiredFieldsValidator } from '../../validator/requiredFieldsValidator';
import { User } from '../../repository/user';
import { signToken } from './signToken';
import { Repository } from '../../repository/types';
import { cleanUser } from '../../data/cleanUser';

function invalidCombinationResponse(res: Response) {
  return res
    .status(401)
    .json({ message: 'Email & Password combination does not match' });
}

export const createLoginHandler = (
  requestValidator: RequiredFieldsValidator,
  userRepo: Repository<User>
): Handler => {
  return async (req: Request, res: Response) => {
    const validationErrors = requestValidator.validate(req.body);
    if (validationErrors.length > 0) {
      return res.status(400).json(validationErrors);
    }

    const userRequest = req.body as User;
    const user = await userRepo.findByPK(userRequest.emailAddress);
    if (!user) {
      return invalidCombinationResponse(res);
    }

    const match = await bcrypt.compare(userRequest.password, user.password);
    if (!match) {
      return invalidCombinationResponse(res);
    }

    const cleanedUser = cleanUser(user);

    const token = signToken(cleanedUser, 84600);
    return res
      .status(200)
      .cookie('token', token, { httpOnly: true, domain: '' })
      .json(cleanedUser);
  };
};
