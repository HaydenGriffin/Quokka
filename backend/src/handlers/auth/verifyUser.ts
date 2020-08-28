import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { cleanUser } from '../../data/cleanUser';
import { User } from '../../repository/user';
import { QuokkaError } from '../../error/types';

export const verifyUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = verifyUser(req.cookies);
    req['user'] = cleanUser(user);
  } catch (err) {
    return handleVerifyUserError(res, err);
  }

  next();
};

export function verifyUser(cookies: any): User {
  if (!cookies) {
    throw new CookiesNotPresentError();
  }

  const { token } = cookies;

  if (!token) {
    throw new TokenNotPresentError();
  }

  return jwt.verify(token, 'secret') as User;
}

export function handleVerifyUserError(res: Response, err: Error) {
  if (
    err instanceof CookiesNotPresentError ||
    err instanceof TokenNotPresentError
  ) {
    return res.status(401).json({ message: err.message });
  }

  if (err instanceof jwt.TokenExpiredError) {
    return res.status(401).json({ message: 'Token expired' });
  }

  return res.status(500).json({ message: 'Internal server error' });
}

export class CookiesNotPresentError extends QuokkaError {
  constructor() {
    super('Cookies not present');
  }
}

export class TokenNotPresentError extends QuokkaError {
  constructor() {
    super('Token not present');
  }
}
