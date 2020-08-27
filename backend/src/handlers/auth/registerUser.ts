import bcrypt from 'bcryptjs';
import dayjs from 'dayjs';
import { v4 } from 'uuid';

import { User } from '../../repository/user';
import { RequiredFieldsValidator } from '../../validator/requiredFieldsValidator';
import { signToken } from './signToken';
import { ApiKey, ApiKeyRepository } from '../../repository/apikey';

import { Request, Response, Router, Handler } from 'express';
import { Repository } from '../../repository/types';

export const createRegisterUserHandler = (
  requestValidator: RequiredFieldsValidator,
  userRepo: Repository<User>,
  apikeyRepo: Repository<ApiKey>
): Handler => {
  return async (req: Request, res: Response) => {
    const validationErrors = requestValidator.validate(req.body);
    if (validationErrors.length > 0) {
      return res.status(400).json({ errors: validationErrors });
    }

    if (req.body['password'] !== req.body['passwordConfirm']) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }

    let token: string;
    try {
      token = await registerUser(req.body, userRepo, apikeyRepo);
    } catch (err) {
      if (err.message === 'Email address already in use') {
        return res.status(400).json({ message: err.message });
      }

      return res.status(500).json({ message: 'Internal server error' });
    }
    return res
      .status(201)
      .cookie('token', token, { httpOnly: true, domain: '' })
      .json({ message: 'User successfully registered!' });
  };
};

async function registerUser(
  newUser: User,
  userRepo: Repository<User>,
  apikeyRepo: Repository<ApiKey>
): Promise<string> {
  let user: User = await userRepo.findByPK(newUser.emailAddress);
  if (user) {
    throw new Error('Email address already in use');
  }

  user = {
    firstName: newUser.firstName,
    emailAddress: newUser.emailAddress,
    password: '',
    enabled: true,
  };

  user.password = await bcrypt.hash(newUser.password, 10);
  const apikey = createApiKey(newUser);
  user.apikey = apikey.apikey;

  await Promise.all([userRepo.insert(user), apikeyRepo.insert(apikey)]);

  delete user.password;

  return signToken(user, 84600);
}

function createApiKey(user: User) {
  const key = v4();
  const apikey: ApiKey = {
    apikey: key,
    createdAt: dayjs().format(),
    enabled: true,
    ownerEmail: user.emailAddress,
  };

  return apikey;
}
