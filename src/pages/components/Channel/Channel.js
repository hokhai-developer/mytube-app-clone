import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Channel.module.scss';
import Image from '~/components/Image';
import { NotificationsIcon } from '~/components/Icons';

const cx = classNames.bind(styles);
const Channel = ({ className }) => {
  const [subscribed, setSubscribed] = useState(false);
  return (
    <div className={cx('wrapper', className)}>
      <div className={cx('channel-left')}>
        <div className={cx('channel-thumb')}>
          <Image src="https://picsum.photos/200" />
        </div>
        <div className={cx('channel')}>
          <p className={cx('channel-name')}>Pedro Tech</p>
          <p className={cx('channel-subscribers')}>12.8k subscribers</p>
        </div>
      </div>
      <div className={cx('channel-right')}>
        <button
          className={cx('btn', {
            subscribed: subscribed,
          })}
        >
          {subscribed ? 'SUBSCRIBED' : 'SUBSCRIBE'}
        </button>
        {subscribed && (
          <button className={cx('btn-notify')}>
            <NotificationsIcon />
          </button>
        )}
      </div>
    </div>
  );
};

Channel.propTypes = {};

export default Channel;
