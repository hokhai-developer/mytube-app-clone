import React, { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Playlist.module.scss';
import { PrivateIcon } from '~/components/Icons';

const cx = classNames.bind(styles);
const ListItem = ({ className, name, iconPrivacy }) => {
  const [defaultChecked, setDefaultChecked] = useState(false);
  const handleCheck = (e) => {
    e.stopPropagation();
    setDefaultChecked(!defaultChecked);
  };
  return (
    <div className={cx('list-item', className)} onClick={(e) => handleCheck(e)}>
      <input
        type="checkbox"
        className={cx('item-input')}
        onChange={handleCheck}
        checked={defaultChecked}
      />
      <p className={cx('item-name')}>{name}</p>
      <button className={cx('item-btn')}>{iconPrivacy}</button>
    </div>
  );
};

ListItem.propTypes = {};

export default ListItem;
