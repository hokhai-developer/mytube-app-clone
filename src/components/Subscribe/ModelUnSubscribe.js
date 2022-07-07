import React from 'react';
import classNames from 'classnames/bind';
import styles from './Subscribe.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
const ModelUnSubscribe = ({
  setShowModelUnSubscribe,
  className,
  unSubscribed,
}) => {
  return (
    <div className={cx('model-content', className)}>
      <header className={cx('header')}>
        <p className={cx('title')}>Unsubscribe from TCQ Gaming?</p>
      </header>
      <div className={cx('bottom')}>
        <button
          className={cx('cancel', 'btn')}
          onClick={() => {
            setShowModelUnSubscribe(false);
          }}
        >
          cancel
        </button>
        <button
          className={cx('unsubscribe', 'btn')}
          onClick={() => unSubscribed()}
        >
          unsubscribe
        </button>
      </div>
    </div>
  );
};

ModelUnSubscribe.propTypes = {};

export default ModelUnSubscribe;
