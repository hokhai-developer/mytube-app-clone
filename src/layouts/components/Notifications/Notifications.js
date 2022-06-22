import React from 'react';
import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Notifications.module.scss';
import ItemNotify from './ItemNotify';
import { Settings2Icon } from '~/components/Icons';

const cx = classNames.bind(styles);
const Notifications = ({
  children,
  placement = 'bottom',
  delay = [100, 400],
  setShow,
  show,
  offset,
}) => {
  return (
    <div>
      <Tippy
        placement={placement}
        interactive
        visible={show}
        delay={delay}
        zIndex={950}
        onClickOutside={() => setShow(!show)}
        offset={offset}
        render={(attrs) => (
          <div className={cx('search-box')} tabIndex="-1" {...attrs}>
            <div className={cx('wrapper-list')}>
              <div className={cx('header-list')}>
                <h5 className={cx('title')}>Notifications</h5>
                <button className={cx('btn-icon')}>
                  <Settings2Icon />
                </button>
              </div>
              <div className={cx('list-body')}>
                <ItemNotify />
                <ItemNotify />
                <ItemNotify />
                <ItemNotify />
                <ItemNotify />
                <ItemNotify />
                <ItemNotify />
              </div>
            </div>
          </div>
        )}
      >
        {children}
      </Tippy>
    </div>
  );
};

Notifications.propTypes = {};

export default Notifications;
