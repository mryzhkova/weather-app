import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getEventFields } from '@/helpers/eventHelpers';
import { IEventState } from '@/interfaces';


const initialState: IEventState = {
  events: [],
  signed: false
};

export const eventSlice = createSlice({
  name: 'events-slice',
  initialState,
  reducers: {
    getEvents(state, action: PayloadAction<any[]>) {
      state.events = getEventFields(action.payload);
    },
    signInGoogle(state) {
      state.signed = true;
    },
  },
});

export const { getEvents, signInGoogle } = eventSlice.actions;

export default eventSlice.reducer;
