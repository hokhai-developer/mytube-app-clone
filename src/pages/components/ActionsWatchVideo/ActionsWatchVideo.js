import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ActionsWatchVideo.module.scss';
import PropTypes from 'prop-types';

import { v4 as uuidv4 } from 'uuid';
import Menu from '~/components/Menu';

import {
  AddToQueueIcon,
  HistoryIcon,
  LikeIcon,
  DisLikeIcon,
  ShareIcon,
  ClipIcon,
  SaveIcon,
  SettingsIcon,
} from '~/components/Icons';
import ActionItem from './ActionItem';

const MENU_SETTINGS = {
  type: 'settingsVideoItem',
  id: uuidv4(),
  values: [
    {
      id: uuidv4(),
      type: 'settingsVideoItem',
      leftIcon: <AddToQueueIcon />,
      title: 'Add to queue',
    },

    {
      id: uuidv4(),
      type: 'settingsVideoItem',
      leftIcon: <HistoryIcon />,
      title: 'Save to Watch later',
    },
  ],
};

const cx = classNames.bind(styles);
const ActionsWatchVideo = ({ className, likeCount }) => {
  const [showMenuSetting, setShowMenuSetting] = useState(false);
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
      <Menu
        data={MENU_SETTINGS}
        showMenu={showMenuSetting}
        setShowMenu={setShowMenuSetting}
        delay={[200, 800]}
        offset={[30, 0]}
        placement="left"
      >
        <div
          onClick={() => setShowMenuSetting(!showMenuSetting)}
          className={cx('btn-setting')}
        >
          <SettingsIcon className={cx('icon-rotate')} />
        </div>
      </Menu>
    </div>
  );
};

ActionsWatchVideo.propTypes = {};

export default ActionsWatchVideo;
