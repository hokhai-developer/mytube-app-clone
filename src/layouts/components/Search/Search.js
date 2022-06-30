import React, { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { SearchIcon, ClearIcon } from '~/components/Icons';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);
const Search = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [showSearchIcon, setShowSearchIcon] = useState(false);
  const [showClearBtn, setShowClearBtn] = useState(false);
  const inputRef = useRef();
  const searchBtnRef = useRef();
  const navigate = useNavigate();

  const handleClick = () => {
    if (inputValue.trim().length === 0) return;
    navigate(`results/${inputValue}`);
  };

  return (
    <div className={cx('wrapper')}>
      {showSearchIcon && (
        <button className={cx('search-icon')}>
          <SearchIcon className={cx('icon')} />
        </button>
      )}

      <input
        type="text"
        placeholder="Search"
        className={cx('search-input')}
        ref={inputRef}
        value={inputValue}
        onChange={(e) => {
          if (e.target.value.startsWith(' ')) {
            return;
          }
          setInputValue(e.target.value);
          if (e.target.value.trim().length > 0) {
            setShowClearBtn(true);
          } else {
            setShowClearBtn(false);
          }
        }}
        onFocus={() => setShowSearchIcon(true)}
        onBlur={(e) => {
          if (e.target.value.trim().length > 0) {
            setShowSearchIcon(true);
          } else {
            setShowSearchIcon(false);
          }
        }}
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            searchBtnRef.current.click();
          }
        }}
      />
      {showClearBtn && (
        <button
          className={cx('clear-btn')}
          onClick={() => {
            setInputValue('');
            inputRef.current.focus();
          }}
        >
          <ClearIcon />
        </button>
      )}
      <button
        className={cx('search-btn')}
        onClick={handleClick}
        ref={searchBtnRef}
      >
        <SearchIcon />
      </button>
    </div>
  );
};

Search.propTypes = {};

export default Search;
