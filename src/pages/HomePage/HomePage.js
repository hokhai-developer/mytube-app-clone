import React, { useEffect, useRef, useState } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './HomePage.module.scss';
import HomeVideoItem from '../components/HomeVideoItem';
import Categories from '../components/Categories/Categories';
import { getVideos } from '~/services/videos';
import { categorySelector, homeSelector, authSelector } from '~/redux/selector';
import { useDispatch, useSelector } from 'react-redux';
import homeSlice from '~/redux/homeSlice';
import ScrollInfinity from '~/components/ScrollInfinity';

const cx = classNames.bind(styles);

const HomePage = (props) => {
  const [videosList, setVideoList] = useState({});
  const topRef = useRef();
  const homeVideos = useSelector(homeSelector);
  const category = useSelector(categorySelector);
  const auth = useSelector(authSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    const currentCategoryActive = category.currentActive.categoryID;

    if (!currentCategoryActive) return;
    if (!homeVideos.length) return;

    let index = homeVideos.findIndex((video) => {
      return video.videoCategoryId === currentCategoryActive;
    });
    if (index === -1) {
      setVideoList({});
      return;
    }

    setVideoList(homeVideos[index]);
  }, [category.currentActive.categoryID, homeVideos.length]);

  const fetchMoreVideos = async () => {
    const videoCategoryId = videosList.videoCategoryId;
    const nextPageToken = videosList.nextPageToken;
    if (!nextPageToken) {
      return;
    }
    const results = await getVideos({
      part: 'snippet,contentDetails,statistics',
      key: 'AIzaSyA29jsxw6Lrr_iO1tJvHdW_NvkEOJGIQCk',
      regionCode: 'VN',
      chart: 'mostPopular',
      videoCategoryId: videoCategoryId,
      pageToken: nextPageToken,
      maxResults: 12,
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

  //scrollIntoView to the top page
  const handleScrollIntoView = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <div className={cx('wrapper')}>
      <div className={cx('category')}>
        <Categories scrollIntoView={handleScrollIntoView} />

        {videosList &&
          videosList.listVideos &&
          videosList.listVideos.length > 0 && (
            <div className={cx('wrapper-body')}>
              <div ref={topRef}></div>
              <ScrollInfinity
                nextFunctions={fetchMoreVideos}
                maxLength={videosList.listVideos.length}
                className={cx('scroll-infinity')}
                stop={
                  videosList.listVideos.length > 59 || !videosList.nextPageToken
                }
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
