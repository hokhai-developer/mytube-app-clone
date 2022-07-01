import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './CommentAction.module.scss';
import { LikeIcon } from '~/components/Icons';
import MyComment from '../MyComment';

const cx = classNames.bind(styles);
const CommentAction = (props) => {
  const [showMyComment, setShowMyComment] = useState(false);
  return (
    <div className={cx('comment-action')}>
      <div className={cx('actions')}>
        <button className={cx('btn')}>
          <LikeIcon width="16px" height="16px" />
          <span className={cx('count')}>13</span>
        </button>
        <button className={cx('btn')}>
          <LikeIcon width="16px" height="16px" />
        </button>
        <button
          className={cx('btn')}
          onClick={(e) => {
            e.stopPropagation();
            setShowMyComment(!showMyComment);
          }}
        >
          REPLY
        </button>
      </div>
      {showMyComment && <MyComment setShowMyComment={setShowMyComment} />}
    </div>
  );
};

CommentAction.propTypes = {};

export default CommentAction;
