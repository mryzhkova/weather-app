import { Field, Form, Formik } from 'formik';
import React from 'react';

import { useTypedDispatch, useTypedSelector } from '@/hooks/storeHooks';
import { getWeather } from '@/store/asyncActions';
import { weatherActions } from '@/store/slices/weatherSlice';

import { StyledForm, StyledButton, StyledInput } from './components';
import { FormValues } from './types';

const CustomForm = () => {
  const { city } = useTypedSelector(state => state.weatherState);

  const dispatch = useTypedDispatch();

  const initialValues: FormValues = { city };

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      onSubmit={(values, { setSubmitting }) => {
      setSubmitting(false);
      dispatch(getWeather(values.city));
      dispatch(weatherActions.setRequestTime(new Date().getTime()));
    }}
    >
      <Form>
        <StyledForm>
          <Field as={StyledInput} id="city" name="city" />
          <StyledButton type="submit">Get weather</StyledButton>
        </StyledForm>
      </Form>
    </Formik>
  );
};

export default CustomForm;
