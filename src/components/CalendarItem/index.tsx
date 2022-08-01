import React, { FC } from 'react';

import { StyledCalendarItem, StyledCalendarText, StyledCalendarTime } from './components';

interface IProps {
  time: string;
  summary: string;
}


const CalendarItem: FC<IProps> = ({ time, summary }): JSX.Element => (
  <StyledCalendarItem>
    <StyledCalendarTime>{time}</StyledCalendarTime>
    <StyledCalendarText>{summary}</StyledCalendarText>
  </StyledCalendarItem>
);

export default CalendarItem;
