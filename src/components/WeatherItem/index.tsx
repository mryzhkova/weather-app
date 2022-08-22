import React, { FC } from 'react';

import { Mode } from '@/constants';
import { getImages, getWeekDay } from '@/helpers/weatherHelpers';

import { IProps } from './interfaces';
import { StyledDay, StyledIcon, StyledTemp, WeatherItemWrapper } from './styled';


const WeatherItem: FC<IProps> = ({ dayParams, currentItem, mode }): JSX.Element => {
  const { description, temp, datetime } = dayParams;

  const { icon } = getImages(description);

  const day = mode === Mode.daily ? getWeekDay(datetime) : datetime.slice(0, 5);

  const dayOutput = !currentItem ? day : mode === Mode.daily ? 'today' : 'now';

  return (
    <WeatherItemWrapper currentItem={currentItem}>
      <StyledDay currentItem={currentItem}>{dayOutput}</StyledDay>
      <StyledIcon currentItem={currentItem} src={icon} alt="icon" />
      <StyledTemp currentItem={currentItem}>
        {Math.round(temp)}
        &deg;
      </StyledTemp>
    </WeatherItemWrapper>
  );
};

export default WeatherItem;
