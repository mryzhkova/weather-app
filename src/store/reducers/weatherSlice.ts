import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getWeatherFields } from '@/helpers';
import { IListResponse, IWeatherResponse, IWeatherState } from '@/interfaces';


const initialState: IWeatherState = {
  currentWeather: {
    temp: 0,
    description: '',
    datetime: '',
  },
  weather: [],
  isLoading: false,
  response: {
    status: 0,
    message: '',
  },
  city: '',
  reqTime: 0
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
      const [currentWeather] = allWeather;
      state.city = action.payload.city_name;
      state.currentWeather = currentWeather;
      state.weather = allWeather.slice(1);
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
    }
  },
});

export const weatherActions = weatherSlice.actions;

export default weatherSlice.reducer;
