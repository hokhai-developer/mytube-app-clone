import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

import { ToggleIcon, LogoIcon } from '~/components/Icons';
import Search from './Search';
import Action from './Action';

const cx = classNames.bind(styles);
console.log('123');
const Header = (props) => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header-left')}>
        <button className={cx('btn', 'toggle')}>
          <ToggleIcon />
        </button>
        <Link to="/" className={cx('logo-link')}>
          <LogoIcon className={cx('logo-icon')} />
          <span className={cx('country-code')}>VN</span>
        </Link>
      </div>
      <div className={cx('header-center')}>
        <Search />
      </div>
      <div className={cx('header-right')}>
        <Action />
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
