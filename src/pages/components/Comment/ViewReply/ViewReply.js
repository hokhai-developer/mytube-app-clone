import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ViewReply.module.scss';
import { ArrowDowIcon, ArrowUpIcon } from '~/components/Icons';
import CommentItem from '../CommentItem';

const cx = classNames.bind(styles);

const ViewReply = () => {
  const [viewReply, setViewReply] = useState(false);
  return (
    <div
      className={cx('view-reply')}
      onClick={() => {
        setViewReply(!viewReply);
      }}
    >
      <button className={cx('btn')}>
        {!viewReply ? <ArrowDowIcon /> : <ArrowUpIcon />}
        <p className={cx('text')}>{!viewReply ? 'View reply' : 'Hide reply'}</p>
      </button>
      {viewReply && <CommentItem />}
    </div>
  );
};

ViewReply.propTypes = {};

export default ViewReply;
