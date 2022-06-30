import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import homeSlice from './homeSlice';
import categorySlice from './categorySlice';
import subscriptionsSlice from './subscriptionsSlice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    home: homeSlice.reducer,
    category: categorySlice.reducer,
    subscriptions: subscriptionsSlice.reducer,
  },
});

export default store;
