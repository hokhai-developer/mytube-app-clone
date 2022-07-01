import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './MyComment.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

const MyComment = ({ setShowMyComment }) => {
  return (
    <div className={cx('my-comment')}>
      <div className={cx('user-avatar')}>
        <Image src="https://picsum.photos/200" />
      </div>
      <div className={cx('comment-form')}>
        <input
          type="text"
          placeholder="Add a comment..."
          className={cx('top')}
        />
        <div className={cx('bottom')}>
          <button
            className={cx('btn')}
            onClick={(e) => {
              e.stopPropagation();
              setShowMyComment(false);
            }}
          >
            CANCEL
          </button>
          <button className={cx('btn', 'comment', 'active')}>COMMENT</button>
        </div>
      </div>
    </div>
  );
};

MyComment.propTypes = {};

export default MyComment;
