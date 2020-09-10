import * as jwt from 'jsonwebtoken';

export const getSubFromAccessToken = (authHeader: string) => {
  const jwtToken = authHeader.split('Bearer ')[1];
  const decodedJwt = jwt.decode(jwtToken);
  return decodedJwt.sub;
};
