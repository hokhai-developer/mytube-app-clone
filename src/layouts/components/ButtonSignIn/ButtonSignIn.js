import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ButtonSignIn.module.scss';
import { UserIcon } from '~/components/Icons';

const cx = classNames.bind(styles);
const ButtonSignIn = ({ className }) => {
  const handleSignIN = () => {
    console.log('login');
  };

  return (
    <div className={cx('wrapper')} onClick={handleSignIN}>
      <button className={cx('btn-signIn', className)}>
        <div className={cx('btn')}>
          <UserIcon className={cx('user-icon')} />
        </div>
        <h4 className={cx('btn-title')}>Sign In</h4>
      </button>
    </div>
  );
};

ButtonSignIn.propTypes = {
  className: PropTypes.string,
};

export default ButtonSignIn;
