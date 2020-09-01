import { AbstractAPI } from '../abstractApi';
import axios, { AxiosResponse } from 'axios';

export class TourMemberAPI extends AbstractAPI {
  async create(tourUuid: string, userEmailAddress: string): Promise<string> {
    const { res } = await axios.post(
      `${this.baseUrl}/api/tour/${tourUuid}/member`,
      {
        userEmailAddress,
      }
    );
    return res;
  }

  async find(): Promise<AxiosResponse> {
    const result = await axios.get(`${this.baseUrl}/api/members`);
    return result;
  }

  async findByTour(tourUuid: string): Promise<AxiosResponse> {
    const result = await axios.get(
      `${this.baseUrl}/api/tour/${tourUuid}/members`
    );
    return result;
  }

  async findUserTours(): Promise<AxiosResponse> {
    const result = await axios.get(`${this.baseUrl}/api/tours/all`);
    return result;
  }
}
