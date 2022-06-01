import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../components/counterSlice';
import authReducer from '../components/authSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});
