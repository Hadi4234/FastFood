import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './cardSlice';
import popupReducer from './popupSlice';

export const store = configureStore({
  reducer: {
    card: cardReducer,
    popup: popupReducer,
  },
});
