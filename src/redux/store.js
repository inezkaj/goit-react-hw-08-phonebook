import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsReducer.js';

const store = configureStore({
  reducer: { contacts: contactsReducer },
});
export default store;
