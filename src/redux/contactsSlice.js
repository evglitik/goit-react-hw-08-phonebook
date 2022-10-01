import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import { handlePending, handleRejected } from 'utils/fetchOperation';

export const initialContactsState = {
  contacts: [],
  isLoading: false,
  error: null,
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.contacts = action.payload;
      state.isLoading = false;
    },
    [fetchContacts.rejected]: handleRejected,

    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts.push(action.payload);
    },
    [addContact.rejected]: handleRejected,

    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.contacts.findIndex(c => c.id === action.payload.id);
      state.contacts.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
  },
  reducers: {
    findContact(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { findContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
