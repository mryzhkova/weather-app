import { ActionTypes } from '@/constants';

import type { TPayloadAction } from '@/types';


export interface IWeatherState {
  currentWeather: IWeather;
  weather: IWeather[];
  isLoading: boolean;
  response: IResponse;
  city: string;
  reqTime: number;
}

export interface IWeatherResponse {
  max_temp: number;
  weather: {
    description: string;
  }
  datetime: string;
}

export interface IResponse {
  status: number;
  message: string;
}

export interface IListResponse<T> {
  data: T[];
  city_name: string;
}

export interface ILocation {
  lat: number;
  lon: number;
}

export interface IWeather {
  temp: number;
  description: string;
  datetime: string;
}

export interface IWeatherAction {
  type: ActionTypes.GET_WEATHER;
  payload: TPayloadAction;
}

export interface IEvent {
  id: string,
  time: string,
  summary: string
}

export interface IEventState {
  events: IEvent[];
  signed: boolean;
}
