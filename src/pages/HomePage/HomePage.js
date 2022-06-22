import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './HomePage.module.scss';
import HomeVideoItem from '../components/HomeVideoItem/HomeVideoItem';
import Categories from '../components/Categories/Categories';

const cx = classNames.bind(styles);
const HomePage = (props) => {
  return (
    <div className={cx('wrapper')}>
      <Categories />
      <div className={cx('wrapper-list')}>
        <HomeVideoItem />
        <HomeVideoItem />
        <HomeVideoItem />
        <HomeVideoItem />
        <HomeVideoItem />
        <HomeVideoItem />
        <HomeVideoItem />
        <HomeVideoItem />
      </div>
    </div>
  );
};

HomePage.propTypes = {};

export default HomePage;
