import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const subscriptionsSlice = createSlice({
  name: 'subscriptions',
  initialState: {
    type: 'subscriptions',
    head: 'subscriptions',
    ui: uuidv4(),
    values: [],
  },
  reducers: {
    add: (state, actions) => {
      if (Array.isArray(actions.payload)) {
        state.values = state.values.concat(actions.payload);
      } else {
        state.values.unshift(actions.payload);
      }
      return state;
    },
    remove: (state, actions) => {
      const index = state.values.findIndex((value) => {
        return value.channelId === actions.payload.channelId;
      });

      if (index === 0 || index) {
        state.values.splice(index, 1);
      }
      return state;
    },
  },
});

export default subscriptionsSlice;
