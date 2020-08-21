import axios, { AxiosResponse } from 'axios';

export class Api {
  readonly baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async createArtist(ownerUuid: string, data: any): Promise<string> {
    const { res } = await axios.post(`${this.baseUrl}/api/artist`, {
      ownerUuid: ownerUuid,
      data: data,
    });
    return res;
  }

  async getArtists(ownerUuid: string): Promise<AxiosResponse> {
    const result = await axios.get(`${this.baseUrl}/api/artist/${ownerUuid}`);
    return result;
  }
}
