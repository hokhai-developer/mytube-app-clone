import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './SavePlaylist.module.scss';
import { ClearIcon } from '../Icons';
import PLaylist from './Playlist';
import CreatePlaylist from './CreatePlaylist/CreatePlaylist';

const cx = classNames.bind(styles);
const SavePlaylist = ({ className, setShowModel }) => {
  const handleClick = (e) => {
    e.stopPropagation();
  };
  return (
    <div className={cx('wrapper', className)} onClick={(e) => handleClick(e)}>
      <header className={cx('header')}>
        <p className={cx('header-text')}>Save to...</p>
        <button
          className={cx('header-clear-btn')}
          onClick={() => setShowModel(false)}
        >
          <ClearIcon />
        </button>
      </header>
      <PLaylist />
      <CreatePlaylist />
    </div>
  );
};

SavePlaylist.propTypes = {};

export default SavePlaylist;
