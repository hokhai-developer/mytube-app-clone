import classNames from 'classnames/bind';
import { useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  BrowseIcon,
  PlaylistIcon,
  ShowLessIcon,
  ShowMoreIcon,
} from '~/components/Icons';
import Image from '~/components/Image';
import { ToggleSideBarContext } from '~/context/ToggleSideBarProvider';
import ButtonSignIn from '~/layouts/components/ButtonSignIn';
import ItemSideBar from '../ItemSidebar';
import {
  MENU_BEST_OF_YOUTUBE,
  MENU_DATA_LIBRARY,
  MENU_DATA_POPULAR,
  MENU_MORE_FROM_YOUTUBE,
  MENU_SETTINGS,
} from './DataMenu';
import ListSideBar from '../ListSideBar';
import styles from './SideBar.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector } from '~/redux/selector';
import { getChannel } from '~/services/channel';
import { subscriptionsSelector } from '~/redux/selector';

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

const cx = classNames.bind(styles);
const SideBar = ({ className }) => {
  const [showLibrary, setShowMoreLibrary] = useState(false);
  const [showSubscriptions, setShowSubscriptions] = useState(false);
  const [subscriptionsChannel, setSubscriptionsChannel] = useState({
    type: 'subscriptions',
    head: 'subscriptions',
    values: [],
  });
  const [playlist, setPlaylist] = useState(PLAYLIST);
  const toggleSideBar = useContext(ToggleSideBarContext);
  const auth = useSelector(authSelector);
  const subscriptions = useSelector(subscriptionsSelector);

  useEffect(() => {
    if (auth.sate === 0) {
      return;
    }
    const listChannelSubscriptions = [];
    const fetchChannelSubscriptions = async (options) => {
      const result = await getChannel(options);

      if (result && result.items) {
        const channel = {
          id: result.items[0].id,
          channelID: result.items[0].id,
          type: 'subscriptions',
          title: result.items[0].snippet.title,
          iconLeft: (
            <Image
              src={result.items[0].snippet.thumbnails.default.url}
              alt={result.items[0].snippet.title}
            />
          ),
          path: `channel/${result.items[0].id}`,
        };
        listChannelSubscriptions.push(channel);
      }
    };

    subscriptions.forEach((channelId) => {
      fetchChannelSubscriptions({
        id: channelId,
        part: 'snippet',
        key: 'AIzaSyA29jsxw6Lrr_iO1tJvHdW_NvkEOJGIQCk',
      });
    });
    setSubscriptionsChannel((prev) => ({
      ...prev,
      values: listChannelSubscriptions,
    }));
  }, [subscriptions.length]);

  //popular
  const popularData = { ...MENU_DATA_POPULAR };

  //menu library
  const libraryData = () => {
    if (toggleSideBar.value) {
      return {
        ...MENU_DATA_LIBRARY,
        values: [...MENU_DATA_LIBRARY.values.slice(0, 2)],
      };
    }
    if (auth.status === 0) {
      return {
        ...MENU_DATA_LIBRARY,
        values: [...MENU_DATA_LIBRARY.values.slice(0, 2)],
      };
    }
    if (showLibrary) {
      return {
        ...MENU_DATA_LIBRARY,
        values: [...MENU_DATA_LIBRARY.values.concat(playlist)],
      };
    }
    return { ...MENU_DATA_LIBRARY };
  };

  //subscription
  const subscriptionsData = () => {
    if (toggleSideBar.value || auth.status === 0) {
      return { ...subscriptionsChannel, values: [] };
    }
    if (showSubscriptions) {
      return { ...subscriptionsChannel };
    }
    return {
      ...subscriptionsChannel,
      values: [...subscriptionsChannel.values].slice(0, 6),
    };
  };

  const moreFromYoutubeData = () => {
    if (toggleSideBar.value) {
      return { ...MENU_MORE_FROM_YOUTUBE, values: [] };
    }
    if (auth.status === 0) {
      return {
        ...MENU_MORE_FROM_YOUTUBE,
        values: [...MENU_MORE_FROM_YOUTUBE.values].filter((item, index) => {
          return index !== 0 && index !== 2;
        }),
      };
    }
    return { ...MENU_MORE_FROM_YOUTUBE };
  };

  const bestChannelOfYoutubeData = () => {
    if (toggleSideBar.value) {
      return { ...MENU_BEST_OF_YOUTUBE, values: [] };
    }
    if (auth.status === 0) {
      return { ...MENU_BEST_OF_YOUTUBE };
    }
    return { ...MENU_BEST_OF_YOUTUBE, values: [] };
  };

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
      className={cx('wrapper', className, {
        toggleSideBar: toggleSideBar.value,
      })}
    >
      {popularData && popularData.values.length > 0 && (
        <ListSideBar data={popularData} />
      )}

      {libraryData() && libraryData().values.length > 0 && (
        <>
          <ListSideBar data={libraryData()} />
          {!toggleSideBar.value && auth.status === 1 && (
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

      {subscriptionsData() && subscriptionsData().values.length > 0 && (
        <>
          <ListSideBar data={subscriptionsData()} />
          {auth.status === 1 && (
            <ItemSideBar
              className={cx('show')}
              onClick={handleShowSubscriptions}
              iconLeft={
                !showSubscriptions ? <ShowLessIcon /> : <ShowMoreIcon />
              }
              title={
                !showSubscriptions
                  ? `Show  ${subscriptionsChannel.values.length - 7} more`
                  : 'Show less'
              }
            />
          )}
        </>
      )}

      {auth.status !== 1 && !toggleSideBar.value && (
        <section className={cx('sign-in')}>
          <p className={cx('title')}>
            Sign in to like videos, comment, and subscribe
          </p>
          <ButtonSignIn className={cx('btn-signIn')} />
        </section>
      )}

      {moreFromYoutubeData() && moreFromYoutubeData().values.length > 0 && (
        <ListSideBar data={moreFromYoutubeData()} />
      )}

      {bestChannelOfYoutubeData() &&
        bestChannelOfYoutubeData().values.length > 0 && (
          <ListSideBar data={bestChannelOfYoutubeData()} />
        )}

      {!toggleSideBar.value &&
        !auth.status === 1 &&
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
