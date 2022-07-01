import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Iframe.module.scss';

const cx = classNames.bind(styles);
const Iframe = ({ className, videoId, title }) => {
  return (
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className={cx('iframe', className)}
    ></iframe>
  );
};

Iframe.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  videoId: PropTypes.string,
};

export default Iframe;
