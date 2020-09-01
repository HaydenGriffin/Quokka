import { AbstractAPI } from '../abstractApi';
import axios, { AxiosResponse } from 'axios';

export class TourAPI extends AbstractAPI {
  async create(artistUuid: string, tourName: string): Promise<string> {
    const { res } = await axios.post(`${this.baseUrl}/api/tour`, {
      artistUuid,
      tourName,
    });
    return res;
  }

  async find(): Promise<AxiosResponse> {
    const result = await axios.get(`${this.baseUrl}/api/tours`);
    return result;
  }

  async findByArtist(artistUuid: string): Promise<AxiosResponse> {
    const result = await axios.get(`${this.baseUrl}/api/${artistUuid}/tours`);
    return result;
  }
}
