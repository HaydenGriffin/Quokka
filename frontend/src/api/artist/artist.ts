import { AbstractAPI } from '../abstractApi';
import axios, { AxiosResponse } from 'axios';

export class ArtistAPI extends AbstractAPI {
  async create(artistName: string, token: string): Promise<AxiosResponse> {
    const result = await axios.post(
      `${this.baseUrl}/api/artist`,
      {
        artistName,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return result;
  }

  async find(token: string): Promise<AxiosResponse> {
    const result = await axios.get(`${this.baseUrl}/api/artists`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return result;
  }
}
