import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './ItemSideBar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const ItemSideBar = ({
  iconLeft,
  title = '',
  iconRight,
  path = '',
  channelID = '',
  target = '',
  onClick = () => {},
  type = '',
  ...passProps
}) => {
  let Comp = 'div';
  const props = {
    onClick,
    ...passProps,
  };
  if (path) {
    if (!target) {
      props.to = path;
      Comp = NavLink;
    } else {
      Comp = 'a';
      props.href = path;
      props.target = '_blank';
    }
  }

  return (
    <Comp
      className={
        Comp === NavLink
          ? (nav) =>
              cx('item', {
                active: nav.isActive,
                popular: type === 'popular',
                'more-from-youtube': type === 'more-from-youtube',
              })
          : cx('item')
      }
      {...props}
    >
      <div
        className={cx('btn', {
          subscriptions: type === 'subscriptions',
        })}
      >
        {iconLeft}
      </div>
      <h6 className={cx('title')}>{title}</h6>
      {iconRight && <div className={cx('icon-right')}>{iconRight}</div>}
    </Comp>
  );
};

ItemSideBar.propTypes = {
  iconLeft: PropTypes.node,
  title: PropTypes.string,
  iconRight: PropTypes.node,
  path: PropTypes.string,
  channelID: PropTypes.string,
  onClick: PropTypes.func,
};

export default ItemSideBar;
