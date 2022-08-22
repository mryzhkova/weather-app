import { Field, Form, Formik } from 'formik';
import React from 'react';

import { FormIds } from '@/constants';
import { useTypedDispatch, useTypedSelector } from '@/hooks/storeHooks';
import { getWeather } from '@/store/actions';
import { weatherActions } from '@/store/reducers/weatherSlice';

import { FormValues } from './interfaces';
import { StyledForm, StyledButton, StyledInput, CustomLebel } from './styled';


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
          <CustomLebel htmlFor={FormIds.cityForm}>
            <Field as={StyledInput} id={FormIds.cityForm} name={FormIds.cityForm} />
            Current location:
          </CustomLebel>
          <StyledButton type="submit">Get weather</StyledButton>
        </StyledForm>
      </Form>
    </Formik>
  );
};

export default CustomForm;
