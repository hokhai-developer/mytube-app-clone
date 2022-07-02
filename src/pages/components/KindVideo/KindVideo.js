import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './KindVideo.module.scss';
import { WatchIcon, AddToQueueIcon, SettingsIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Tippy from '@tippyjs/react';
import MenuSetting from '../MenuSetting/MenuSetting';

const cx = classNames.bind(styles);
const KindVideo = (props) => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('left')}>
        <Image src="https://picsum.photos/200" className={cx('thumb')} />
        <p className={cx('duration')}>19:51</p>
        <div className={cx('action')}>
          <Tippy content="Watch later" arrow={false} placement={'left'}>
            <button className={cx('watch-later', 'btn')}>
              <WatchIcon />
            </button>
          </Tippy>
          <Tippy
            content="Watch later"
            arrow={false}
            placement={'left'}
            offset={[0, -4]}
          >
            <button className={cx('add-queue', 'btn')}>
              <AddToQueueIcon />
            </button>
          </Tippy>
        </div>
      </div>
      <div className={cx('center')}>
        <p className={cx('title')} title="Can you beat me at a CSS Battle?">
          Can you beat me at a CSS Battle? Can you beat me at a CSS Battle?
        </p>
        <p className={cx('channel')} title="Kevin Powell">
          Kevin Powell
        </p>
        <p className={cx('view-count')}>29K views • 8 months ago</p>
      </div>

      <MenuSetting className={cx('right')} />
    </div>
  );
};

KindVideo.propTypes = {};

export default KindVideo;
