import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const SubscriptionsSlice = createSlice({
  name: 'subscriptions',
  initialState: {
    type: 'subscriptions',
    head: 'subscriptions',
    ui: uuidv4(),
    values: [],
  },
  reducers: {
    add: (state, actions) => {
      console.log(actions.payload);
      if (Array.isArray(actions.payload)) {
        state.values = state.values.concat(actions.payload);
      } else {
        state.values.push(actions.payload);
      }
      return state;
    },
  },
});

export default SubscriptionsSlice;
