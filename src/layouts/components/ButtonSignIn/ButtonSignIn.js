import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ButtonSignIn.module.scss';
import { UserIcon } from '~/components/Icons';
import { signInWithGoogle } from '~/firebase/signIn';
import { useDispatch } from 'react-redux';
import authSlice from '~/redux/authSlice';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);
const ButtonSignIn = ({ className }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignIN = async () => {
    const result = await signInWithGoogle();
    if (result) {
      const { accessToken, displayName, email, photoURL, uid } = result;
      console.log({ accessToken, displayName, email, photoURL, uid });
      dispatch(
        authSlice.actions.signInAuth({
          accessToken,
          displayName,
          email,
          photoURL,
          uid,
        }),
      );
      //show toast message thanh cong
      navigate('/');
    } else {
      //show toast message that bai
      navigate('/');
    }
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
