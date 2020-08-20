import axios, { AxiosResponse } from 'axios';

export class Api {
  readonly baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  // async createArtist(
  //   artistName: string,
  //   ownerUuid: string,
  //   data: JSON
  // ): Promise<string> {
  //   const { res } = await axios.post(`${this.baseUrl}/api/artist`, {
  //     artistName: artistName,
  //     ownerUuid: ownerUuid,
  //     data: data,
  //   });
  //   return res;
  // }

  async getArtists(ownerUuid: string): Promise<AxiosResponse> {
    console.log(`${this.baseUrl}/api/artist/${ownerUuid}`);
    const result = await axios.get(`${this.baseUrl}/api/artist/${ownerUuid}`);
    return result;
  }
}
