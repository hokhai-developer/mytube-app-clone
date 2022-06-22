import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Categories.module.scss';

const chips = [
  'All',
  'JavaScript',
  'Website',
  'Mixes',
  'Gaming',
  'Music',
  'Live',
  'League of Legends Champions Ship',
  'Monkey D.Luffy',
  'Fish',
  'Humans',
  'Eatings',
  'Super hero movies',
  'Electronic music',
  'Comedy',
  'League of Legends Champions Ship',
  'Monkey D.Luffy',
  'Fish',
  'Humans',
  'Eatings',
  'Super hero movies',
  'Electronic music',
  'Comedy',
];

const cx = classNames.bind(styles);
const Categories = (props) => {
  const [active, setActive] = useState(0);
  const handleClick = (index) => {
    setActive(index);
  };
  return (
    <div className={cx('top-chips')}>
      {chips.map((chip, index) => {
        return (
          <span
            className={cx('chip', {
              active: active === index,
            })}
            key={index}
            onClick={() => handleClick(index)}
          >
            {chip}
          </span>
        );
      })}
    </div>
  );
};

Categories.propTypes = {};

export default Categories;
