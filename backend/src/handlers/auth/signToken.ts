import * as jwt from "jsonwebtoken";

export function signToken(contents: object, expiresIn: string | number): string {
  return jwt.sign({ ...contents }, 'secret', { expiresIn:  expiresIn });
}