import React, { useEffect, useRef, useState } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './HomePage.module.scss';
import HomeVideoItem from '../components/HomeVideoItem/HomeVideoItem';
import Categories from '../components/Categories/Categories';
import { getVideos } from '~/services/videos';
import { categorySelector, homeSelector } from '~/redux/selector';
import { useDispatch, useSelector } from 'react-redux';
import homeSlice from '~/redux/homeSlice';
import categorySlice from '~/redux/categorySlice';

const cx = classNames.bind(styles);

const HomePage = (props) => {
  const [videosList, setVideoList] = useState([]);
  const [nextPageToken, setNextPageToken] = useState('');

  const homeVideos = useSelector(homeSelector);
  const category = useSelector(categorySelector);

  // useEffect(() => {
  //   const currentCategoryActive = category.currentActive.categoryID;
  //   let item = homeVideos.map((video) => {
  //     return video.videoCategoryId === currentCategoryActive;
  //   });

  //   setVideoList(item);
  // }, category.currentActive?.categoryID);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('category')}>
        <Categories />
      </div>
      <div className={cx('wrapper-list')}>
        {videosList.length > 0 &&
          videosList.map((video) => {
            return (
              <HomeVideoItem
                key={video.id}
                id={video.id}
                channelId={video.channelId}
                channelTitle={video.channelTitle}
                publishedAt={video.publishedAt}
                title={video.title}
                photoURL={video.photoURL}
                duration={video.duration}
                viewCount={video.viewCount}
              />
            );
          })}
      </div>
    </div>
  );
};

HomePage.propTypes = {};

export default HomePage;
