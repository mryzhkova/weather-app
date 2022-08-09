import React from 'react';

import CalendarItem from '@/components/CalendarItem';
import { apiCalendar } from '@/configs/googleApiConfig';
import { useTypedDispatch, useTypedSelector } from '@/hooks/storeHooks';
import { IEvent } from '@/interfaces';
import { getEvents, signInGoogle } from '@/store/reducers/eventSlice';


import { StyledButton } from './styled';


const Calendar = () => {
  const dispatch = useTypedDispatch();

  const { events, signed } = useTypedSelector(state => state.eventState);

  const handleSignIn = () => {
    apiCalendar.handleAuthClick();
    dispatch(signInGoogle());
  };

  const handleGetEvents = () => {
    apiCalendar.listUpcomingEvents(3).then(({ result }: any) => {
      dispatch(getEvents(result.items));
    });
  };

  return (
    <div>
      {signed ? (
        <StyledButton type="button" onClick={handleGetEvents}>
          Get events
        </StyledButton>
      ) : (
        <StyledButton type="button" onClick={handleSignIn}>
          Log-in Google
        </StyledButton>
      )}
      {events.length !== 0 && events.map((event: IEvent) => (
        <CalendarItem
          key={event.id}
          time={event.time}
          summary={event.summary}
        />
      ))}
    </div>
  );
};

export default Calendar;
