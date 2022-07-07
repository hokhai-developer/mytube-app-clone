import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Subscribe.module.scss';
import Image from '~/components/Image';
import { NotificationsIcon } from '~/components/Icons';
import { getVideos } from '~/services/videos';
import { getChannel } from '~/services/channel';
import numeral from 'numeral';
import { useDispatch, useSelector } from 'react-redux';
import subscriptionsSlice from '~/redux/subscriptionsSlice';
import { subscriptionsSelector } from '~/redux/selector';
import ModelUnSubscribe from './ModelUnSubscribe';
import Model from '~/components/Model';

const cx = classNames.bind(styles);
const Subscribe = ({ channelId }) => {
  const [subscribed, setSubscribed] = useState(false);
  const [channel, setChannel] = useState({});
  const [showModelUnSubscribe, setShowModelUnSubscribe] = useState(false);

  const dispatch = useDispatch();
  const subscriptions = useSelector(subscriptionsSelector);

  useEffect(() => {
    if (!channelId) return;
    const fetchChannelById = async (options) => {
      const result = await getChannel(options);
      if (result && result.items && result.items[0]) {
        const { id } = result.items[0];
        const { title, thumbnails } = result.items[0].snippet;

        setChannel({
          id: id,
          channelId: id,
          title: title,
          type: 'subscriptions',
          thumbnails: [
            thumbnails.default.url,
            thumbnails.medium.url,
            thumbnails.high.url,
          ],
          path: `channel/${id}`,
        });
      }
    };

    fetchChannelById({
      key: 'AIzaSyDJHWRuuyTuB6DZ6yXWwRbyEUXGssYE0sQ',
      part: 'snippet,statistics',
      id: channelId,
    });

    if (
      subscriptions &&
      subscriptions.values &&
      subscriptions.values.length > 0
    ) {
      const isSubscribed = subscriptions.values.some((value) => {
        return value.channelId === channelId;
      });

      if (isSubscribed) {
        setSubscribed(true);
      }
    }
  }, [channelId]);

  const handleSubscribed = () => {
    if (subscribed) {
      // show model unsubscribed
      setShowModelUnSubscribe(true);
    } else {
      //add subscribed
      dispatch(subscriptionsSlice.actions.add(channel));
      setSubscribed(true);
    }
  };

  function unSubscribed() {
    dispatch(
      subscriptionsSlice.actions.remove({
        channelId,
      }),
    );
    setSubscribed(false);
  }

  return (
    <div className={cx('wrapper')}>
      <button
        className={cx('btn', {
          subscribed: subscribed,
        })}
        onClick={handleSubscribed}
      >
        {subscribed ? 'SUBSCRIBED' : 'SUBSCRIBE'}
      </button>

      {subscribed && (
        <button className={cx('btn-notify')}>
          <NotificationsIcon />
        </button>
      )}

      {showModelUnSubscribe && (
        <Model setShowModel={setShowModelUnSubscribe}>
          <ModelUnSubscribe
            setShowModelUnSubscribe={setShowModelUnSubscribe}
            unSubscribed={unSubscribed}
          />
        </Model>
      )}
    </div>
  );
};

Subscribe.propTypes = {};

export default Subscribe;
