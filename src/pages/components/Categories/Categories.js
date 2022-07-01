import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Categories.module.scss';
import Slice from '~/components/Slice';
import { useSelector, useDispatch } from 'react-redux';
import { categorySelector, homeSelector } from '~/redux/selector';
import { getCategoryList } from '~/services/categoryList';
import categorySlice from '~/redux/categorySlice';
import { getVideos } from '~/services/videos';
import { Search } from '~/services/search';
import homeSlice from '~/redux/homeSlice';

const cx = classNames.bind(styles);
const Categories = ({ scrollIntoView }) => {
  const [categoryList, setCategoryList] = useState([]);
  const [active, setActive] = useState(undefined);

  const dispatch = useDispatch();
  const category = useSelector(categorySelector);
  const homeVideos = useSelector(homeSelector);

  useEffect(() => {
    if (category.status === 1) {
      setCategoryList(category.list);
      setActive(category.currentActive.categoryID);
      return;
    }

    //fetch categories
    const fetchCategoryApi = async (options) => {
      const results = await getCategoryList(options);
      if (results && results.items) {
        const list = results.items.map((item) => {
          return {
            categoryID: item.id,
            title: item.snippet.title,
          };
        });
        dispatch(
          categorySlice.actions.setList({
            status: 1,
            list: list,
            currentActive: { ...list[0] },
          }),
        );
        setCategoryList(() => list);
        setActive(list[0].categoryID);
        fetchVideosApi(list[0]);
      } else {
        dispatch(
          categorySlice.actions.setList({
            status: 0,
            list: [],
            currentActive: {},
          }),
        );
      }
    };
    fetchCategoryApi({
      part: 'snippet',
      key: 'AIzaSyA9Pm4YhmuhpMsRcrB82tkUIaG4UJ9cLr4',
      regionCode: 'VN',
    });
  }, []);

  async function fetchVideosApi(options) {
    const results = await getVideos({
      videoCategoryId: options.categoryID,
      maxResults: 12,
      chart: 'mostPopular',
      regionCode: 'VN',
      part: 'snippet,contentDetails,statistics',
      key: 'AIzaSyA29jsxw6Lrr_iO1tJvHdW_NvkEOJGIQCk',
    });

    if (results && results.items) {
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
          videoCategoryId: options.categoryID,
          nextPageToken: results.nextPageToken,
          listVideos: listVideo,
        }),
      );
      setActive(options.categoryID);
      dispatch(categorySlice.actions.active(options));
    } else if (results.response.status === 404) {
      const result = await Search({
        key: 'AIzaSyA9Pm4YhmuhpMsRcrB82tkUIaG4UJ9cLr4',
        part: 'snippet',
        regionCode: 'VN',
        q: options.title,
        maxResults: 50,
      });
      if (result && result.items) {
        const listItem = result.items.filter((_item) => {
          return _item.id.kind === 'youtube#video';
        });
        const listVideo = listItem.map((_item) => {
          return {
            id: _item.id.videoId,
            channelId: _item.snippet.channelId,
            channelTitle: _item.snippet.channelTitle,
            publishedAt: _item.snippet.publishedAt,
            title: _item.snippet.title,
            photoURL: {
              default: _item.snippet.thumbnails.default.url,
              medium: _item.snippet.thumbnails.medium.url,
              high: _item.snippet.thumbnails.high.url,
            },
          };
        });
        if (listVideo.length > 0) {
          listVideo.forEach((video, index, listVideo) => {
            getVideos({
              part: 'contentDetails,statistics',
              id: video.id,
              key: 'AIzaSyA9Pm4YhmuhpMsRcrB82tkUIaG4UJ9cLr4',
            }).then((res) => {
              listVideo[index].duration = res.items[0].contentDetails.duration;
              listVideo[index].viewCount = res.items[0].statistics.viewCount;
            });
          });
        }
        dispatch(
          homeSlice.actions.newVideos({
            status: 1,
            videoCategoryId: options.categoryID,
            listVideos: listVideo,
          }),
        );
        setActive(options.categoryID);
        dispatch(categorySlice.actions.active(options));
      }
    }
  }

  const handleClick = (item) => {
    scrollIntoView();

    if (item.categoryID === active) {
      //scrollIntoView
      return;
    }
    let index = homeVideos.map((video) => {
      return video.videoCategoryId === item.categoryID;
    });

    if (index === -1) {
      return;
    } else {
      fetchVideosApi(item);
    }
  };

  return (
    <div className={cx('wrapper')}>
      {category.status && category.list.length > 0 ? (
        <Slice translateX={220}>
          {categoryList.map((item) => {
            return (
              <span
                className={cx('chip', {
                  active: active === item.categoryID,
                })}
                key={item.categoryID}
                onClick={() => handleClick(item)}
              >
                {item.title}
              </span>
            );
          })}
        </Slice>
      ) : (
        <p className={cx('loading')}>Loading... categories</p>
      )}
    </div>
  );
};

Categories.propTypes = {};

export default Categories;
