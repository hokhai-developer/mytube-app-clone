import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './SearchPage.module.scss';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { Search } from '~/services/search';
import SearchItem from '~/pages/components/SearchItem';
import ScrollInfinity from '~/components/ScrollInfinity';

const cx = classNames.bind(styles);
const SearchPage = (props) => {
  const [searchList, setSearchList] = useState([]);
  const [nextPageToken, setNextPageToken] = useState('');
  const searchValue = useParams();

  const fetchSearch = async (options) => {
    const results = await Search(options);
    if (results && results.items) {
      const nextPageToken = results.nextPageToken;
      const listItem = results.items.map((item) => {
        return {
          kind: item.id.kind,
          videoId: item.id.videoId,
          channelId: item.snippet.channelId,
          channelTitle: item.snippet.channelTitle,
          title: item.snippet.title,
          description: item.snippet.description,
          publishedAt: item.snippet.publishedAt,
          thumbnails: {
            default: item.snippet.thumbnails.default.url,
            medium: item.snippet.thumbnails.medium.url,
            high: item.snippet.thumbnails.high.url,
          },
        };
      });
      setNextPageToken(nextPageToken);
      setSearchList((prev) => [...prev, ...listItem]);
    }
  };

  useEffect(() => {
    fetchSearch({
      q: searchValue.searchValue,
      part: 'snippet',
      maxResults: 12,
      key: 'AIzaSyA9Pm4YhmuhpMsRcrB82tkUIaG4UJ9cLr4',
      regionCode: 'VN',
    });
  }, [searchValue.searchValue]);

  function fetchMoreSearch() {
    fetchSearch({
      q: searchValue.searchValue,
      part: 'snippet',
      maxResults: 12,
      key: 'AIzaSyA9Pm4YhmuhpMsRcrB82tkUIaG4UJ9cLr4',
      regionCode: 'VN',
      pageToken: nextPageToken,
    });
  }

  return (
    <div className={cx('wrapper')}>
      {searchList.length > 0 ? (
        <ScrollInfinity
          nextFunctions={fetchMoreSearch}
          maxLength={searchList.length}
          className={cx('scroll-infinity')}
          stop={searchList.length > 59 || !nextPageToken}
        >
          {searchList.map((item) => {
            return (
              <SearchItem
                key={item.videoId + item.channelId + item.title + Math.random()}
                kind={item.kind}
                videoId={item.videoId}
                channelId={item.channelId}
                channelTitle={item.channelTitle}
                title={item.title}
                description={item.description}
                publishedAt={item.publishedAt}
                thumbnails={item.thumbnails}
              />
            );
          })}
        </ScrollInfinity>
      ) : (
        'Sorry.... '
      )}
    </div>
  );
};

SearchPage.propTypes = {};

export default SearchPage;
