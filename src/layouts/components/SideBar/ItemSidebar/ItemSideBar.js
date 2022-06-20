import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './ItemSideBar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const ItemSideBar = ({ iconLeft, title, iconRight, path, channelID }) => {
  return (
    <NavLink
      to={path}
      className={(nav) =>
        cx('item', {
          active: nav.isActive,
        })
      }
    >
      <div
        className={cx('btn', {
          chanel: channelID,
        })}
      >
        {iconLeft}
      </div>
      <h6 className={cx('title')}>{title}</h6>
      {iconRight && <div className={cx('icon-right')}>{iconRight}</div>}
    </NavLink>
  );
};

ItemSideBar.propTypes = {
  iconLeft: PropTypes.node,
  title: PropTypes.string,
  iconRight: PropTypes.node,
  path: PropTypes.string,
  channelID: PropTypes.string,
};

export default ItemSideBar;
