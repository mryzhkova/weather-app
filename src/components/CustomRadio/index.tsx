import React from 'react';
import { RadioGroup, Radio } from 'react-radio-group';

import { Mode } from '@/constants';
import { useTypedDispatch, useTypedSelector } from '@/hooks/storeHooks';
import { weatherActions } from '@/store/reducers/weatherSlice';

import { RadioWrapper } from './styled';

const CustomRadio = () => {
  const dispatch = useTypedDispatch();

  const { weatherMode } = useTypedSelector(state => state.weatherState);

  const { setWeatherMode } = weatherActions;

  const handleChange = (value: string) => {
    dispatch(setWeatherMode(value));
  };

  return (
    <RadioWrapper>
      <RadioGroup
        name="mode"
        selectedValue={weatherMode}
        onChange={handleChange}
      >
        <Radio value={Mode.daily} />
        {Mode.daily}
        <Radio value={Mode.hourly} />
        {Mode.hourly}
      </RadioGroup>
    </RadioWrapper>
  );
};

export default CustomRadio;
