import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './HomePage.module.scss';

const cx = classNames.bind(styles);
const HomePage = (props) => {
  return (
    <div>
      <p className={cx('test1')}>HOme 1</p>
      <p className={cx('test2')}>HOme 2</p>
      <p className={cx('test3')}>HOme 3</p>
      <p className={cx('test4')}>HOme 4</p>
      <p className={cx('test5')}>HOme 5</p>
      <p className={cx('test6')}>HOme 6</p>
    </div>
  );
};

HomePage.propTypes = {};

export default HomePage;
