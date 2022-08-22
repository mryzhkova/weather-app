import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Mode } from '@/constants';
import { getHourlyWeatherFields, getWeatherFields } from '@/helpers/weatherHelpers';
import { IHourlyWeatherResponse, IListResponse, IWeatherResponse, IWeatherState } from '@/interfaces';


const initialState: IWeatherState = {
  todaytWeather: {
    temp: 0,
    description: '',
    datetime: '',
  },
  currentWeather: {
    temp: 0,
    description: '',
    datetime: '',
  },
  hourlyWeather: [],
  weather: [],
  isLoading: false,
  response: {
    status: 0,
    message: '',
  },
  city: '',
  reqTime: 0,
  weatherMode: Mode.daily
};

export const weatherSlice = createSlice({
  name: 'weather-slice',
  initialState,
  reducers: {
    fetchWeatherStart(state) {
      state.isLoading = true;
    },
    fetchWeather(state, action: PayloadAction<IListResponse<IWeatherResponse>>) {
      if (!action.payload.data) return;
      const allWeather = getWeatherFields(action.payload.data);
      const [todaytWeather] = allWeather;
      state.city = action.payload.city_name;
      state.todaytWeather = todaytWeather;
      state.weather = allWeather.slice(1);
    },
    fetchHourlyWeather(state, action: PayloadAction<IHourlyWeatherResponse>) {
      if (!action.payload) return;
      const allWeather = getHourlyWeatherFields(action.payload.days);
      const [currentWeather] = allWeather;
      state.currentWeather = currentWeather;
      state.hourlyWeather = allWeather.slice(1);
    },
    fetchWeatherEnd(state, action) {
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
    setRequestTime(state, action: PayloadAction<number>) {
      state.reqTime = action.payload;
    },
    setWeatherMode(state, action: PayloadAction<string>) {
      state.weatherMode = action.payload;
    }
  },
});

export const weatherActions = weatherSlice.actions;

export default weatherSlice.reducer;
