import React from 'react';
import classNames from 'classnames/bind';
import styles from './ActionsWatchVideo.module.scss';
import PropTypes from 'prop-types';
import {
  LikeIcon,
  DisLikeIcon,
  ShareIcon,
  ClipIcon,
  SaveIcon,
  SettingsIcon,
} from '~/components/Icons';
import ActionItem from './ActionItem';

const cx = classNames.bind(styles);
const ActionsWatchVideo = ({ className, likeCount }) => {
  return (
    <div className={cx('wrapper', className)}>
      <ActionItem
        iconLeft={<LikeIcon />}
        title={likeCount}
        content="I like this"
      />
      <ActionItem
        iconLeft={<DisLikeIcon />}
        title="DisLike"
        content="I dislike this"
      />
      <ActionItem iconLeft={<ShareIcon />} title="Share" content="Share" />
      <ActionItem iconLeft={<ClipIcon />} title="Clip" content="Clip" />
      <ActionItem iconLeft={<SaveIcon />} title="Save" content="Save" />
      <ActionItem iconLeft={<SettingsIcon />} />
    </div>
  );
};

ActionsWatchVideo.propTypes = {};

export default ActionsWatchVideo;
