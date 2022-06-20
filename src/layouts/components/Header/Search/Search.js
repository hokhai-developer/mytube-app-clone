import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { SearchIcon, ClearIcon } from '~/components/Icons';
import HeadlessTippy from '@tippyjs/react/headless';
import SearchResult from '../SearchResult';

const cx = classNames.bind(styles);
const Search = (props) => {
  return (
    <HeadlessTippy
      interactive
      visible
      render={(attrs) => (
        <div className={cx('search-box')} tabIndex="-1" {...attrs}>
          <SearchResult />
        </div>
      )}
    >
      <div className={cx('wrapper')}>
        <button className={cx('search-icon')}>
          <SearchIcon className={cx('icon')} />
        </button>

        <input
          type="text"
          placeholder="Search"
          className={cx('search-input')}
        />
        <button className={cx('clear-btn')}>
          <ClearIcon />
        </button>
        <button className={cx('search-btn')}>
          <SearchIcon />
        </button>
      </div>
    </HeadlessTippy>
  );
};

Search.propTypes = {};

export default Search;
