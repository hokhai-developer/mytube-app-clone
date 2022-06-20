import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './MenuSideBar.module.scss';

const cx = classNames.bind(styles);
const MenuSideBar = ({ children, className }) => {
  return <div className={cx('wrapper', className)}>{children}</div>;
};

MenuSideBar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default MenuSideBar;
