import { ActionTypes } from '@/constants';
import { IWeatherAction } from '@/interfaces';
import { TPayloadAction } from '@/types';


export const getWeather = (payload: TPayloadAction): IWeatherAction => ({
  type: ActionTypes.GET_WEATHER,
  payload
});
