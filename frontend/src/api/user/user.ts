import { AbstractAPI } from '../abstractApi';
import axios, { AxiosResponse } from 'axios';

export class UserAPI extends AbstractAPI {
  async register(
    emailAddress: string,
    password: string,
    passwordConfirm: string,
    firstName: string
  ): Promise<string> {
    const { res } = await axios.post(`${this.baseUrl}/api/register`, {
      emailAddress,
      password,
      passwordConfirm,
      firstName,
    });
    return res;
  }

  async login(emailAddress: string, password: string): Promise<string> {
    const { res } = await axios.post(`${this.baseUrl}/api/login`, {
      emailAddress,
      password,
    });
    return res;
  }

  async logout(): Promise<string> {
    const { res } = await axios.post(`${this.baseUrl}/api/login`);
    return res;
  }
}
