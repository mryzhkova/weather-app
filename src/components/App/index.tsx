import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import Calendar from '@/components/Calendar';
import FormCity from '@/components/CustomForm';
import Clock from '@/components/Date';
import Loader from '@/components/Loader';
import Weather from '@/components/Weather';
import { checkTimer, getLocation } from '@/helpers';
import { useTypedDispatch, useTypedSelector } from '@/hooks/storeHooks';
import { getWeather } from '@/store/asyncActions';
import { weatherActions } from '@/store/slices/weatherSlice';
import { defaultTheme } from '@/theme';

import { AppWrapper, ContentWrapper, CalendarWrappper } from './components';

const App = () => {
  const dispatch = useTypedDispatch();

  const { description } = useTypedSelector(
    state => state.weatherState.currentWeather
  );

  const { isLoading, reqTime, city } = useTypedSelector(state => state.weatherState);

  useEffect(() => {
    const fetchByLocation = async () => {
      const pos = await getLocation();
      dispatch(getWeather(pos));
      dispatch(weatherActions.setRequestTime(new Date().getTime()));
    };
    if (checkTimer(reqTime)) fetchByLocation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(getWeather(city));
      dispatch(weatherActions.setRequestTime(new Date().getTime()));
    }, 3600000);
    return () => {
      clearInterval(intervalId);
    };
  }, [dispatch, city]);

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
