import { createSlice } from '@reduxjs/toolkit';

const newCommentsSlice = createSlice({
  name: 'newComment',
  initialState: {},
  reducers: {
    update: (state, actions) => {
      state = actions.payload;
      return state;
    },
  },
});

export default newCommentsSlice;
