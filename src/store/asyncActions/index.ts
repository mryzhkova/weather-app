import { ActionTypes } from '@/constants';
import { IWeatherAction, TPayloadAction } from '@/types';


export const getWeather = (payload: TPayloadAction): IWeatherAction => ({
  type: ActionTypes.GET_WEATHER,
  payload
});

