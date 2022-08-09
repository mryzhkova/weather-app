import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import Calendar from '@/components/Calendar';
import FormCity from '@/components/CustomForm';
import Clock from '@/components/Date';
import Loader from '@/components/Loader';
import Weather from '@/components/Weather';
import { minReqTime } from '@/constants';
import { checkTimer, getLocation } from '@/helpers';
import { useTypedDispatch, useTypedSelector } from '@/hooks/storeHooks';
import { getWeather } from '@/store/actions';
import { weatherActions } from '@/store/reducers/weatherSlice';
import { defaultTheme } from '@/theme';

import { AppWrapper, ContentWrapper, CalendarWrappper } from './styled';

const App = () => {
  const dispatch = useTypedDispatch();

  const { setRequestTime } = weatherActions;

  const { description } = useTypedSelector(
    state => state.weatherState.currentWeather
  );

  const { isLoading, reqTime, city } = useTypedSelector(state => state.weatherState);

  useEffect(() => {
    const fetchByLocation = async () => {
      const pos = await getLocation();
      dispatch(getWeather(pos));
      dispatch(setRequestTime(new Date().getTime()));
    };
    if (checkTimer(reqTime)) fetchByLocation();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(getWeather(city));
      dispatch(setRequestTime(new Date().getTime()));
    }, minReqTime);
    return () => {
      clearInterval(intervalId);
    };
  }, [city]);

  if (isLoading) return <Loader />;

  return (
    <ThemeProvider theme={defaultTheme}>
      <AppWrapper weatherDesc={description}>
        <ContentWrapper>
          <CalendarWrappper>
            <Clock />
            <Calendar />
          </CalendarWrappper>
          <FormCity />
        </ContentWrapper>
        <Weather />
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;
