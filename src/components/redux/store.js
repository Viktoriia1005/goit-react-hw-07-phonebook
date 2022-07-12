import { contactsApi } from '../../services/contactsAPI';
import { configureStore } from '@reduxjs/toolkit';
import { filter } from './reducer';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filter,
  },
  middleware: GetDefaultMiddleware => [
    ...GetDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
