import React, { useState, useId } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './CreatePlaylist.module.scss';
import {
  ClearIcon,
  LocationIcon,
  UnlistedIcon,
  PrivateIcon,
} from '~/components/Icons';
import MenuSelect from './MenuSelect';
import { v4 as uuidv4 } from 'uuid';
import { ArrowDowIcon, ArrowUpIcon } from '../../Icons';

const MENU_SELECT = {
  type: 'select',
  id: uuidv4(),
  children: [
    {
      type: 'select',
      id: uuidv4(),
      iconLeft: <LocationIcon />,
      title: 'Public',
      desc: 'Anyone can search fro and view',
      value: 'public',
    },
    {
      type: 'select',
      id: uuidv4(),
      iconLeft: <UnlistedIcon />,
      title: 'Unlisted',
      desc: 'Anyone with the link can view',
      value: 'unlisted',
    },
    {
      type: 'select',
      id: uuidv4(),
      iconLeft: <PrivateIcon />,
      title: 'Private',
      desc: 'Only you can view',
      value: 'private',
    },
  ],
};
const cx = classNames.bind(styles);
const CreatePlaylist = (props) => {
  const [showCreate, setShowCreate] = useState(false);
  const [showMenuSelect, setShowMenuSelect] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [privacy, setPrivacy] = useState('');
  const inputId = useId();

  return (
    <div className={cx('wrapper')}>
      {showCreate ? (
        <div className={cx('create-form')}>
          <div className={cx('form-group')}>
            <label htmlFor={inputId + 'name'} className={cx('label-name')}>
              Name:
            </label>
            <input
              value={inputValue}
              onChange={(e) => {
                if (
                  e.target.value.startsWith(' ') ||
                  e.target.value.length > 150
                )
                  return;
                setInputValue(e.target.value);
              }}
              type="text"
              placeholder="Enter playlist name..."
              id={inputId + 'name'}
              className={cx('input-name')}
            />
            <div className={cx('message')}>
              <p className={cx('warning')}>
                {inputValue.length === 150
                  ? 'Tên của playlist đạt tới giới hạn độ dài.'
                  : ''}
              </p>
              <p
                className={cx('length', {
                  warning: inputValue.length === 150,
                })}
              >
                {inputValue.length}/150
              </p>
            </div>
          </div>
          <div className={cx('form-group')}>
            <label className={cx('label-name')}>privacy</label>
            <MenuSelect
              data={MENU_SELECT}
              setPrivacy={setPrivacy}
              show={showMenuSelect}
              setShow={setShowMenuSelect}
            >
              <div
                className={cx('selected')}
                onClick={() => setShowMenuSelect(!showMenuSelect)}
              >
                <p className={cx('selected-value')}>
                  {privacy ? privacy : 'Choose privacy'}
                </p>
                <button className={cx('selected-btn')}>
                  {showMenuSelect ? <ArrowUpIcon /> : <ArrowDowIcon />}
                </button>
              </div>
            </MenuSelect>
          </div>
          <button className={cx('btn-new-list')}>CREATE</button>
        </div>
      ) : (
        <div
          className={cx('create-new-playlist')}
          onClick={(e) => {
            e.preventDefault();
            setShowCreate(true);
          }}
        >
          <button className={cx('create-btn')}>
            <ClearIcon className={cx('rotate')} />
          </button>
          <p className={cx('title')}>Create new playlist</p>
        </div>
      )}
    </div>
  );
};

CreatePlaylist.propTypes = {};

export default CreatePlaylist;
