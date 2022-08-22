import React from 'react';

import WeatherItem from '@/components/WeatherItem';
import { Mode } from '@/constants';
import { useTypedSelector } from '@/hooks/storeHooks';
import { IWeather } from '@/interfaces';

import { WeatherItemsWrapper, WeatherWrapper } from './styled';

const Weather = () => {
  const {
    todaytWeather,
    weather,
    hourlyWeather,
    currentWeather,
    weatherMode
  } = useTypedSelector(state => state.weatherState);

  const dayParams = weatherMode === Mode.daily ? todaytWeather : currentWeather;

  const weatherData = weatherMode === Mode.daily ? weather : hourlyWeather;

  return (
    <WeatherWrapper>
      <WeatherItem dayParams={dayParams} mode={weatherMode} currentItem />
      <WeatherItemsWrapper>
        {weatherData.map((day: IWeather) => (
          <WeatherItem dayParams={day} mode={weatherMode} key={day.datetime} />
        ))}
      </WeatherItemsWrapper>
    </WeatherWrapper>
  );
};

export default Weather;
