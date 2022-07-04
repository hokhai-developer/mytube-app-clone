import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './ActionsWatchVideo.module.scss';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import { getVideos } from '~/services/videos';

import { v4 as uuidv4 } from 'uuid';
import Menu from '~/components/Menu';
import ShareSocials from '~/components/ShareSocials';

import {
  LikeIcon,
  DisLikeIcon,
  ShareIcon,
  ClipIcon,
  SaveIcon,
  SettingsIcon,
  ReportIcon,
  TranscriptIcon,
} from '~/components/Icons';
import ActionItem from './ActionItem';
import SavePlaylist from '~/components/SavePlaylist';

const MENU_SETTINGS = {
  type: 'settingsVideoItem',
  id: uuidv4(),
  values: [
    {
      id: uuidv4(),
      type: 'settingsVideoItem',
      leftIcon: <ReportIcon />,
      title: 'Report',
    },

    {
      id: uuidv4(),
      type: 'settingsVideoItem',
      leftIcon: <TranscriptIcon />,
      title: 'Show transcript',
    },
  ],
};

const cx = classNames.bind(styles);
const ActionsWatchVideo = ({ className, videoId }) => {
  const [showMenuSetting, setShowMenuSetting] = useState(false);
  const [likeCount, setLikeCount] = useState();
  useEffect(() => {
    const fetchVideoById = async (options) => {
      const result = await getVideos(options);
      if (result && result.items) {
        let { likeCount } = result.items[0].statistics;
        if (Number(likeCount) >= 1000) {
          likeCount = numeral(Number(likeCount)).format('0.0a');
        }
        setLikeCount(likeCount);
      }
    };
    fetchVideoById({
      key: 'AIzaSyDJHWRuuyTuB6DZ6yXWwRbyEUXGssYE0sQ',
      part: 'statistics',
      id: videoId,
      regionCode: 'VN',
    });
  }, [videoId]);

  return (
    <div className={cx('wrapper', className)}>
      <ActionItem
        iconLeft={<LikeIcon />}
        title={likeCount}
        content="I like this"
        toggle
      />
      <ActionItem
        iconLeft={<DisLikeIcon />}
        title="DisLike"
        content="I dislike this"
        toggle
      />
      <ActionItem
        iconLeft={<ShareIcon />}
        title="Share"
        content="Share"
        ModelContent={ShareSocials}
      />
      <ActionItem iconLeft={<ClipIcon />} title="Clip" content="Clip" />
      <ActionItem
        iconLeft={<SaveIcon />}
        title="Save"
        content="Save"
        ModelContent={SavePlaylist}
      />
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
