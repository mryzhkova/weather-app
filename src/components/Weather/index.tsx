import React from 'react';

import WeatherItem from '@/components/WeatherItem';
import { useTypedSelector } from '@/hooks/storeHooks';
import { IWeather } from '@/interfaces';

import { WeatherItemsWrapper, WeatherWrapper } from './styled';


const Weather = () => {
  const { currentWeather, weather } = useTypedSelector(state => state.weatherState);

  return (
    <WeatherWrapper>
      <WeatherItem dayParams={currentWeather} currentItem />
      <WeatherItemsWrapper>
        {weather.map((day: IWeather) => (
          <WeatherItem dayParams={day} key={day.datetime} />
        ))}
      </WeatherItemsWrapper>
    </WeatherWrapper>
  );
};

export default Weather;
