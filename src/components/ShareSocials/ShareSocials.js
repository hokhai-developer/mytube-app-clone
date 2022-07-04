import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ShareSocials.module.scss';
import { ClearIcon } from '~/components/Icons';
import Socials from './Socials';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles);
const ShareSocials = ({ setShowModel }) => {
  const params = useParams();
  return (
    <div
      className={cx('wrapper')}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className={cx('top')}>
        <p className={cx('title')}>Share</p>
        <button
          className={cx('btn-clear')}
          onClick={(e) => {
            e.stopPropagation();
            setShowModel(false);
          }}
        >
          <ClearIcon />
        </button>
      </div>
      <Socials />
      <div className={cx('share-link')}>
        <p className={cx('link')}>
          https://www.youtube.com/watch?v={params.id}
        </p>
        <button className={cx('btn')}>COPY</button>
      </div>
    </div>
  );
};

ShareSocials.propTypes = {};

export default ShareSocials;
