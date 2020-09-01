import { Handler, Request, Response } from 'express';

export const createLogoutHandler = (): Handler => {
  return async (req: Request, res: Response) => {
    return res.status(200).clearCookie('token').json({});
  };
};
