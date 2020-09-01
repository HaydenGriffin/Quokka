import bcrypt from 'bcryptjs';
import { User } from '../../repository/user';
import { RequiredFieldsValidator } from '../../validator/requiredFieldsValidator';
import { signToken } from './signToken';
import { Request, Response, Router, Handler } from 'express';
import { Repository } from '../../repository/types';

export const createRegisterUserHandler = (
  requestValidator: RequiredFieldsValidator,
  userRepo: Repository<User>
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
      token = await registerUser(req.body, userRepo);
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
  userRepo: Repository<User>
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
  await userRepo.insert(user);
  delete user.password;

  return signToken(user, 84600);
}
