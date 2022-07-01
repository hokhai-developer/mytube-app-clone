import React from 'react';
import classNames from 'classnames/bind';
import styles from './ActionsWatchVideo.module.scss';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react';

const cx = classNames.bind(styles);
const ActionsWatchVideo = ({ className, iconLeft, title, content }) => {
  return (
    <>
      {content ? (
        <Tippy
          content={content}
          arrow={false}
          placement={'bottom'}
          offset={[0, -4]}
        >
          <button className={cx('action-item', className)}>
            {iconLeft && <div className={cx('icon')}>{iconLeft}</div>}
            {title && <span className={cx('title')}>{title}</span>}
          </button>
        </Tippy>
      ) : (
        <button className={cx('action-item', className)}>
          {iconLeft && <div className={cx('icon')}>{iconLeft}</div>}
          {title && <span className={cx('title')}>{title}</span>}
        </button>
      )}
    </>
  );
};

ActionsWatchVideo.propTypes = {
  className: PropTypes.string,
  iconLeft: PropTypes.node,
  title: PropTypes.string,
  content: PropTypes.string,
};

export default ActionsWatchVideo;
