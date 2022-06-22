import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 0,
    user: {},
  },
  reducers: {
    signInAuth: (state, actions) => {
      state.status = 1;
      state.user = actions.payload;
      return state;
    },
    signOutAuth: (state) => {
      state.status = 0;
      state.user = {};
      return state;
    },
  },
});

export default authSlice;
