import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsReducer.js';
import { authReducer } from './auth/authSlice.js';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: authReducer,
  },
});
export default store;
