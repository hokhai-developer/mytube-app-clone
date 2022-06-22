import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './HomeVideoItem.module.scss';
import Image from '~/components/Image';
import { v4 as uuidv4 } from 'uuid';
import Menu from '~/components/Menu';
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
import { authSelector } from '~/Redux/selector';
import { useSelector } from 'react-redux';

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

const HomeVideoItem = (props) => {
  const [showSettings, setShowSettings] = useState(false);
  const auth = useSelector(authSelector);
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
        <Image src="" al="" />
        <span className={cx('time')}>25:25</span>
      </div>
      <div className={cx('item-bottom')}>
        <div className={cx('channel-avatar')}>
          <Image src="" alt="" />
          <span></span>
        </div>
        <div className={cx('item-mid')}>
          <h5 className={cx('title-video')}>
            Chiến hạm Mỹ chạm trán xồng cao tốc vệ binh Cách mạng Iran, lên án
            hoạt động thiếu an toàn
          </h5>
          <div className={cx('channel')}>
            <p className={cx('channel-name')}>Báo Thanh Niên</p>
            <div className={cx('verified')}>
              <VerifiedIcon />
            </div>
          </div>
          <div className={cx('view-time')}>10k views • 1hour ago</div>
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
              <SettingsIcon />
            </button>
          </Menu>
        )}
      </div>
    </div>
  );
};

HomeVideoItem.propTypes = {};

export default HomeVideoItem;
