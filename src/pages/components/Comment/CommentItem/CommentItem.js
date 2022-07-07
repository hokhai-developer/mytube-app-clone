import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './CommentItem.module.scss';
import Image from '~/components/Image';
import CommentAction from '../CommentAction';
import { SettingsIcon } from '~/components/Icons';
import moment from 'moment';

const cx = classNames.bind(styles);
const CommentItem = ({
  id,
  channelId,
  authorProfileImageUrl,
  authorDisplayName,
  likeCount,
  publishedAt,
  textDisplay,
  canReply,
  totalReplyCount,
  children,
}) => {
  const handlePublishedAt = (publishedAt) => {
    const newPublishedAt = moment(publishedAt).fromNow();
    if (newPublishedAt.startsWith('an')) {
      return newPublishedAt.replace('an', 1);
    }
    if (newPublishedAt.startsWith('a')) {
      return newPublishedAt.replace('a', 1);
    }
    return newPublishedAt;
  };
  return (
    <div className={cx('comment-item')}>
      <div className={cx('channel-avatar')}>
        <Image src={authorProfileImageUrl} alt={authorDisplayName} />
      </div>
      <div className={cx('center')}>
        <p className={cx('channel-name')}>
          {authorDisplayName}{' '}
          <span className={cx('publish')}>
            {handlePublishedAt(publishedAt)}
          </span>
        </p>

        <p className={cx('comment-title')}>{textDisplay}</p>
        <CommentAction />
        {children}
      </div>
      <button className={cx('btn-setting')}>
        <SettingsIcon />
      </button>
    </div>
  );
};

CommentItem.propTypes = {
  children: PropTypes.node,
};

export default CommentItem;
