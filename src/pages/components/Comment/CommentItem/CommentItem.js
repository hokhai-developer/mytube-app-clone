import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './CommentItem.module.scss';
import Image from '~/components/Image';
import CommentAction from '../CommentAction';
import { SettingsIcon } from '~/components/Icons';

const cx = classNames.bind(styles);
const CommentItem = ({ photoURL, children }) => {
  return (
    <div className={cx('comment-item')}>
      <div className={cx('channel-avatar')}>
        <Image src="https://picsum.photos/200" />
      </div>
      <div className={cx('center')}>
        <p className={cx('channel-name')}>
          Channel name <span className={cx('publish')}>2 days ago</span>
        </p>

        <p className={cx('comment-title')}>
          Mik chx xem đến tập Lù sở hữu sức mạnh thần mặt trời, nên mik mún hỏi
          là nếu z thì Lù còn có thể co giản như cao su đc k
        </p>
        <CommentAction />
        {children}
      </div>
      <button className={cx('btn-setting')}>
        <SettingsIcon />
      </button>
    </div>
  );
};

CommentItem.propTypes = {
  children: PropTypes.node,
};

export default CommentItem;
