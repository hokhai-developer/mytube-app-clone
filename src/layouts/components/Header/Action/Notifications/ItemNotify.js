import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { SettingsIcon } from '~/components/Icons';
import Image from '~/components/Image';
import PropTypes from 'prop-types';
import styles from './Notifications.module.scss';
import { MENU_SETTINGS_NOTIFY } from '~/layouts/components/Header/Action/DataMenu';
import Menu from '../Menu';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const cx = classNames.bind(styles);
const ItemNotify = (props) => {
  const [showSettingNotify, setShowSettingNotify] = useState(false);
  return (
    <div className={cx('wrapper-item')}>
      <div className={cx('item-avatar')}>
        <Image
          src="https://picsum.photos/200"
          alt="avatar"
          className={cx('avatar')}
        />
      </div>
      <div className={cx('item-body')}>
        <p className={cx('title')}>
          Channel Name status Upload/live: Cai dat moi truong cho may tinhs moi.
        </p>
        <p className={cx('time')}>17 hours ago</p>
      </div>
      <div className={cx('item-thumb')}>
        <Image
          src="https://picsum.photos/200"
          alt="avatar"
          className={cx('thumb')}
        />
      </div>

      <Menu
        data={MENU_SETTINGS_NOTIFY}
        showMenu={showSettingNotify}
        setShowMenu={setShowSettingNotify}
        delay={[200, 800]}
        offset={[-400, -20]}
        placement="bottom-start"
      >
        <button
          className={cx('item-settings')}
          onClick={() => {
            setShowSettingNotify(!showSettingNotify);
          }}
        >
          <SettingsIcon />
        </button>
      </Menu>
    </div>
  );
};

ItemNotify.propTypes = {};

export default ItemNotify;
