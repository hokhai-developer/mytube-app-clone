import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Comment.module.scss';
import Image from '~/components/Image';
import CommentItem from './CommentItem';
import { ArrowDowIcon } from '~/components/Icons';
import ViewReply from './ViewReply';
import MyComment from './MyComment';
import { getCommentThreads } from '~/services/comments';
import { useDispatch } from 'react-redux';
import newCommentSlice from '~/redux/newCommentSlice';
import moment from 'moment';

const cx = classNames.bind(styles);
const Comment = ({ videoId }) => {
  const [nextPageToken, setNextPageToken] = useState('');
  const [topLevelComment, setTopLevelComment] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!videoId) return;

    const fetchCommentsByVideoId = async (options) => {
      const results = await getCommentThreads(options);
      if (results && results.items) {
        const { nextPageToken, items } = results;
        if (nextPageToken) {
          setNextPageToken(nextPageToken);
        }

        if (items.length > 0) {
          const commentList = items.map((item) => {
            const { canReply } = item.snippet;
            const { id } = item.snippet.topLevelComment;
            const { totalReplyCount } = item.snippet;
            const { value: channelId } =
              item.snippet.topLevelComment.snippet.authorChannelId;
            const {
              authorProfileImageUrl,
              authorDisplayName,
              likeCount,
              publishedAt,
              textDisplay,
            } = item.snippet.topLevelComment.snippet;
            return {
              videoId: videoId,
              channelId,
              id,
              authorProfileImageUrl,
              authorDisplayName,
              likeCount,
              publishedAt,
              textDisplay,
              canReply,
              totalReplyCount,
            };
          });

          if (commentList.length > 0) {
            setTopLevelComment(commentList);
            dispatch(newCommentSlice.actions.update(commentList[0]));
          }
        }
      }
    };
    fetchCommentsByVideoId({
      key: 'AIzaSyDJHWRuuyTuB6DZ6yXWwRbyEUXGssYE0sQ',
      part: 'snippet',
      videoId: videoId,
      maxResults: 20,
    });
  }, [videoId]);
  console.log(moment(topLevelComment[5].publishedAt).fromNow());
  return (
    <div className={cx('wrapper')}>
      <MyComment />
      {topLevelComment && topLevelComment.length > 0}{' '}
      {topLevelComment.map((comment) => {
        return (
          <CommentItem
            id={comment.id}
            channelId={comment.channelId}
            authorProfileImageUrl={comment.authorProfileImageUrl}
            authorDisplayName={comment.authorDisplayName}
            likeCount={comment.likeCount}
            publishedAt={comment.publishedAt}
            textDisplay={comment.textDisplay}
            canReply={comment.canReply}
            totalReplyCount={comment.totalReplyCount}
          >
            {comment.totalReplyCount > 0 && <ViewReply />}
          </CommentItem>
        );
      })}
    </div>
  );
};

Comment.propTypes = {};

export default Comment;
