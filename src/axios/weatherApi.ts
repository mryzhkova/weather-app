import { AxiosResponse } from 'axios';

import { dailyWeatherApi, hourlyWeatherApi } from '@/axios';
import { IHourlyWeatherResponse, IListResponse, ILocation, IWeatherResponse } from '@/interfaces';


const weatherApi = {
  getByCity(city: string): Promise<AxiosResponse<IListResponse<IWeatherResponse>>> {
    return dailyWeatherApi.get(`/forecast/daily?city=${city}&days=7`);
  },
  getByLocation({ lat, lon }: ILocation): Promise<AxiosResponse<IListResponse<IWeatherResponse>>> {
    return dailyWeatherApi.get(`/forecast/daily?lat=${lat}&lon=${lon}&days=7`);
  },
  getHourlyByCity(city: string): Promise<AxiosResponse<IHourlyWeatherResponse>> {
    return hourlyWeatherApi.get(`/timeline/${city}/next1days?unitGroup=metric&include=hours`);
  },
  getHourlyByLocation({ lat, lon }: ILocation): Promise<AxiosResponse<IHourlyWeatherResponse>> {
    return hourlyWeatherApi.get(`/timeline/${lat},${lon}/next1days?unitGroup=metric&include=hours`);
  },
};

export default weatherApi;
