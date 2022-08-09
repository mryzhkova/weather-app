import React, { useEffect, useState } from 'react';

import { getDay, getTime } from '@/helpers';

import { DayWrapper, StyledDate, Time } from './styled';


const Clock = (): JSX.Element => {
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setDate(new Date()), 30000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const { time, timeFormat } = getTime(date);

  const day = getDay(date);

  return (
    <DayWrapper>
      <div>
        <Time>{time}</Time>
        <span>{timeFormat}</span>
      </div>
      <StyledDate>{day}</StyledDate>
    </DayWrapper>
  );
};

export default Clock;
