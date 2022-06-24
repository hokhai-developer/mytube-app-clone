import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import homeSlice from './homeSlice';
import categorySlice from './categorySlice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    home: homeSlice.reducer,
    category: categorySlice.reducer,
  },
});

export default store;
