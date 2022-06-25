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
import ScrollInfinity from '~/components/ScrollInfinity';

const cx = classNames.bind(styles);

const HomePage = (props) => {
  const [videosList, setVideoList] = useState({});
  const homeVideos = useSelector(homeSelector);
  const category = useSelector(categorySelector);
  const dispatch = useDispatch();

  useEffect(() => {
    const currentCategoryActive = category.currentActive.categoryID;
    let index = homeVideos.findIndex((video) => {
      return video.videoCategoryId === currentCategoryActive;
    });

    if (index === -1) {
      setVideoList({});
      return;
    }
    setVideoList(homeVideos[index]);
  }, [category.currentActive.categoryID]);

  const fetchMoreVideos = async () => {
    const videoCategoryId = videosList.videoCategoryId;
    const nextPageToken = videosList.nextPageToken;

    const results = await getVideos({
      part: 'snippet,contentDetails,statistics',
      key: 'AIzaSyDLsgf7_AP9fUex_OifIqQ4hnwR5fqLHvA',
      chart: 'mostPopular',
      regionCode: 'VN',
      maxResults: 12,
      videoCategoryId: videoCategoryId,
      pageToken: nextPageToken,
    });
    if (results && results.items) {
      const listVideos = results.items.map((item) => {
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

      setVideoList({
        videoCategoryId: videosList.videoCategoryId,
        nextPageToken: results.nextPageToken,
        listVideos: [...videosList.listVideos, ...listVideos],
      });

      dispatch(
        homeSlice.actions.addMoreVideos({
          status: 1,
          videoCategoryId: videoCategoryId,
          nextPageToken: results.nextPageToken,
          listVideos: listVideos,
        }),
      );
    }
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('category')}>
        <Categories />
        {videosList &&
          videosList.listVideos &&
          videosList.listVideos.length > 0 && (
            <div className={cx('wrapper-list')}>
              <ScrollInfinity
                nextFunctions={fetchMoreVideos}
                maxLength={videosList.listVideos.length}
                className={cx('scroll-infinity')}
                stop={videosList.listVideos.length > 100}
              >
                {videosList.listVideos.map((video) => {
                  return (
                    <HomeVideoItem
                      key={`${video.id} + ${Math.floor(
                        Math.random() * 10000,
                      )} + ${video.title}`}
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
              </ScrollInfinity>
            </div>
          )}
      </div>
    </div>
  );
};

HomePage.propTypes = {};

export default HomePage;
