import { v4 as uuidv4 } from 'uuid';
import {
  YoutubeTvIcon,
  YoutubeMusicIcon,
  YoutubeForArtistsIcon,
  YoutubeKidIcon,
  ThemIcon,
  CheckIcon,
  LocationIcon,
  YourDataIcon,
  FeedbackIcon,
  HelpIcon,
  Settings2Icon,
  LanguageIcon,
  LiveIcon,
  UpVideoIcon,
  AddAccountIcon,
  SignOutIcon,
  StudioIcon,
  SwitchAccountIcon,
  YourChannelIcon,
  PurchasesIcon,
  HideEyeIcon,
} from '~/components/Icons/Icons';

export const MENU_APPS = {
  type: 'apps',
  id: uuidv4(),
  values: [
    {
      id: uuidv4(),
      type: 'apps',
      path: 'https://tv.youtube.com/welcome/?utm_source=youtube_web&utm_medium=ep&utm_campaign=home&ve=34273&utm_servlet=prod',
      target: '_blank',
      leftIcon: <YoutubeTvIcon />,
      title: 'Youtube Tv',
    },

    {
      id: uuidv4(),
      type: 'apps',
      path: 'https://music.youtube.com',
      target: '_blank',
      leftIcon: <YoutubeMusicIcon />,
      title: 'Youtube Music',
    },
    {
      id: uuidv4(),
      type: 'apps',
      path: 'https://www.youtubekids.com/?source=youtube_web',
      path: '',
      target: '_blank',
      leftIcon: <YoutubeKidIcon />,
      title: 'Youtube Kids',
    },
    {
      id: uuidv4(),
      type: 'apps',
      path: 'https://artists.youtube/',
      target: '_blank',
      leftIcon: <YoutubeForArtistsIcon />,
      title: 'Youtube For Artists',
    },
  ],
};

export const MENU_SETTINGS = {
  type: 'settings',
  id: uuidv4(),
  values: [
    {
      id: uuidv4(),
      type: 'settings',
      leftIcon: <ThemIcon />,
      title: 'Appearance: Device theme',
      children: {
        type: 'theme',
        id: uuidv4(),
        values: [
          {
            id: uuidv4(),
            type: 'theme',
            leftIcon: <CheckIcon />,
            title: 'Dark theme',
          },
          {
            id: uuidv4(),
            type: 'theme',
            title: 'Light theme',
          },
        ],
      },
    },
    {
      id: uuidv4(),
      type: 'settings',
      leftIcon: <LanguageIcon />,
      title: 'Language: English',
      children: {
        type: 'language',
        id: uuidv4(),
        values: [
          {
            id: uuidv4(),
            type: 'language',
            leftIcon: <CheckIcon />,
            title: 'EngLish',
          },
          {
            id: uuidv4(),
            type: 'language',
            title: 'Việt Nam',
          },
          {
            id: uuidv4(),
            type: 'language',
            title: 'Thái Lan',
          },
          {
            id: uuidv4(),
            type: 'language',
            title: 'Lào',
          },
        ],
      },
    },
    {
      id: uuidv4(),
      type: 'settings',
      leftIcon: <LocationIcon />,

      title: 'Location: Vietnam',
      children: {
        type: 'location',
        id: uuidv4(),
        values: [
          {
            id: uuidv4(),
            type: 'location',
            title: 'Algeria',
          },
          {
            id: uuidv4(),
            type: 'location',
            leftIcon: <CheckIcon />,
            title: 'Việt Nam',
          },
          {
            id: uuidv4(),
            type: 'location',
            title: 'Thái Lan',
          },
          {
            id: uuidv4(),
            type: 'location',
            title: 'Lào',
          },
          {
            id: uuidv4(),
            type: 'location',
            title: 'English',
          },
        ],
      },
    },

    {
      id: uuidv4(),
      type: 'settings',
      leftIcon: <Settings2Icon />,
      title: 'Settings',
      path: '/login',
    },
    {
      id: uuidv4(),
      type: 'settings',
      leftIcon: <YourDataIcon />,
      title: 'Your Data In Youtube',
      path: '/login',
    },
    {
      id: uuidv4(),
      type: 'settings',
      leftIcon: <HelpIcon />,
      title: 'Help',
      path: '/login',
      pathPreventive: '/help',
    },
    {
      id: uuidv4(),
      type: 'settings',
      leftIcon: <FeedbackIcon />,
      title: 'Send Feedback',
      path: '/login',
      pathPreventive: '/sendfeedback',
    },
  ],
};

export const MENU_CREATE = {
  type: 'create',
  id: uuidv4(),
  values: [
    {
      id: uuidv4(),
      type: 'create',
      path: 'https://studio.youtube.com/channel',
      target: '_blank',
      leftIcon: <UpVideoIcon />,
      title: 'Upload video',
    },

    {
      id: uuidv4(),
      type: 'create',
      path: 'https://studio.youtube.com/channel',
      target: '_blank',
      leftIcon: <LiveIcon />,
      title: 'Go live',
    },
  ],
};

export const MENU_USER = {
  type: 'user',
  id: uuidv4(),
  values: [
    {
      id: uuidv4(),
      type: 'user',
      path: '/channel',
      leftIcon: <YourChannelIcon />,
      title: 'Your channel',
    },
    {
      id: uuidv4(),
      type: 'user',
      path: '/paid_memberships',
      leftIcon: <PurchasesIcon />,
      title: 'Purchases and membership',
    },
    {
      id: uuidv4(),
      type: 'user',
      path: 'https://studio.youtube.com',
      target: '_blank',
      leftIcon: <StudioIcon />,
      title: 'Youtube Studio',
    },
    {
      id: uuidv4(),
      type: 'user',
      leftIcon: <SwitchAccountIcon />,
      title: 'Switch account',
      children: {
        id: uuidv4(),
        type: 'account',
        values: [
          {
            id: uuidv4(),
            type: 'account',
            leftIcon: <AddAccountIcon />,
            title: 'Add account',
          },
          {
            id: uuidv4(),
            type: 'account',
            dataType: 'SignOut',
            leftIcon: <SignOutIcon />,
            title: 'Sign Out',
          },
        ],
      },
    },
    {
      id: uuidv4(),
      type: 'user',
      dataType: 'SignOut',
      leftIcon: <SignOutIcon />,
      title: 'Sign Out',
    },
    ...MENU_SETTINGS.values,
  ],
};

export const MENU_SETTINGS_NOTIFY = {
  type: 'settingsNotify',
  id: uuidv4(),
  values: [
    {
      id: uuidv4(),
      type: 'settingsNotify',
      leftIcon: <HideEyeIcon />,
      title: 'Hide this notification',
    },

    {
      id: uuidv4(),
      type: 'settingsNotify',
      title: 'Turn off all from LPL Vietnam Official - Kênh chính thức',
    },
  ],
};
