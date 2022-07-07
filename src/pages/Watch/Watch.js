import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import styles from './Watch.module.scss';
import { SortByIcon } from '~/components/Icons';
import ActionsWatchVideo from '../components/ActionsWatchVideo';
import Channel from '../components/Channel';
import Comment from '../components/Comment';
import PopupComment from '../components/PopupComment';
import { useParams } from 'react-router-dom';
import Slice from '~/components/Slice';
import KindPlayList from '../components/KindPlayList';
import KindVideo from '../components/KindVideo/KindVideo';
import VideoFull from '../components/VideoFull';
import { getVideos } from '~/services/videos';

const cx = classNames.bind(styles);
const Watch = (props) => {
  const [videoId, setVideoId] = useState('');
  const [commentCount, setCommentCount] = useState();

  const param = useParams();

  useEffect(() => {
    if (!param.id) return;

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
      id: param.id,
    });

    setVideoId(param.id);
  }, [param.id]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('watch-left')}>
        <VideoFull videoId={videoId} />
        <ActionsWatchVideo videoId={videoId} />
        <Channel videoId={videoId} />
        <PopupComment videoId={videoId} />
        <div className={cx('contain')}>
          <div className={cx('total-comment')}>{commentCount} comments</div>
          <button className={cx('sort-by')}>
            <SortByIcon />
            <p className={cx('text')}>SORT BY</p>
          </button>
        </div>
        <Comment videoId={videoId} />
      </div>

      <div className={cx('watch-right')}>
        <div className={cx('category')}>
          <Slice translateX={200}>
            <span className={cx('chip')}>chips</span>
            <span className={cx('chip')}>chips</span>
            <span className={cx('chip')}>chips</span>
            <span className={cx('chip')}>chips</span>
            <span className={cx('chip')}>chips</span>
            <span className={cx('chip')}>chips</span>
            <span className={cx('chip')}>chips</span>
            <span className={cx('chip')}>chips</span>
            <span className={cx('chip')}>chips</span>
            <span className={cx('chip')}>chips</span>
          </Slice>
        </div>
        <div className={cx('playlist')}>
          <KindVideo />
          <KindPlayList />
        </div>
      </div>
    </div>
  );
};

Watch.propTypes = {};

export default Watch;
