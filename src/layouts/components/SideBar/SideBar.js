import classNames from 'classnames/bind';
import { useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowseIcon, ShowLessIcon, ShowMoreIcon } from '~/components/Icons';
import Image from '~/components/Image';
import { ToggleSideBarContext } from '~/context/ToggleSideBarProvider';
import ButtonSignIn from '~/layouts/components/ButtonSignIn';
import ItemSideBar from '../ItemSidebar';
import {
  MENU_BEST_OF_YOUTUBE,
  MENU_DATA_POPULAR,
  MENU_MORE_FROM_YOUTUBE,
  MENU_SETTINGS,
} from './DataMenu';
import ListSideBar from '../ListSideBar';
import styles from './SideBar.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector } from '~/redux/selector';
import { getChannel } from '~/services/channel';
import { subscriptionsSelector, playlistSelector } from '~/redux/selector';
import SubscriptionsSlice from '~/redux/subscriptionsSlice';

const cx = classNames.bind(styles);
const SideBar = ({ className }) => {
  const [showSubscriptions, setShowSubscriptions] = useState(false);
  const [subscriptionsLData, setSubscriptionsLData] = useState({});
  const [showLibrary, setShowMoreLibrary] = useState(false);
  const [libraryData, setLibraryData] = useState({});

  const toggleSideBar = useContext(ToggleSideBarContext);
  const auth = useSelector(authSelector);
  const subscriptions = useSelector(subscriptionsSelector);
  const playlistOfAuth = useSelector(playlistSelector);
  const dispatch = useDispatch();

  //menu fake subscriptions
  useEffect(() => {
    const fakeChannelIdSub = [
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
    ];
    let subChannelList = [];
    const fetchChannelSubscriptions = async (options) => {
      const result = await getChannel(options);
      if (result && result.items && result.items[0]) {
        const { id } = result.items[0];
        const { title, thumbnails } = result.items[0].snippet;
        const channel = {
          id: id,
          channelId: id,
          type: 'subscriptions',
          title: title,
          thumbnails: [
            thumbnails.default.url,
            thumbnails.medium.url,
            thumbnails.high.url,
          ],
          path: `channel/${id}`,
        };
        subChannelList.push(channel);
      }
      if (subChannelList.length === fakeChannelIdSub.length) {
        dispatch(SubscriptionsSlice.actions.add(subChannelList));
      }
    };

    fakeChannelIdSub.forEach((channelId, index) => {
      fetchChannelSubscriptions({
        id: channelId,
        part: 'snippet',
        key: 'AIzaSyA29jsxw6Lrr_iO1tJvHdW_NvkEOJGIQCk',
      });
    });
  }, []);

  //menu library
  useEffect(() => {
    if (auth.status === 0 || toggleSideBar.value) {
      setLibraryData(() => {
        return {
          ...playlistOfAuth,
          values: [...playlistOfAuth.values.slice(0, 2)],
        };
      });
      return;
    }

    if (showLibrary) {
      setLibraryData(() => {
        return {
          ...playlistOfAuth,
        };
      });
    } else {
      setLibraryData(() => {
        return {
          ...playlistOfAuth,
          values: [...playlistOfAuth.values.slice(0, 5)],
        };
      });
    }
  }, [
    playlistOfAuth.values.length,
    auth.status,
    toggleSideBar.value,
    showLibrary,
  ]);

  //menu subscriptions
  useEffect(() => {
    if (auth.status === 0 || toggleSideBar.value) {
      setSubscriptionsLData(() => {
        return {
          ...subscriptions,
          values: [],
        };
      });
      return;
    } else if (showSubscriptions) {
      setSubscriptionsLData(() => {
        return {
          ...subscriptions,
        };
      });
      return;
    } else {
      setSubscriptionsLData(() => {
        return {
          ...subscriptions,
          values: [...subscriptions.values.slice(0, 6)],
        };
      });
      return;
    }
  }, [
    auth.status,
    toggleSideBar.value,
    subscriptions.values.length,
    showSubscriptions,
  ]);

  //popular
  const popularData = { ...MENU_DATA_POPULAR };

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
  const handleShowLibrary = (e) => {
    e.stopPropagation();
    setShowMoreLibrary(!showLibrary);
  };

  //subscriptions
  const handleShowSubscriptions = (e) => {
    e.stopPropagation();
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

      {libraryData && libraryData.values && libraryData.values.length > 0 && (
        <>
          <ListSideBar data={libraryData} />
          {!toggleSideBar.value && auth.status === 1 && (
            <ItemSideBar
              className={cx('show')}
              onClick={(e) => handleShowLibrary(e)}
              iconLeft={!showLibrary ? <ShowLessIcon /> : <ShowMoreIcon />}
              title={!showLibrary ? 'Show more' : 'Show less'}
            />
          )}
        </>
      )}

      {subscriptionsLData &&
        subscriptionsLData.values &&
        subscriptionsLData.values.length > 0 && (
          <>
            <ListSideBar data={subscriptionsLData} />
            {auth.status === 1 && (
              <ItemSideBar
                className={cx('show')}
                onClick={(e) => handleShowSubscriptions(e)}
                iconLeft={
                  !showSubscriptions ? <ShowLessIcon /> : <ShowMoreIcon />
                }
                title={
                  !showSubscriptions
                    ? `Show  ${subscriptions.values.length - 7} more`
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
