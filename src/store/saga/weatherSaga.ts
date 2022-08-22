import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

import weatherApi from '@/axios/weatherApi';
import { ActionTypes } from '@/constants';
import { isLocation } from '@/helpers/helpers';
import { IHourlyWeatherResponse, IListResponse, IWeatherResponse } from '@/interfaces';
import { weatherActions } from '@/store/reducers/weatherSlice';
import { TPayloadAction } from '@/types';


const { fetchWeatherStart, fetchWeatherEnd, fetchWeather, fetchHourlyWeather } = weatherActions;

const { getByLocation, getByCity, getHourlyByCity, getHourlyByLocation } = weatherApi;

function* getWeather(action: PayloadAction<TPayloadAction>) {
  try {
    yield put(fetchWeatherStart());
    let weatherResponse: AxiosResponse<IListResponse<IWeatherResponse>>;
    let hourlyWeatherResponse: AxiosResponse<IHourlyWeatherResponse>;
    if (isLocation(action.payload)) {
      weatherResponse = yield call(getByLocation, action.payload);
      hourlyWeatherResponse = yield call(getHourlyByLocation, action.payload);
    } else {
      weatherResponse = yield call(getByCity, action.payload);
      hourlyWeatherResponse = yield call(getHourlyByCity, action.payload);
    }
    yield put(fetchWeather(weatherResponse.data));
    yield put(fetchHourlyWeather(hourlyWeatherResponse.data));
    yield put(fetchWeatherEnd(weatherResponse));
  } catch (error: any) {
    yield put(fetchWeatherEnd(error.response));
  }
}

export function* watchWeatherAsync() {
  yield takeEvery(ActionTypes.GET_WEATHER, getWeather);
}
