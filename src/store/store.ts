import { configureStore } from '@reduxjs/toolkit';
import produceReducer from './slices/producesSlice';
import fruitReducer from './slices/fruitSlice';
import vegetableReducer from './slices/vegetableSlice';

export const store = configureStore({
  reducer: {
    produce: produceReducer,
    fruit: fruitReducer,
    vegetable: vegetableReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
