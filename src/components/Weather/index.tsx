import React from 'react';

import WeatherItem from '@/components/WeatherItem';
import { useTypedSelector } from '@/hooks/storeHooks';

import { WeatherItemsWrapper, WeatherWrapper } from './components';


const Weather = () => {
  const { currentWeather, weather } = useTypedSelector(state => state.weatherState);

  return (
    <WeatherWrapper>
      <WeatherItem dayParams={currentWeather} currentItem />
      <WeatherItemsWrapper>
        {weather.map(day => (
          <WeatherItem dayParams={day} key={day.datetime} />
        ))}
      </WeatherItemsWrapper>
    </WeatherWrapper>
  );
};

export default Weather;
