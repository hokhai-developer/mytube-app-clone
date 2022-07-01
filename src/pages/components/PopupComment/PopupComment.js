import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styled from './PopupComment.module.scss';
import { NextIcon } from '~/components/Icons';
import Image from '~/components/Image';

const cx = classNames.bind(styled);
const PopupComment = (props) => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('total-comments')}>
        <p className={cx('title')}>Comments</p>
        <p className={cx('count')}>1234</p>
      </div>
      <div className={cx('user-comment')}>
        <div className={cx('user-avatar')}>
          <Image src="https://picsum.photos/200" />
        </div>
        <p className={cx('comment')}>
          Tôi là người Hàn Quốc. Rap của các rapper Việt Nam thật sự rất xuất
          sắc. Rap Việt Nam thật sự rất thú vị. Xin lỗi vì nói chuyện bằng máy
          dịch thuật
        </p>
      </div>
      <button className={cx('btn-popup')}>
        <NextIcon />
      </button>
    </div>
  );
};

PopupComment.propTypes = {};

export default PopupComment;
