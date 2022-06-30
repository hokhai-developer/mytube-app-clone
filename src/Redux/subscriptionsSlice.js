import { createSlice } from '@reduxjs/toolkit';

const SubscriptionsSlice = createSlice({
  name: 'subscriptions',
  initialState: [
    'UCNSCWwgW-rwmoE3Yc4WmJhw',
    'UCArT1kGzd_CyCTSCKrCEk-A',
    'UCVkBcokjObNZiXavfAE1-fA',
    'UCFbNIlppjAuEX4znoulh0Cw',
    'UCqamjdcGALEjPreSrxwK9IQ',
    'UCJJbLnrntQ4HsBn2KURJyRw',
    'UCUjMB5vQyVjmFZDCX4VR31w',
    'UCGRDayozk2qch3vw-qAtQng',
    'UCEOnUMPAYjOTifkjbcOlR3g',
    'UCIW9cGgoRuGJnky3K3tbzNg',
    'UC8S4rDRZn6Z_StJ-hh7ph8g',
    'UCbwXnUipZsLfUckBPsC7Jog',
    'UC3mG4KEY2zkSemb1LunN97w',
    'UC8vjHOEYlnVTqAgE6CFDm_Q',
    'UCd3lwxW89gegn-6rgLdXugw',
    'UC2Q8U6edHWMLP2_U15KhJeQ',
    'UCI2OiZs5aVcyBUBVsgovzng',
    'UC0IpGYsi1KVorZ7QVCHfdag',
    'UC-3WU7dH0dvZ5BkSSI7zK_w',
    'UCG2ovypNCpVOTFeY1YCocmQ',
    'UCJZv4d5rbIKd4QHMPkcABCw',
    'UC29ju8bIPH5as8OGnQzwJyA',
    'UCvM5YYWwfLwpcQgbRr68JLQ',
    'UCpm6kKrf5OdNRZ9hMgk3gsA',
  ],
  reducers: {
    addSubscription: (state, actions) => {
      state.push(actions.payload);
      return state;
    },
  },
});

export default SubscriptionsSlice;
