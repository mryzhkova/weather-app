import React, { FC } from 'react';

import { getDay, getImages } from '@/helpers';

import { StyledDay, StyledTemp, WeatherItemWrapper } from './components';
import { IProps } from './types';


const WeatherItem: FC<IProps> = ({ dayParams, currentItem }): JSX.Element => {
  const { description, temp, datetime } = dayParams;

  const { icon } = getImages(description);

  const day = getDay(datetime);

  return (
    <WeatherItemWrapper currentItem={currentItem}>
      <StyledDay currentItem={currentItem}>{currentItem ? 'today' : day}</StyledDay>
      <img src={icon} alt="icon" />
      <StyledTemp currentItem={currentItem}>
        {Math.round(temp)}
        &deg;
      </StyledTemp>
    </WeatherItemWrapper>
  );
};

export default WeatherItem;
