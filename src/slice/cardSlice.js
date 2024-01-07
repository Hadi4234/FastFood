import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cardList: [],
  showModal: false,
};

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    fetchItems: (state, action) => {
      state.cardList = action.payload;
    },
    addItems: (state, action) => {
      state.cardList.push(action.payload);
    },
  },
});

export const { fetchItems, addItems } = cardSlice.actions;

export default cardSlice.reducer;
