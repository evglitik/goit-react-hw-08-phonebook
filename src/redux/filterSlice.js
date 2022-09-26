import { createSlice } from '@reduxjs/toolkit';

export const initialFilter = {
  name: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilter,
  reducers: {
    findContact(state, action) {
      state.name = action.payload;
    },
  },
});

export const { findContact } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
