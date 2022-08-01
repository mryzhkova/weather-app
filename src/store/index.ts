import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

import { rootSaga } from '@/store/saga';
import eventSliceReducer from '@/store/slices/eventSlice';
import weatherSliceReducer from '@/store/slices/weatherSlice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['eventState']
};

const persistEventsConfig = {
  key: 'events',
  storage,
  blacklist: ['signed']
};

const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers({
  weatherState: weatherSliceReducer,
  eventState: persistReducer(persistEventsConfig, eventSliceReducer)
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    thunk: false,
    serializableCheck: false
  }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default store;

export type TRootState = ReturnType<typeof rootReducer>;
export type TAppStore = typeof store;
export type TAppDispatch = TAppStore['dispatch'];
