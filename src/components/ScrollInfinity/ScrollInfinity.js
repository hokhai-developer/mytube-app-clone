import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ScrollInfinity.module.scss';
import { useSelector } from 'react-redux';
import { categorySelector } from '~/redux/selector';

const cx = classNames.bind(styles);
const ScrollInfinity = ({
  children,
  className,
  nextFunctions = () => {
    console.log('more load data');
  },
  maxLength,
  loading,
  endPage,
  stop = false,
}) => {
  const [addMore, setAddMore] = useState(false);
  const pageEnd = useRef();
  const category = useSelector(categorySelector);

  useEffect(() => {
    if (addMore && !stop) {
      nextFunctions();
    }
  }, [addMore]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries && entries[0].isIntersecting) {
          setAddMore(true);
        } else {
          if (stop) observer.unobserve(pageEnd.current);
          setAddMore(false);
        }
      },
      { threshold: 1 },
    );
    observer.observe(pageEnd.current);
  }, [maxLength, stop]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx(className)}>{children}</div>
      <div ref={pageEnd}></div>
      {addMore && !stop && <div>{loading ? loading : ' ....loading'}</div>}
      {stop && <div>{endPage ? endPage : 'page end..........'}</div>}
    </div>
  );
};

ScrollInfinity.propTypes = {};

export default ScrollInfinity;
