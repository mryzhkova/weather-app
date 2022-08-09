import React, { FC } from 'react';

import { getWeekDay, getImages } from '@/helpers';

import { IProps } from './interfaces';
import { StyledDay, StyledIcon, StyledTemp, WeatherItemWrapper } from './styled';


const WeatherItem: FC<IProps> = ({ dayParams, currentItem }): JSX.Element => {
  const { description, temp, datetime } = dayParams;

  const { icon } = getImages(description);

  const day = getWeekDay(datetime);

  return (
    <WeatherItemWrapper currentItem={currentItem}>
      <StyledDay currentItem={currentItem}>{currentItem ? 'today' : day}</StyledDay>
      <StyledIcon currentItem={currentItem} src={icon} alt="icon" />
      <StyledTemp currentItem={currentItem}>
        {Math.round(temp)}
        &deg;
      </StyledTemp>
    </WeatherItemWrapper>
  );
};

export default WeatherItem;
