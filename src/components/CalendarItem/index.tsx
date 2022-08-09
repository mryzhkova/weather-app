import React, { FC } from 'react';

import { IProps } from './interfaces';
import { StyledCalendarItem, StyledCalendarText, StyledCalendarTime } from './styled';


const CalendarItem: FC<IProps> = ({ time, summary }): JSX.Element => (
  <StyledCalendarItem>
    <StyledCalendarTime><span>{time}</span></StyledCalendarTime>
    <StyledCalendarText>{summary}</StyledCalendarText>
  </StyledCalendarItem>
);

export default CalendarItem;
