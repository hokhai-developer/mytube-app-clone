import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Comment.module.scss';
import Image from '~/components/Image';
import CommentItem from './CommentItem';
import { ArrowDowIcon } from '~/components/Icons';
import ViewReply from './ViewReply';
import MyComment from './MyComment';

const cx = classNames.bind(styles);
const Comment = ({ photoURL }) => {
  return (
    <div className={cx('wrapper')}>
      <MyComment />
      <CommentItem>
        <ViewReply />
      </CommentItem>
    </div>
  );
};

Comment.propTypes = {};

export default Comment;
