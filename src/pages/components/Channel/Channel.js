import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Channel.module.scss';
import Image from '~/components/Image';
import { NotificationsIcon } from '~/components/Icons';
import { getVideos } from '~/services/videos';
import { getChannel } from '~/services/channel';
import numeral from 'numeral';
import { useDispatch, useSelector } from 'react-redux';
import subscriptionsSlice from '~/redux/subscriptionsSlice';
import { subscriptionsSelector } from '~/redux/selector';
import Model from '~/components/Model';
import Subscribe from '~/components/Subscribe';

const cx = classNames.bind(styles);
const Channel = ({ className, videoId }) => {
  const [channelId, setChannelId] = useState('');
  const [channel, setChannel] = useState({});

  useEffect(() => {
    if (!videoId) return;
    const fetchVideoById = async (options) => {
      const result = await getVideos(options);
      if (result && result.items && result.items[0]) {
        const newChannelId = result.items[0].snippet.channelId;
        if (newChannelId) {
          setChannelId(newChannelId);
        }
      }
    };
    fetchVideoById({
      key: 'AIzaSyDJHWRuuyTuB6DZ6yXWwRbyEUXGssYE0sQ',
      part: 'snippet',
      id: videoId,
    });
  }, [videoId]);

  useEffect(() => {
    if (!channelId) return;
    const fetchChannelById = async (options) => {
      const result = await getChannel(options);
      if (result && result.items && result.items[0]) {
        const { id } = result.items[0];
        const { title, thumbnails } = result.items[0].snippet;
        const { hiddenSubscriberCount, subscriberCount } =
          result.items[0].statistics;

        let newSubscriberCount;
        if (!hiddenSubscriberCount && subscriberCount) {
          if (subscriberCount < 1000) {
            newSubscriberCount = subscriberCount;
          } else {
            newSubscriberCount = numeral(Number(subscriberCount)).format(
              '0.0a',
            );
          }
        }

        let newThumbnails = {
          default: thumbnails.default.url,
          medium: thumbnails.medium.url,
          high: thumbnails.high.url,
        };
        setChannel({
          channelId: id,
          title: title,
          hiddenSubscriberCount: hiddenSubscriberCount,
          subscriberCount: newSubscriberCount,
          thumbnails: newThumbnails,
        });
      }
    };
    fetchChannelById({
      key: 'AIzaSyDJHWRuuyTuB6DZ6yXWwRbyEUXGssYE0sQ',
      part: 'snippet,statistics',
      id: channelId,
    });
  }, [channelId]);

  return (
    <>
      {channel && (
        <div className={cx('wrapper', className)}>
          <div className={cx('channel-left')}>
            {channel.thumbnails && (
              <div className={cx('channel-thumb')}>
                <Image
                  src={
                    channel.thumbnails.default ||
                    channel.thumbnails.medium ||
                    channel.thumbnails.high
                  }
                  alt={channel.title}
                />
              </div>
            )}

            <div className={cx('channel')}>
              {channel.title && (
                <p className={cx('channel-name')}>{channel.title}</p>
              )}
              {!channel.hiddenSubscriberCount && (
                <p className={cx('channel-subscribers')}>
                  {channel.subscriberCount} subscribers
                </p>
              )}
            </div>
          </div>
          <Subscribe channelId={channelId} />
        </div>
      )}
    </>
  );
};

Channel.propTypes = {};

export default Channel;
