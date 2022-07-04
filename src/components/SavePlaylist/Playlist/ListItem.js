import React, { useRef } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Playlist.module.scss';
import { PrivateIcon } from '~/components/Icons';

const cx = classNames.bind(styles);
const ListItem = ({ className }) => {
  const inputRef = useRef();
  const handleCheck = (e) => {
    const input = inputRef.current;
    if (!input.defaultChecked) {
      input.defaultChecked = true;
    } else {
      input.defaultChecked = false;
    }
  };
  return (
    <div className={cx('list-item', className)} onClick={(e) => handleCheck(e)}>
      <input type="checkbox" className={cx('item-input')} ref={inputRef} />
      <p className={cx('item-name')}>
        list name dsad ddddd dddd dddd das sss sssss sss ssss
      </p>
      <button className={cx('item-btn')}>
        <PrivateIcon />
      </button>
    </div>
  );
};

ListItem.propTypes = {};

export default ListItem;
