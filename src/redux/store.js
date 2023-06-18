import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactsReducer';
import filterReducer from './filterReducer';
import { authReducer } from './auth/auth-reducer';


export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactReducer,
    filter: filterReducer,
  },
});
