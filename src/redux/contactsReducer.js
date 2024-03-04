import { createSlice } from '@reduxjs/toolkit';
import { getContacts, addContact, removeContact } from './tasksSlice.js';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    isLoading: false,
    error: null,
    contacts: [],
    filter: '',
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    const pending = (state, action) => {
      state.isLoading = true;
    };
    const rejected = (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    };
    builder
      .addCase(getContacts.pending, pending)
      .addCase(getContacts.rejected, rejected)
      .addCase(getContacts.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.contacts = actions.payload.map(con => ({
          id: con.id,
          name: con.name,
          phone: con.phone,
        }));
      })
      .addCase(addContact.pending, pending)
      .addCase(addContact.rejected, rejected)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        const { name, phone, id } = action.payload;
        state.contacts = [...state.contacts, { name, phone, id }];
      })
      .addCase(removeContact.pending, pending)
      .addCase(removeContact.rejected, rejected)
      .addCase(removeContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(
          con => con.id !== action.payload.id
        );
      });
  },
});

export const { setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
