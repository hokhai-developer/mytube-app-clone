import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './HomeVideoItem.module.scss';
import Image from '~/components/Image';
import { v4 as uuidv4 } from 'uuid';
import Menu from '~/components/Menu';
import numeral from 'numeral';
import moment from 'moment';
import { getChannel } from '~/services/channel';

import {
  SettingsIcon,
  VerifiedIcon,
  AddToQueueIcon,
  HistoryIcon,
  AddToPlaylistIcon,
  ShareIcon,
  NotInterestedIcon,
  DoNotRecommendIcon,
  ReportIcon,
} from '~/components/Icons/Icons';
import { authSelector } from '~/redux/selector';
import { useSelector } from 'react-redux';
import Images from '~/assets/Images';

const MENU_SETTINGS_VIDEO_ITEM = {
  type: 'settingsVideoItem',
  id: uuidv4(),
  values: [
    {
      id: uuidv4(),
      type: 'settingsVideoItem',
      leftIcon: <AddToQueueIcon />,
      title: 'Add to queue',
    },

    {
      id: uuidv4(),
      type: 'settingsVideoItem',
      leftIcon: <HistoryIcon />,
      title: 'Save to Watch later',
    },
    {
      id: uuidv4(),
      type: 'settingsVideoItem',
      leftIcon: <AddToPlaylistIcon />,
      title: 'Save to playlist',
    },
    {
      id: uuidv4(),
      type: 'settingsVideoItem',
      leftIcon: <ShareIcon />,
      title: 'Share',
    },
    {
      id: uuidv4(),
      type: 'settingsVideoItem',
      leftIcon: <NotInterestedIcon />,
      title: 'Not interested',
    },
    {
      id: uuidv4(),
      type: 'settingsVideoItem',
      leftIcon: <DoNotRecommendIcon />,
      title: `Don't recommend channel`,
    },
    {
      id: uuidv4(),
      type: 'settingsVideoItem',
      leftIcon: <ReportIcon />,
      title: `Report`,
    },
  ],
};

const cx = classNames.bind(styles);
const HomeVideoItem = ({
  id,
  channelId,
  channelTitle,
  publishedAt,
  title,
  photoURL,
  duration,
  viewCount,
}) => {
  const [showSettings, setShowSettings] = useState(false);
  const [channel, setChannel] = useState();
  const auth = useSelector(authSelector);
  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format('mm:ss');

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getChannel(channelId);
      if (response && response.items) {
        const _channel = {
          channelId: response.items[0].id || channelId,
          photoURL: {
            high: response.items[0].snippet.thumbnails.high.url,
            medium: response.items[0].snippet.thumbnails.medium.url,
            default: response.items[0].snippet.thumbnails.default.url,
          },
        };
        setChannel({
          ..._channel,
        });
      } else {
        setChannel({
          channelId: channelId,
          photoURL: {},
        });
      }
    };
    fetchApi();
  }, [channelId]);

  const menuSettingItemVideoHasAuth = { ...MENU_SETTINGS_VIDEO_ITEM };
  const menuSettingItemVideoNotAuth = {
    ...MENU_SETTINGS_VIDEO_ITEM,
    values: [...MENU_SETTINGS_VIDEO_ITEM.values].filter((item, index) => {
      return index === 0 || index === 3;
    }),
  };
  return (
    <div className={cx('wrapper')}>
      <div className={cx('item-top')}>
        <Image
          src={photoURL.high || photoURL.medium || photoURL.default}
          al={title}
          title={title}
        />
        <span className={cx('time')}>{_duration}</span>
      </div>
      <div className={cx('item-bottom')}>
        <div className={cx('channel-avatar')}>
          {channel && (
            <Image
              src={
                channel.photoURL.high ||
                channel.photoURL.medium ||
                channel.photoURL.default ||
                Images.noImage
              }
              alt={channelTitle}
            />
          )}
        </div>
        <div className={cx('item-mid')}>
          <h5 className={cx('title-video')}>{title}</h5>
          <div className={cx('channel')}>
            <p className={cx('channel-name')}>{channelTitle}</p>
            {/* <div className={cx('verified')}>
              <VerifiedIcon />
            </div> */}
          </div>
          <div className={cx('view-time')}>
            {numeral(viewCount).format('0.a')} • {moment(publishedAt).fromNow()}
          </div>
        </div>

        {/* tippy loi khi lan dau SignIn/signOut => khong thay doi menu duoc*/}
        {auth.status === 1 && (
          <Menu
            data={menuSettingItemVideoHasAuth}
            showMenu={showSettings}
            setShowMenu={setShowSettings}
            delay={[200, 800]}
            offset={[-30, -30]}
            placement="bottom-end"
          >
            <button
              className={cx('icon-settings')}
              onClick={() => {
                setShowSettings(!showSettings);
              }}
            >
              <SettingsIcon />
            </button>
          </Menu>
        )}
        {auth.status !== 1 && (
          <Menu
            data={menuSettingItemVideoNotAuth}
            showMenu={showSettings}
            setShowMenu={setShowSettings}
            delay={[200, 800]}
            offset={[-30, -30]}
            placement="bottom-end"
          >
            <button
              className={cx('icon-settings')}
              onClick={() => {
                setShowSettings(!showSettings);
              }}
            >
              <SettingsIcon className={cx('icon')} />
            </button>
          </Menu>
        )}
      </div>
    </div>
  );
};

HomeVideoItem.propTypes = {};

export default HomeVideoItem;
