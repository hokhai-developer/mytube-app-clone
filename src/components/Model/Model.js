import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Model.module.scss';

const cx = classNames.bind(styles);
const Model = ({ children, className, setShowModel }) => {
  const handleCLickModel = (e) => {
    e.stopPropagation();
    setShowModel(false);
  };
  return (
    <div
      className={cx('wrapper', className)}
      onClick={(e) => handleCLickModel(e)}
    >
      {children}
    </div>
  );
};

Model.propTypes = {};

export default Model;
