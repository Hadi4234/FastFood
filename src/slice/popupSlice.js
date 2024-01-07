// popupSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  popups: {}, // Object to store popup states by ID
};

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    togglePopup(state, action) {
      const { id } = action.payload;
      // Toggle the state of a specific popup by its ID
      state.popups[id] = !state.popups[id];
    },
    closePopup(state) {
      // Close all popups
      state.popups = {};
    },
  },
});

export const { togglePopup, closePopup } = popupSlice.actions;
export default popupSlice.reducer;
