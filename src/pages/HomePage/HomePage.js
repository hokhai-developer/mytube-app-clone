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
  const [categoryId, setCategoryId] = useState({});

  const dispatch = useDispatch();
  const category = useSelector(categorySelector);
  const homeVideos = useSelector(homeSelector);
  const prevCategoryId = useRef();

  useEffect(() => {
    prevCategoryId.current = categoryId;
    const videoCategoryId = category.currentActive.categoryID;
    if (!videoCategoryId) {
      return;
    }
    setCategoryId(category.currentActive); //luu lai videoCategoryId prev, xu ly khi error get video

    let index = homeVideos?.findIndex((homeVideo) => {
      return homeVideo.videoCategoryId === videoCategoryId;
    });

    if (index !== -1) {
      setVideoList(homeVideos[index].listVideos);
    } else {
      fetchApi(videoCategoryId);
    }
  }, [category.currentActive.categoryID]);

  async function fetchApi(id) {
    const results = await getVideos({
      part: 'snippet,contentDetails,statistics',
      key: 'AIzaSyDLsgf7_AP9fUex_OifIqQ4hnwR5fqLHvA',
      chart: 'mostPopular',
      regionCode: 'VN',
      maxResults: 8,
      videoCategoryId: id,
      // nextPageToken: _nextPageToken,
    });
    if (results && results.items) {
      // _nextPageToken = results.nextPageToken;
      const listVideo = results.items.map((item) => {
        return {
          id: item.id,
          channelId: item.snippet.channelId,
          channelTitle: item.snippet.channelTitle,
          publishedAt: item.snippet.publishedAt,
          title: item.snippet.title,
          photoURL: {
            default: item.snippet.thumbnails.default.url,
            medium: item.snippet.thumbnails.medium.url,
            high: item.snippet.thumbnails.high.url,
          },
          viewCount: item.statistics.viewCount,
          duration: item.contentDetails.duration,
        };
      });

      dispatch(
        homeSlice.actions.newVideos({
          status: 1,
          videoCategoryId: id,
          // nextPageToken: results.nextPageToken,
          listVideos: listVideo,
        }),
      );
      setVideoList(listVideo);
    } else {
      //getVideo error
      dispatch(categorySlice.actions.active(prevCategoryId.current));
      setVideoList([]);
    }
  }

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
