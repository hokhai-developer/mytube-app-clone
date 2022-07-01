import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './SearchItem.module.scss';
import PropTypes from 'prop-types';
import Image from '~/components/Image';
import { SubscribedIcon } from '~/components/Icons';
import { SettingsIcon } from '../../../components/Icons/Icons';
import { useSelector } from 'react-redux';
import { subscriptionsSelector } from '~/redux/selector';
import { getChannel } from '~/services/channel';
import { getVideos } from '~/services/videos';
import numeral from 'numeral';
import moment from 'moment';

const cx = classNames.bind(styles);
const SearchItem = ({
  kind,
  channelId,
  videoId,
  channelTitle,
  title,
  description,
  publishedAt,
  thumbnails,
}) => {
  const [subscribe, setSubscribe] = useState(false);
  const [channel, setChannel] = useState({});
  const [videoCount, setVideoCount] = useState('');
  const [video, setVideo] = useState({});
  const subscriptions = useSelector(subscriptionsSelector);

  useEffect(() => {
    if (kind !== 'youtube#channel') return;
    const _subscribe = subscriptions.some((_channelId) => {
      return _channelId === channelId;
    });
    if (_subscribe) setSubscribe(true);
    const fetchChannel = async (options) => {
      const result = await getChannel(options);
      if (result && result.items) {
        const videoCount = result.items[0].statistics.videoCount;
        setVideoCount(videoCount);
      }
    };
    fetchChannel({
      key: 'AIzaSyA9Pm4YhmuhpMsRcrB82tkUIaG4UJ9cLr4',
      id: channelId,
      part: 'statistics',
    });
  }, [subscriptions.length]);

  useEffect(() => {
    if (kind !== 'youtube#video') return;

    const fetchChannel = async (options) => {
      const result = await getChannel(options);

      if (result && result.items) {
        const title = result.items[0].snippet.title;
        const thumbnails = {
          default: result.items[0].snippet.thumbnails.default.url,
          medium: result.items[0].snippet.thumbnails.medium.url,
          hight: result.items[0].snippet.thumbnails.high.url,
        };
        setChannel({
          title: title,
          thumbnails: thumbnails,
        });
      }
    };
    fetchChannel({
      key: 'AIzaSyA9Pm4YhmuhpMsRcrB82tkUIaG4UJ9cLr4',
      part: 'snippet',
      id: channelId,
    });

    const fetchVideo = async (options) => {
      const result = await getVideos(options);
      if (result && result.items) {
        const publishedAt = result.items[0].snippet.publishedAt;
        const tags = result.items[0].snippet.tags;
        const duration = result.items[0].contentDetails.duration;
        const viewCount = result.items[0].statistics.viewCount;
        setVideo({
          publishedAt,
          tags,
          duration,
          viewCount,
        });
      }
    };
    fetchVideo({
      id: videoId,
      part: 'snippet,contentDetails,statistics',
      key: 'AIzaSyA9Pm4YhmuhpMsRcrB82tkUIaG4UJ9cLr4',
      regionCode: 'VN',
    });
  }, []);

  return (
    <div
      className={cx('wrapper', {
        channel: kind === 'youtube#channel',
        playlist: kind === 'youtube#playlist',
        video: kind === 'youtube#video',
      })}
    >
      <div className={cx('item-left')}>
        <div className={cx('left-content')}>
          <Image
            src={thumbnails.high || thumbnails.medium || thumbnails.default}
            alt={title}
            className={
              kind === 'youtube#channel' ? cx('channel') : cx('playlist')
            }
          />
        </div>
        {kind === 'youtube#video' && (
          <span className={cx('duration')}>
            {moment
              .utc(moment.duration(video.duration).asSeconds() * 1000)
              .format('mm:ss')}
          </span>
        )}
      </div>
      <div className={cx('item-center')}>
        <h5 className={cx('channel-name')}>
          {kind === 'youtube#channel' ? channelTitle : title}
        </h5>
        {kind === 'youtube#channel' && (
          <p className={cx('video-count')}>{videoCount} videos</p>
        )}

        {kind === 'youtube#playlist' && (
          <p className={cx('views-date')}>{channelTitle}</p>
        )}
        {kind === 'youtube#video' && (
          <>
            <p className={cx('views-date')}>
              {numeral(video.viewCount).format('0.a')} •{' '}
              {moment(publishedAt).fromNow()}
            </p>
            {channel.title?.length > 0 && (
              <div className={cx('channel')}>
                <Image
                  className={cx('channel-avatar')}
                  alt={channel.title}
                  src={
                    channel.thumbnails.default ||
                    channel.thumbnails.medium ||
                    channel.thumbnails.high
                  }
                />
                <p className={cx('channel-title')}>{channel.title}</p>
              </div>
            )}
          </>
        )}
        <p className={cx('channel-desc')}>{description}</p>
        {kind === 'youtube#playlist' && (
          <p className={cx('view-full')}>View full playlist</p>
        )}
      </div>
      <div className={cx('item-right')}>
        {kind === 'youtube#channel' ? (
          <div className={cx('channel')}>
            <button
              className={cx('subscribe', {
                subscribed: subscribe,
              })}
            >
              SUBSCRIBE
            </button>
            {subscribe && (
              <div>
                <SubscribedIcon />
              </div>
            )}
          </div>
        ) : (
          <div className={cx('video')}>
            <SettingsIcon />
          </div>
        )}
      </div>
    </div>
  );
};

SearchItem.propTypes = {};

export default SearchItem;
