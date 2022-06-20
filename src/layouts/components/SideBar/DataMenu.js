import { v4 as uuidv4 } from 'uuid';
import {
  HomeIcon,
  SubscriptionsIcon,
  ExploreIcon,
  ShortsIcon,
  LibraryIcon,
  HistoryIcon,
  VideosIcon,
  WatchIcon,
  LikeIcon,
  FeedbackIcon,
  GamingIcon,
  LiveIcon,
  SportsIcon,
  SettingsIcon,
  ReportIcon,
  HelpIcon,
} from '~/components/Icons';

export const MENU_DATA_POPULAR = [
  {
    id: uuidv4(),
    title: 'Home',
    iconLeft: <HomeIcon />,
    path: '/',
  },
  {
    id: uuidv4(),
    title: 'Explore',
    iconLeft: <ExploreIcon />,
    path: '/explore',
  },
  {
    id: uuidv4(),
    title: 'Shorts',
    iconLeft: <ShortsIcon />,
    path: '/shorts',
  },
  {
    id: uuidv4(),
    title: 'Subscriptions',
    iconLeft: <SubscriptionsIcon />,
    path: '/subscriptions',
  },
  {
    id: uuidv4(),
    title: 'Library',
    iconLeft: <LibraryIcon />,
    path: '/feed/library',
  },
  {
    id: uuidv4(),
    title: 'History',
    iconLeft: <HistoryIcon />,
    path: '/feed/history',
  },
  {
    id: uuidv4(),
    title: 'Your videos',
    iconLeft: <VideosIcon />,
    path: 'https://www.youtube.com',
    target: true,
  },
  {
    id: uuidv4(),
    title: 'Watch later',
    iconLeft: <WatchIcon />,
    path: '/playlist/watch',
  },

  {
    id: uuidv4(),
    title: 'Likes videos',
    iconLeft: <LikeIcon />,
    path: '/playlist/likes',
  },
];

export const MENU_MORE_FROM_YOUTUBE = [
  {
    id: uuidv4(),
    title: 'Gaming',
    iconLeft: <GamingIcon />,
    path: '/gaming',
  },
  {
    id: uuidv4(),
    title: 'Live',
    iconLeft: <LiveIcon />,
    path: '/channel',
  },
  {
    id: uuidv4(),
    title: 'Sports',
    iconLeft: <SportsIcon />,
    path: '/sports',
  },
  {
    id: uuidv4(),
    title: 'Settings',
    iconLeft: <SettingsIcon />,
    path: '/account',
  },
  {
    id: uuidv4(),
    title: 'Report history',
    iconLeft: <ReportIcon />,
    path: '/reporthistory',
  },
  {
    id: uuidv4(),
    title: 'Help',
    iconLeft: <HelpIcon />,
    path: '/help',
  },
  {
    id: uuidv4(),
    title: 'Send Feedback',
    iconLeft: <FeedbackIcon />,
    path: '/sendfeedback',
  },
];
