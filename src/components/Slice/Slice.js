import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Slice.module.scss';
import { PreviousIcon, NextIcon } from '~/components/Icons';
import useWindowResize from '~/hooks/useWindowResize';

const cx = classNames.bind(styles);
const Slice = ({ children, translateX = 200 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ratio, setRatio] = useState(undefined);
  const windowResize = useWindowResize();

  const wrapperRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    const containerWidth = containerRef.current.offsetWidth;
    const wrapperWidth = wrapperRef.current.offsetWidth;
    setRatio(Math.ceil((containerWidth - wrapperWidth) / translateX));
  }, [windowResize.windowWidth]);

  const handleNext = () => {
    const container = containerRef.current;
    const wrapperWidth = wrapperRef.current;
    let translate = -translateX * (currentIndex + 1);

    if (currentIndex + 1 === ratio) {
      translate = -(container.offsetWidth - wrapperWidth.offsetWidth + 16);
      container.style.transform = `translateX(${translate}px)`;
    } else {
      container.style.transform = `translateX(${translate}px)`;
    }

    setCurrentIndex(currentIndex + 1);
  };

  const handlePrev = () => {
    const container = containerRef.current;
    let translate = -translateX * (currentIndex - 1);
    container.style.transform = `translateX(${translate}px)`;
    setCurrentIndex(currentIndex - 1);
  };

  return (
    <div className={cx('wrapper')} ref={wrapperRef}>
      {currentIndex !== 0 && (
        <div className={cx('btn', 'btn-prev')} onClick={handlePrev}>
          <PreviousIcon />
        </div>
      )}
      {currentIndex !== ratio && (
        <div className={cx('btn', 'btn-next')} onClick={handleNext}>
          <NextIcon />
        </div>
      )}
      <div className={cx('container')} ref={containerRef}>
        {children}
      </div>
    </div>
  );
};

Slice.propTypes = {
  children: PropTypes.node,
  translateX: PropTypes.number,
};

export default Slice;
