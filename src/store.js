import { configureStore } from '@reduxjs/toolkit';
import authLoginReducer from './features/auth/authLoginSlice';

const store = configureStore({
  reducer: {
    authLogin: authLoginReducer,
  },
});

export default store;
