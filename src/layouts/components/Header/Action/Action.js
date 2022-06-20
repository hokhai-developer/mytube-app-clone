import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Action.module.scss';
import {
  AppsIcon,
  SettingsIcon,
  UserIcon,
  CreateIcon,
  NotificationsIcon,
} from '~/components/Icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Images from '~/assets/Images';
import Image from '~/components/Image';

const cx = classNames.bind(styles);
const Action = (props) => {
  const hasAuth = true;
  return (
    <div className={cx('wrapper')}>
      {!hasAuth ? (
        <>
          <Tippy content="My-tube Apps">
            <button className={cx('btn', 'btn-create')}>
              <AppsIcon />
            </button>
          </Tippy>
          <Tippy content="Settings">
            <button className={cx('btn', 'btn-settings')}>
              <SettingsIcon />
            </button>
          </Tippy>
          <button className={cx('btn-signIn')}>
            <div className={cx('btn')}>
              <UserIcon className={cx('user-icon')} />
            </div>
            <h4 className={cx('btn-title')}>Sign In</h4>
          </button>
        </>
      ) : (
        <>
          <Tippy content="Create">
            <button className={cx('btn')}>
              <CreateIcon />
            </button>
          </Tippy>
          <Tippy content="My-tube Apps">
            <button className={cx('btn', 'btn-create')}>
              <AppsIcon />
            </button>
          </Tippy>
          <Tippy content="Notifications">
            <button className={cx('btn', 'btn-create')}>
              <NotificationsIcon />
            </button>
          </Tippy>
          <Image src={Images.userAvatar} alt="User Avatar" />
        </>
      )}
    </div>
  );
};

Action.propTypes = {};

export default Action;
