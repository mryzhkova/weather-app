import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

import weatherApi from '@/axios/weatherApi';
import { ActionTypes } from '@/constants';
import { isLocation } from '@/helpers';
import { weatherActions } from '@/store/slices/weatherSlice';
import { IListResponse, TPayloadAction, IWeatherResponse } from '@/types';


const { fetchWeatherStart, fetchWeatherEnd, fetchWeather } = weatherActions;


function* getWeather(action: PayloadAction<TPayloadAction>) {
  try {
    yield put(fetchWeatherStart());
    let response: AxiosResponse<IListResponse<IWeatherResponse>>;
    if (isLocation(action.payload)) {
      response = yield call(weatherApi.getByLocation, action.payload);
    } else {
      response = yield call(weatherApi.getByCity, action.payload);
    }
    yield put(fetchWeather(response.data));
    yield put(fetchWeatherEnd(response));
  } catch (error: any) {
    yield put(fetchWeatherEnd(error.response));
  }
}

export function* watchWeatherAsync() {
  yield takeEvery(ActionTypes.GET_WEATHER, getWeather);
}
