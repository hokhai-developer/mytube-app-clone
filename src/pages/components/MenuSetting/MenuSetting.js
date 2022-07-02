import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './MenuSetting.module.scss';
import { v4 as uuidv4 } from 'uuid';
import Menu from '~/components/Menu';

import {
  SettingsIcon,
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
const MenuSetting = ({ className }) => {
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
    <>
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
            className={cx('btn-setting', className)}
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
            className={cx('btn-setting', className)}
            onClick={() => {
              setShowSettings(!showSettings);
            }}
          >
            <SettingsIcon />
          </button>
        </Menu>
      )}
    </>
  );
};

MenuSetting.propTypes = {};

export default MenuSetting;
