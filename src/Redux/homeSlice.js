import { createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
  name: 'home',
  initialState: [],
  reducers: {
    newVideos: (state, actions) => {
      const { status, videoCategoryId, listVideos } = actions.payload;

      if (status === 0) return state;

      let index = state.findIndex(
        (item) => item.videoCategoryId === videoCategoryId,
      );

      if (index === -1) {
        state.push(actions.payload);
        return state;
      }

      state[index].listVideos.push(listVideos);
      return state;
    },
    addMoreVideos: (state, actions) => {
      //loading infinity
      state.status = 1;
      state.values.videos.concat(actions.payload.videos);
      state.values.nextPageToken = actions.payload.nextPageToken;
      return state;
    },
  },
});

export default homeSlice;
