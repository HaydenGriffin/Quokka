import { AbstractAPI } from '../abstractApi';
import axios, { AxiosResponse } from 'axios';

export class ArtistAPI extends AbstractAPI {
  async create(artistName: string): Promise<string> {
    const { res } = await axios.post(`${this.baseUrl}/api/artist`, {
      artistName,
    });
    return res;
  }

  async find(): Promise<AxiosResponse> {
    const result = await axios.get(`${this.baseUrl}/api/artists`);
    return result;
  }
}
