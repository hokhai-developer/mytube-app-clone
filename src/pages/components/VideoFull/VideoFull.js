import classNames from 'classnames/bind';
import moment from 'moment';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import { useEffect, useState } from 'react';
import Iframe from '../Iframe';
import styles from './VideoFull.module.scss';
import { getVideos } from '~/services/videos';

const cx = classNames.bind(styles);
const VideoFull = ({ videoId }) => {
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState([]);
  const [publishedAt, setPublishedAt] = useState('');
  const [lessDescription, setLessDescription] = useState('');
  const [moreDescription, setMoreDescription] = useState('');
  const [viewCount, setViewCount] = useState('');
  const [showMore, setShowMore] = useState(false);
  useEffect(() => {
    const fetchVideoById = async (options) => {
      const result = await getVideos(options);
      if (result && result.items) {
        const { tags, title, publishedAt, description } =
          result.items[0].snippet;
        const { viewCount } = result.items[0].statistics;
        let index = description.search('https://');
        let lessDescription = description.slice(0, index);
        if (lessDescription.length > 150) {
          lessDescription = lessDescription.slice(0, 150);
        }
        setTitle(title);
        setTags(tags);
        setPublishedAt(publishedAt);
        setViewCount(viewCount);
        setMoreDescription(description);

        setLessDescription(lessDescription);
      }
    };
    fetchVideoById({
      key: 'AIzaSyDJHWRuuyTuB6DZ6yXWwRbyEUXGssYE0sQ',
      part: 'snippet,statistics',
      id: videoId,
      regionCode: 'VN',
    });
  }, [videoId]);
  return (
    <div className={cx('wrapper')}>
      <Iframe
        videoId={videoId}
        title={title}
        className={cx('iframe-location')}
      />
      {tags && tags.length > 0 && (
        <p className={cx('tags')}>
          {tags.map((tag, index) => {
            if (index < 10) {
              return (
                <span
                  key={`${tag} + ${index} + ${Math.floor(
                    Math.random() * 1000,
                  )}`}
                  className={cx('tag')}
                >
                  #{tag}
                </span>
              );
            }
          })}
        </p>
      )}
      <h5 className={cx('title')}>{title}</h5>
      <p
        className={cx('desc', {
          'show-less': !showMore,
        })}
      >
        <span className={cx('text-bold')}>
          {numeral(viewCount).format('0,0')} views{' '}
          {moment(publishedAt).format('MMMM, DD, YYYY')}
        </span>{' '}
        {showMore ? moreDescription : lessDescription}
        <span
          className={cx('show-more')}
          onClick={() => setShowMore(!showMore)}
        >
          {!showMore ? '...more' : 'Show less'}
        </span>
      </p>
    </div>
  );
};

VideoFull.propTypes = {
  videoId: PropTypes.string,
};

export default VideoFull;
