import React, { Children } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './MenuItem.module.scss';
import { Link } from 'react-router-dom';
import { NextIcon } from '~/components/Icons/Icons';

const cx = classNames.bind(styles);
const MenuItem = ({
  type,
  id,
  path,
  target,
  leftIcon,
  title,
  rightIcon,
  pathPreventive,
  onClick,
  ...passProps
}) => {
  let Comp = 'div';
  const props = {
    onClick,
    ...passProps,
  };

  if (path) {
    if (target) {
      Comp = 'a';
      props.target = target;
      props.href = path;
    } else {
      Comp = Link;
      props.to = path;
    }
  }

  return (
    <Comp
      {...props}
      className={cx('wrapper', {
        [type]: !!type,
      })}
    >
      <button className={cx('btn')}>{leftIcon ? leftIcon : ''}</button>
      <h5
        className={cx('title', {
          [type]: type,
        })}
      >
        {title}
      </h5>
      {rightIcon && (
        <button className={cx('btn')}>
          <NextIcon />
        </button>
      )}
    </Comp>
  );
};

MenuItem.propTypes = {};

export default MenuItem;
