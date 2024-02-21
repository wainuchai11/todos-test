import { configureStore, combineReducers } from '@reduxjs/toolkit';
import produceReducer from './slices/producesSlice';
import fruitReducer from './slices/fruitSlice';
import vegetableReducer from './slices/vegetableSlice';

const rootReducer = combineReducers({
  produce: produceReducer,
  fruit: fruitReducer,
  vegetable: vegetableReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
