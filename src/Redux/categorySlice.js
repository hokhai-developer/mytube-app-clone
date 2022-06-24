import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    status: 0,
    currentActive: {},
    list: [],
  },
  reducers: {
    active: (state, actions) => {
      state.currentActive = actions.payload;
      return state;
    },
    setList: (state, actions) => {
      state = actions.payload;
      return state;
    },
  },
});

export default categorySlice;
