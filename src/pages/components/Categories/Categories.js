import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Categories.module.scss';
import Slice from '~/components/Slice/Slice';
import { useSelector, useDispatch } from 'react-redux';
import { categorySelector } from '~/redux/selector';
import { getCategoryList } from '~/services/categoryList';
import categorySlice from '~/redux/categorySlice';

const cx = classNames.bind(styles);
const Categories = (props) => {
  const [categoryList, setCategorySelector] = useState([]);
  const [active, setActive] = useState(undefined);

  const dispatch = useDispatch();
  const category = useSelector(categorySelector);

  useEffect(() => {
    const fetchApi = async () => {
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
        setCategorySelector(() => list);
        setActive(list[0].categoryID);
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

    fetchApi();
  }, []);

  const handleClick = (item) => {
    setActive(item.categoryID);
    dispatch(categorySlice.actions.active({ ...item }));
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
