import { all } from 'redux-saga/effects';

import { watchWeatherAsync } from './weatherSaga';


export function* rootSaga() {
  yield all([
    watchWeatherAsync()
  ]);
}
