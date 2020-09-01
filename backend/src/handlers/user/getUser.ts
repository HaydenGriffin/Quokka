import { Handler, Request, Response } from 'express';

export function createGetUserHandler(): Handler {
  return async (req: Request, res: Response) => {
    res.json(req['user']);
  };
}
