import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './MenuSelect.module.scss';
import { LocationIcon } from '~/components/Icons';

const cx = classNames.bind(styles);
const MenuSelectItem = ({ iconLeft, title, desc, onClick }) => {
  return (
    <div className={cx('wrapper-item')} onClick={onClick}>
      {iconLeft && <button className={cx('item-btn')}>{iconLeft}</button>}
      <div className={cx('item-body')}>
        {title && <p className={cx('body-title')}>{title}</p>}
        {desc && <p className={cx('body-desc')}>{desc}</p>}
      </div>
    </div>
  );
};

MenuSelectItem.propTypes = {};

export default MenuSelectItem;
