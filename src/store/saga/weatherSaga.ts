import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

import weatherApi from '@/axios/weatherApi';
import { ActionTypes } from '@/constants';
import { isLocation } from '@/helpers';
import { IListResponse, IWeatherResponse } from '@/interfaces';
import { weatherActions } from '@/store/reducers/weatherSlice';
import { TPayloadAction } from '@/types';


const { fetchWeatherStart, fetchWeatherEnd, fetchWeather } = weatherActions;

const { getByLocation, getByCity } = weatherApi;


function* getWeather(action: PayloadAction<TPayloadAction>) {
  try {
    yield put(fetchWeatherStart());
    let response: AxiosResponse<IListResponse<IWeatherResponse>>;
    if (isLocation(action.payload)) {
      response = yield call(getByLocation, action.payload);
    } else {
      response = yield call(getByCity, action.payload);
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
