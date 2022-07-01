import React, { useContext, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Watch.module.scss';
import { ToggleSideBarContext } from '~/context/ToggleSideBarProvider';
import PropTypes from 'prop-types';
import {
  LikeIcon,
  NotificationsIcon,
  SettingsIcon,
  SortByIcon,
} from '~/components/Icons';
import Image from '~/components/Image';
import Iframe from '../components/Iframe';
import ActionsWatchVideo from '../components/ActionsWatchVideo';
import Channel from '../components/Channel';
import PopupComment from '../components/PopupComment';
import Comment from '../components/Comment';

const cx = classNames.bind(styles);

const Watch = (props) => {
  const toggleSideBar = useContext(ToggleSideBarContext);
  return (
    <div className={cx('wrapper')}>
      <div className={cx('watch-left')}>
        <Iframe
          videoId={'djMy4QsPWiI'}
          title={'Socket.io + ReactJS Tutorial | Learn Socket.io For Beginners'}
          className={cx('video-location')}
        />
        <p className={cx('tags')}>
          <span className={cx('tag')}>#reactjs</span>{' '}
          <span className={cx('tag')}>#socket</span>
        </p>
        <h5 className={cx('title')}>
          Socket.io + ReactJS Tutorial | Learn Socket.io For Beginners
        </h5>
        <p className={cx('desc-less')}>
          <span className={cx('text-bold')}>ViewCount views Mar 22, 2022</span>{' '}
          In this video I will be introducing the SocketIO Library in React. We
          will be using NodeJS and Express to build out the HTTP Socket server,
          and ReactJS...<span className={cx('show-more')}>more</span>
        </p>
        <ActionsWatchVideo videoId={'djMy4QsPWiI'} likeCount="6.8K" />
        <Channel />
        <PopupComment />
        <div className={cx('contain')}>
          <div className={cx('total-comment')}>72 comments</div>
          <button className={cx('sort-by')}>
            <SortByIcon />
            <p className={cx('text')}>SORT BY</p>
          </button>
        </div>
        <Comment />
      </div>
      <div className={cx('watch-right')}>ewqewqeqew</div>
    </div>
  );
};

Watch.propTypes = {};

export default Watch;
