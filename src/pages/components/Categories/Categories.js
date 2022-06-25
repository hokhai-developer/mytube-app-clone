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
import homeSlice from '~/redux/homeSlice';

const cx = classNames.bind(styles);
const Categories = (props) => {
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
    const fetchCategoryApi = async () => {
      const results = await getCategoryList();
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
    fetchCategoryApi();
  }, []);

  async function fetchVideosApi(options) {
    const results = await getVideos({
      part: 'snippet,contentDetails,statistics',
      key: 'AIzaSyDLsgf7_AP9fUex_OifIqQ4hnwR5fqLHvA',
      chart: 'mostPopular',
      regionCode: 'VN',
      maxResults: 12,
      videoCategoryId: options.categoryID,
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
    } else {
      //show error
      return;
    }
  }

  const handleClick = (item) => {
    if (item.categoryID === active) {
      return;
    }
    let index = homeVideos.map((video) => {
      return homeVideos.videoCategoryId === item.categoryID;
    });

    if (index === -1) {
      return;
    } else {
      fetchVideosApi(item);
    }

    // setActive(item.categoryID);
    // dispatch(categorySlice.actions.active({ ...item }));
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
