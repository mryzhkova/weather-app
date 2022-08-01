import { AxiosResponse } from 'axios';

import api from '@/axios';
import { ILocation, IListResponse, IWeatherResponse } from '@/types';


const weatherApi = {
  getByCity(city: string): Promise<AxiosResponse<IListResponse<IWeatherResponse>>> {
    return api.get(`/forecast/daily?city=${city}&days=7`);
  },
  getByLocation({ lat, lon }: ILocation): Promise<AxiosResponse<IListResponse<IWeatherResponse>>> {
    return api.get(`/forecast/daily?lat=${lat}&lon=${lon}&days=7`);
  },
};

export default weatherApi;
