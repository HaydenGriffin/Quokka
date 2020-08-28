import { User } from '../repository/user';

export function cleanUser(user: User): User {
  delete user.password;
  delete user.pk;
  delete user.sk;

  return user;
}
