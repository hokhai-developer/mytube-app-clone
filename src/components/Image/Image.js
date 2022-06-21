import React, { useState, forwardRef } from 'react';
import Images from '~/assets/Images';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Image.module.scss';

const cx = classNames.bind(styles);
const Image = forwardRef(({ src, alt, className, fallback }, ref) => {
  const [srcImg, setSrcImage] = useState(src);
  const handleError = () => {
    let srcImg = fallback ? fallback : Images.noImage;
    setSrcImage(srcImg);
  };
  return (
    <div className={cx('wrapper', className)}>
      <img
        src={srcImg}
        alt={alt}
        onError={handleError}
        className={cx('image')}
      />
    </div>
  );
});

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  fallback: PropTypes.string,
};

export default Image;
