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

import Image from '~/components/Image';

export const MENU_DATA_POPULAR = {
  type: 'popular',
  head: null,
  values: [
    {
      id: uuidv4(),
      title: 'Home',
      iconLeft: <HomeIcon />,
      path: '/',
      type: 'popular',
    },
    {
      id: uuidv4(),
      title: 'Explore',
      iconLeft: <ExploreIcon />,
      path: '/explore',
      type: 'popular',
    },
    {
      id: uuidv4(),
      title: 'Shorts',
      iconLeft: <ShortsIcon />,
      path: '/shorts',
      type: 'popular',
    },
    {
      id: uuidv4(),
      title: 'Subscriptions',
      iconLeft: <SubscriptionsIcon />,
      path: '/subscriptions',
      type: 'popular',
    },
  ],
};

export const MENU_MORE_FROM_YOUTUBE = {
  type: 'moreFromYoutube',
  head: 'more from youtube',
  values: [
    {
      type: 'moreFromYoutube',
      id: uuidv4(),
      title: 'Gaming',
      iconLeft: <GamingIcon />,
      path: '/gaming',
    },
    {
      type: 'moreFromYoutube',
      id: uuidv4(),
      title: 'Live',
      iconLeft: <LiveIcon />,
      path: '/channel',
    },
    {
      id: uuidv4(),
      type: 'moreFromYoutube',
      title: 'Sports',
      iconLeft: <SportsIcon />,
      path: '/sports',
    },
  ],
};
export const MENU_SETTINGS = {
  type: 'settings',
  head: null,
  values: [
    {
      id: uuidv4(),
      type: 'settings',
      title: 'Settings',
      iconLeft: <SettingsIcon />,
      path: '/account',
    },
    {
      id: uuidv4(),
      type: 'settings',
      title: 'Report history',
      iconLeft: <ReportIcon />,
      path: '/reporthistory',
    },
    {
      id: uuidv4(),
      type: 'settings',
      title: 'Help',
      iconLeft: <HelpIcon />,
      path: '/help',
    },
    {
      id: uuidv4(),
      type: 'settings',
      title: 'Send Feedback',
      iconLeft: <FeedbackIcon />,
      path: '/sendfeedback',
    },
  ],
};

export const MENU_BEST_OF_YOUTUBE = {
  type: 'bestOfYoutube',
  head: 'best of youtube',
  values: [
    {
      id: uuidv4(),
      type: 'bestOfYoutube',
      title: 'Music',
      iconLeft: (
        <Image
          src="https://yt3.ggpht.com/05lmSRvXvsMdQxu4-357Ln2wFaaQPsQjYBOXCdBoLr54_6F3KxVHTj6RtOA9vvGkoG6LVIo2zA=s88-c-k-c0x00ffffff-no-rj"
          alt="Music channel"
        />
      ),
      path: '/channel',
    },
    {
      id: uuidv4(),
      type: 'bestOfYoutube',
      title: 'Sports',
      iconLeft: (
        <Image
          src="https://yt3.ggpht.com/rtNsVcGSjtIBVZ8K20t10vXBD4r81JwlqRDBYss6qYgxW4zCfMAwy52YRzMq71EX4q_BwbUkBzw=s88-c-k-c0x00ffffff-no-rj"
          alt="Sports channel"
        />
      ),
      path: '/channel',
    },
    {
      id: uuidv4(),
      type: 'bestOfYoutube',
      title: 'Gaming',
      iconLeft: (
        <Image
          src="https://yt3.ggpht.com/ldLoEcNih7ReLZxUYqvGQFp2W_XygnaJ-lvjjZJQdYehJMoNxC8fKuEoUUlkexObsFe3jRYoIQ=s88-c-k-c0x00ffffff-no-rj"
          alt="Gaming chanel"
        />
      ),
      path: '/gaming',
    },
    {
      id: uuidv4(),
      type: 'bestOfYoutube',
      title: 'New',
      iconLeft: (
        <Image
          src="https://yt3.ggpht.com/eXgi__r6llNuVUwnuvm9t086Chmj-qvM-yFZVF90JNc5bRWHzzmGcsymPb7_2sz33WfePpIbDA=s88-c-k-c0x00ffffff-no-rj"
          alt="New Channel"
        />
      ),
      path: '/channel',
    },
    {
      id: uuidv4(),
      type: 'bestOfYoutube',
      title: 'Live',
      iconLeft: (
        <Image
          src="https://yt3.ggpht.com/8D6JlsnvwDZFMdcbjqVji82kggP3aXXbO-yBD0RFrKlp4G1zNt9wcqcVTSPnAI8GuUAbDYQwsg=s88-c-k-c0x00ffffff-no-rj"
          alt="Live channel"
        />
      ),
      path: '/channel',
    },
    {
      id: uuidv4(),
      type: 'bestOfYoutube',
      title: '360 Video',
      iconLeft: (
        <Image
          src="https://yt3.ggpht.com/0Gl_YPcM6DcC0FrcH2jynuqkAhfYC23AUu68uid4ouTdV9hT-7HtrEsR146TwPKb_wIaO9Dgzw=s88-c-k-c0x00ffffff-no-rj"
          alt="360 Video"
        />
      ),
      path: '/channel',
    },
  ],
};
