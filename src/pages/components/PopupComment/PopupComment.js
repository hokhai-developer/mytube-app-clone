import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styled from './PopupComment.module.scss';
import { NextIcon } from '~/components/Icons';
import Image from '~/components/Image';
import { getVideos } from '~/services/videos';
import { getCommentThreads } from '~/services/comments';
import { newCommentSelector } from '~/redux/selector';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styled);
const PopupComment = ({ videoId, className }) => {
  const [commentCount, setCommentCount] = useState();
  // const [newComment, setNewComments] = useState({});
  const newComment = useSelector(newCommentSelector);

  useEffect(() => {
    if (!videoId) return;

    const fetchVideoById = async (options) => {
      const result = await getVideos(options);
      if (result && result.items && result.items[0]) {
        const { commentCount } = result.items[0].statistics;
        if (commentCount) {
          setCommentCount(commentCount);
        }
      }
    };
    fetchVideoById({
      key: 'AIzaSyDJHWRuuyTuB6DZ6yXWwRbyEUXGssYE0sQ',
      part: 'statistics',
      id: videoId,
    });

    // const fetchCommentsThreads = async (options) => {
    //   const result = await getCommentThreads(options);
    //   if (result && result.items && result.items[0]) {
    //     const { canReply } = result.items[0].snippet;
    //     const { value: channelId } =
    //       result.items[0].snippet.topLevelComment.snippet.authorChannelId;
    //     const {
    //       authorProfileImageUrl: channelURL,
    //       authorDisplayName: channelDisplayName,
    //       textDisplay,
    //     } = result.items[0].snippet.topLevelComment.snippet;
    //     setNewComments({
    //       canReply,
    //       channelId,
    //       channelURL,
    //       textDisplay,
    //       channelDisplayName,
    //     });
    //   }
    // };
    // fetchCommentsThreads({
    //   key: 'AIzaSyDJHWRuuyTuB6DZ6yXWwRbyEUXGssYE0sQ',
    //   part: 'snippet',
    //   videoId: videoId,
    //   maxResults: 1,
    // });
  }, [videoId]);

  return (
    <div className={cx('wrapper', className)}>
      {commentCount && (
        <div className={cx('total-comments')}>
          <p className={cx('title')}>Comments</p>
          <p className={cx('count')}>{commentCount}</p>
        </div>
      )}
      {newComment && (
        <div className={cx('user-comment')}>
          <div className={cx('user-avatar')}>
            {newComment.authorProfileImageUrl &&
              newComment.authorDisplayName && (
                <Image
                  src={newComment.authorProfileImageUrl}
                  alt={newComment.authorDisplayName}
                />
              )}
          </div>
          {newComment.textDisplay && (
            <p className={cx('comment')}>{newComment.textDisplay}</p>
          )}
          <button className={cx('btn-popup')}>
            <NextIcon />
          </button>
        </div>
      )}
    </div>
  );
};

PopupComment.propTypes = {};

export default PopupComment;
