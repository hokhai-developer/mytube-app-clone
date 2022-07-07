import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Playlist.module.scss';
import ListItem from './ListItem';
import { playlistSelector } from '~/redux/selector';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);
const PLaylist = (props) => {
  const [playlist, setPlaylist] = useState({});
  const playlistFromRedux = useSelector(playlistSelector);
  useEffect(() => {
    if (playlistFromRedux.values.length <= 5) return;

    const newPlaylist = {
      ...playlistFromRedux,
      values: [...playlistFromRedux.values].slice(5),
    };
    setPlaylist(newPlaylist);
  }, [playlistFromRedux.values.length]);
  return (
    <div className={cx('wrapper')}>
      {playlist &&
        playlist.values &&
        playlist.values.length > 0 &&
        playlist.values.map((value) => {
          return (
            <ListItem name={value.title} iconPrivacy={value.iconPrivacy} />
          );
        })}
    </div>
  );
};

PLaylist.propTypes = {};

export default PLaylist;
