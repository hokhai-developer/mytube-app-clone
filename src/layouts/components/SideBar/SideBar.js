import classNames from 'classnames/bind';
import { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Images from '~/assets/Images';
import {
  BrowseIcon,
  LiveIcon,
  PlaylistIcon,
  ShowLessIcon,
  ShowMoreIcon,
} from '~/components/Icons';
import Image from '~/components/Image';
import { ToggleSideBarContext } from '~/context/ToggleSideBarProvider';
import ButtonSignIn from '~/layouts/components/ButtonSignIn';
import ItemSideBar from '~/layouts/components/SideBar/ItemSidebar';
import {
  MENU_BEST_OF_YOUTUBE,
  MENU_DATA_LIBRARY,
  MENU_DATA_POPULAR,
  MENU_MORE_FROM_YOUTUBE,
  MENU_SETTINGS,
} from './DataMenu';
import ListSideBar from './ListSideBar';
import styles from './SideBar.module.scss';

const PLAYLIST = [
  {
    type: 'playlist',
    id: uuidv4(),
    title: 'music',
    iconLeft: <PlaylistIcon />,
    path: '/playlist/list',
    type: 'playlist',
  },
  {
    id: uuidv4(),
    title: 'Javascript',
    iconLeft: <PlaylistIcon />,
    path: '/playlist/list',
    type: 'playlist',
  },
  {
    id: uuidv4(),
    type: 'playlist',
    title: 'ReactJS',
    iconLeft: <PlaylistIcon />,
    path: '/playlist/list',
  },
  {
    id: uuidv4(),
    type: 'playlist',
    title: 'HTML & CSS',
    iconLeft: <PlaylistIcon />,
    path: '/playlist/list',
  },
];

const SUB_CHANNEL = {
  type: 'subscriptions',
  head: 'subscriptions',
  values: [
    {
      id: uuidv4(),
      channelID: uuidv4(),
      type: 'subscriptions',
      title: 'F8',
      iconLeft: <Image src={Images.noImage} alt="channel name" />,
      iconRight: <LiveIcon />,
      path: '/channel',
    },
    {
      id: uuidv4(),
      channelID: uuidv4(),
      type: 'subscriptions',
      title: 'Hoi Dan IT',
      iconLeft: <Image src={Images.noImage} alt="channel name" />,
      iconRight: null,
      path: '/channel',
    },
    {
      id: uuidv4(),
      channelID: uuidv4(),
      type: 'subscriptions',
      title: 'Easy Frontend',
      iconLeft: <Image src={Images.noImage} alt="channel name" />,
      iconRight: <LiveIcon />,
      path: '/channel',
    },
    {
      id: uuidv4(),
      channelID: uuidv4(),
      title: 'Henry dev web',
      type: 'subscriptions',
      iconLeft: <Image src={Images.noImage} alt="channel name" />,
      iconRight: null,
      path: '/channel',
    },
    {
      id: uuidv4(),
      channelID: uuidv4(),
      title: 'Hole Text',
      type: 'subscriptions',
      iconLeft: <Image src={Images.noImage} alt="channel name" />,
      iconRight: null,
      path: '/channel',
    },
    {
      id: uuidv4(),
      channelID: uuidv4(),
      title: 'evondev',
      type: 'subscriptions',
      iconLeft: <Image src={Images.noImage} alt="channel name" />,
      iconRight: <LiveIcon />,
      path: '/channel',
    },
    {
      id: uuidv4(),
      channelID: uuidv4(),
      title: 'Online Tutorials',
      type: 'subscriptions',
      iconLeft: <Image src={Images.noImage} alt="channel name" />,
      iconRight: null,
      path: '/channel',
    },
    {
      id: uuidv4(),
      channelID: uuidv4(),
      title: 'F8',
      type: 'subscriptions',
      iconLeft: <Image src={Images.noImage} alt="channel name" />,
      iconRight: <LiveIcon />,
      path: '/channel',
    },
    {
      id: uuidv4(),
      title: 'Hoi Dan IT',
      channelID: uuidv4(),
      type: 'subscriptions',
      iconLeft: <Image src={Images.noImage} alt="channel name" />,
      iconRight: null,
      path: '/channel',
    },
    {
      id: uuidv4(),
      title: 'Easy Frontend',
      type: 'subscriptions',
      channelID: uuidv4(),
      iconLeft: <Image src={Images.noImage} alt="channel name" />,
      iconRight: <LiveIcon />,
      path: '/channel',
    },
    {
      id: uuidv4(),
      title: 'Henry dev web',
      type: 'subscriptions',
      channelID: uuidv4(),
      iconLeft: <Image src={Images.noImage} alt="channel name" />,
      iconRight: null,
      path: '/channel',
    },
    {
      id: uuidv4(),
      title: 'Hole Text',
      channelID: uuidv4(),
      type: 'subscriptions',
      iconLeft: <Image src={Images.noImage} alt="channel name" />,
      iconRight: null,
      path: '/channel',
    },
    {
      id: uuidv4(),
      title: 'evondev',
      type: 'subscriptions',
      channelID: uuidv4(),
      iconLeft: <Image src={Images.noImage} alt="channel name" />,
      iconRight: <LiveIcon />,
      path: '/channel',
    },
    {
      id: uuidv4(),
      channelID: uuidv4(),
      title: 'Online Tutorials',
      type: 'subscriptions',
      iconLeft: <Image src={Images.noImage} alt="channel name" />,
      iconRight: null,
      path: '/channel',
    },
  ],
};

const cx = classNames.bind(styles);
const SideBar = (props) => {
  const [showLibrary, setShowMoreLibrary] = useState(false);
  const [showSubscriptions, setShowSubscriptions] = useState(false);
  const [playlist, setPlaylist] = useState(PLAYLIST);
  const [channelList, setChannelList] = useState(SUB_CHANNEL);
  const toggleSideBar = useContext(ToggleSideBarContext);
  const auth = true;

  //popular
  const popularData = { ...MENU_DATA_POPULAR };

  //library
  const libraryData = toggleSideBar.value
    ? {
        ...MENU_DATA_LIBRARY,
        values: [...MENU_DATA_LIBRARY.values.slice(0, 2)],
      }
    : auth
    ? showLibrary
      ? {
          ...MENU_DATA_LIBRARY,
          values: [...MENU_DATA_LIBRARY.values.concat(playlist)],
        }
      : { ...MENU_DATA_LIBRARY }
    : {
        ...MENU_DATA_LIBRARY,
        values: [...MENU_DATA_LIBRARY.values.slice(0, 2)],
      };

  //subscriptions
  const subscriptionsData = toggleSideBar.value
    ? { ...SUB_CHANNEL, values: [] }
    : auth
    ? showSubscriptions
      ? { ...SUB_CHANNEL }
      : { ...SUB_CHANNEL, values: [...SUB_CHANNEL.values].slice(0, 6) }
    : { ...SUB_CHANNEL, values: [] };

  //more from youtube
  const moreFromYoutubeData = toggleSideBar.value
    ? { ...MENU_MORE_FROM_YOUTUBE, values: [] }
    : auth
    ? { ...MENU_MORE_FROM_YOUTUBE }
    : {
        ...MENU_MORE_FROM_YOUTUBE,
        values: [...MENU_MORE_FROM_YOUTUBE.values].filter((item, index) => {
          return index !== 0 && index !== 2;
        }),
      };

  const bestChannelOfYoutubeData = toggleSideBar.value
    ? { ...MENU_BEST_OF_YOUTUBE, values: [] }
    : !auth
    ? { ...MENU_BEST_OF_YOUTUBE }
    : { ...MENU_BEST_OF_YOUTUBE, values: [] };

  //settings
  const settingsData = { ...MENU_SETTINGS };
  const browseChannels = {
    type: 'browses',
    head: null,
    values: [
      {
        id: uuidv4(),
        type: 'browse',
        title: 'Browse Channels',
        iconLeft: <BrowseIcon />,
        path: '/feed',
      },
    ],
  };

  //popular
  const handleShowLibrary = () => {
    setShowMoreLibrary(!showLibrary);
  };

  //subscriptions
  const handleShowSubscriptions = () => {
    setShowSubscriptions(!showSubscriptions);
  };

  return (
    <aside
      className={cx('wrapper', {
        toggleSideBar: toggleSideBar.value,
      })}
    >
      {popularData && popularData.values.length > 0 && (
        <ListSideBar data={popularData} />
      )}

      {libraryData && libraryData.values.length > 0 && (
        <>
          <ListSideBar data={libraryData} />
          {!toggleSideBar.value && auth && (
            <ItemSideBar
              className={cx('show')}
              onClick={handleShowLibrary}
              iconLeft={!showLibrary ? <ShowLessIcon /> : <ShowMoreIcon />}
              title={
                !showLibrary ? `Show ${playlist.length} more` : 'Show less'
              }
            />
          )}
        </>
      )}

      {subscriptionsData && subscriptionsData.values.length > 0 && (
        <>
          <ListSideBar data={subscriptionsData} />
          {auth && (
            <ItemSideBar
              className={cx('show')}
              onClick={handleShowSubscriptions}
              iconLeft={
                !showSubscriptions ? <ShowLessIcon /> : <ShowMoreIcon />
              }
              title={
                !showSubscriptions
                  ? `Show  ${SUB_CHANNEL.values.length - 7} more`
                  : 'Show less'
              }
            />
          )}
        </>
      )}

      {!auth && !toggleSideBar.value && (
        <section className={cx('sign-in')}>
          <p className={cx('title')}>
            Sign in to like videos, comment, and subscribe
          </p>
          <ButtonSignIn className={cx('btn-signIn')} />
        </section>
      )}

      {moreFromYoutubeData && moreFromYoutubeData.values.length > 0 && (
        <ListSideBar data={moreFromYoutubeData} />
      )}

      {bestChannelOfYoutubeData &&
        bestChannelOfYoutubeData.values.length > 0 && (
          <ListSideBar data={bestChannelOfYoutubeData} />
        )}

      {!toggleSideBar.value &&
        browseChannels &&
        browseChannels.values.length > 0 && (
          <ListSideBar data={browseChannels} />
        )}

      {!toggleSideBar.value &&
        settingsData &&
        settingsData.values.length > 0 && <ListSideBar data={settingsData} />}

      {!toggleSideBar.value && (
        <footer className={cx('footer')}>
          <p className={cx('footer-mail')}>
            Copy right by: <br />
            <span>
              <a href="mailto: quangkhai846@gmail.com" className={cx('email')}>
                quangkhai846@gmail.com
              </a>
            </span>
          </p>
          <p className={cx('footer-bottom')}>© 2022 Google LLC</p>
        </footer>
      )}
    </aside>
  );
};

SideBar.propTypes = {};

export default SideBar;
