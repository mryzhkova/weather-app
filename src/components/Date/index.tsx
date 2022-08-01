import React, { useEffect, useState } from 'react';

import { DayWrapper, StyledDate, StyledTime } from './components';


const Clock = (): JSX.Element => {
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setDate(new Date()), 30000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const time = date.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  const day = date.toLocaleDateString('en-GB', {
    day: 'numeric',
    weekday: 'long',
    month: 'long',
    year: 'numeric',
  });

  return (
    <DayWrapper>
      <StyledTime>
        <span>{time.slice(0, -2)}</span>
        {time.slice(-2)}
      </StyledTime>
      <StyledDate>{day}</StyledDate>
    </DayWrapper>
  );
};

export default Clock;
