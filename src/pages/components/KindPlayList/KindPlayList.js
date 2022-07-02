import React, { useState, useId } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './KindPlayList.module.scss';
import Menu from '~/components/Menu';

import {
  SettingsIcon,
  LiveIcon,
  PlayIcon,
  NotInterestedIcon,
} from '~/components/Icons';
import Image from '~/components/Image';
import { v4 as uuidv4 } from 'uuid';

const MENU_SETTINGS = {
  type: 'settingsVideoItem',
  id: uuidv4(),
  values: [
    {
      id: uuidv4(),
      type: 'settingsVideoItem',
      leftIcon: <NotInterestedIcon />,
      title: 'Not interested',
    },
  ],
};

const cx = classNames.bind(styles);
const KindPlayList = (props) => {
  const [showMenuSetting, setShowMenuSetting] = useState(false);
  return (
    <div className={cx('wrapper')}>
      <div className={cx('left')}>
        <Image src="https://picsum.photos/200" className={cx('image')} />
        <div className={cx('layer')}>
          <LiveIcon />
        </div>
        <div className={cx('playAll')}>
          <button className={cx('btn-play')}>
            <PlayIcon />
          </button>
          <p className={cx('title')}> PLAY ALL</p>
        </div>
      </div>
      <div className={cx('center')}>
        <p className={cx('mix')}>Mix - Kevin Powell</p>
        <p className={cx('more')}>More form this channel for you</p>
      </div>
      <Menu
        data={MENU_SETTINGS}
        showMenu={showMenuSetting}
        setShowMenu={setShowMenuSetting}
        delay={[200, 800]}
        offset={[30, 0]}
        placement="left"
      >
        <button
          className={cx('right')}
          onClick={() => setShowMenuSetting(!showMenuSetting)}
        >
          <SettingsIcon />
        </button>
      </Menu>
    </div>
  );
};

KindPlayList.propTypes = {};

export default KindPlayList;
