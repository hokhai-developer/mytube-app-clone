import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import {
  LibraryIcon,
  HistoryIcon,
  VideosIcon,
  WatchIcon,
  LikeIcon,
  PlaylistIcon,
  PublicIcon,
  UnlistedIcon,
  PrivateIcon,
} from '~/components/Icons';

const playlistSlice = createSlice({
  name: 'playlist',
  id: uuidv4(),
  initialState: {
    type: 'library',
    head: null,
    values: [
      {
        id: uuidv4(),
        type: 'library',
        title: 'Library',
        iconLeft: <LibraryIcon />,
        path: '/feed/library',
      },
      {
        id: uuidv4(),
        title: 'History',
        type: 'library',
        iconLeft: <HistoryIcon />,
        path: '/feed/history',
      },
      {
        id: uuidv4(),
        type: 'library',
        title: 'Your videos',
        iconLeft: <VideosIcon />,
        path: 'https://www.youtube.com',
        target: true,
      },
      {
        id: uuidv4(),
        type: 'library',
        title: 'Watch later',
        iconLeft: <WatchIcon />,
        path: '/playlist/watch',
      },
      {
        id: uuidv4(),
        type: 'library',
        title: 'Likes videos',
        iconLeft: <LikeIcon />,
        path: '/playlist/likes',
      },

      {
        type: 'playlist',
        id: uuidv4(),
        title: 'music',
        iconLeft: <PlaylistIcon />,
        path: '/playlist/list',
        iconPrivacy: <PublicIcon />,
        privacy: 'public',
      },
      {
        id: uuidv4(),
        title: 'Javascript',
        iconLeft: <PlaylistIcon />,
        path: '/playlist/list',
        type: 'playlist',
        iconPrivacy: <UnlistedIcon />,
        privacy: 'unlisted',
      },
      {
        id: uuidv4(),
        type: 'playlist',
        title: 'ReactJS',
        iconLeft: <PlaylistIcon />,
        path: '/playlist/list',
        iconPrivacy: <PrivateIcon />,
        privacy: 'private',
      },
      {
        id: uuidv4(),
        type: 'playlist',
        title: 'HTML & CSS',
        iconLeft: <PlaylistIcon />,
        path: '/playlist/list',
        iconPrivacy: <PrivateIcon />,
        privacy: 'private',
      },
    ],
  },
  reducers: {},
});
export default playlistSlice;
