import { createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
  name: 'home',
  initialState: [],
  reducers: {
    newVideos: (state, actions) => {
      const { status, videoCategoryId, listVideos } = actions.payload;
      //fecth that bai
      if (status === 0) return state;

      let index = state.findIndex(
        (item) => item.videoCategoryId === videoCategoryId,
      );

      //co videos
      if (index !== -1) {
        return state;
      }

      //khong co video
      state.push(actions.payload);
      return state;
    },
    addMoreVideos: (state, actions) => {
      let index = state.findIndex(
        (item) => item.videoCategoryId === actions.payload.videoCategoryId,
      );
      state[index].nextPageToken = actions.payload.nextPageToken;
      state[index].listVideos.push(...actions.payload.listVideos);
      return state;
    },
  },
});

export default homeSlice;
