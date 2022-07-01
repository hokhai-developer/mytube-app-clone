import React, { useContext, useEffect } from 'react';
import classNames from 'classnames/bind';
import Header from '~/layouts/components/Header';
import SideBar from '~/layouts/components/SideBar';
import { Outlet } from 'react-router-dom';
import styles from './WatchVideoLayout.module.scss';
import { ToggleSideBarContext } from '~/context/ToggleSideBarProvider';

const cx = classNames.bind(styles);

const WatchVideoLayout = () => {
  const toggleSideBar = useContext(ToggleSideBarContext);
  useEffect(() => {
    toggleSideBar.toggle(true);
  }, []);
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <Header />

        <div className={cx('content')}>
          <div
            className={cx('module', {
              full: !toggleSideBar.value,
            })}
            onClick={() => {
              toggleSideBar.toggle();
            }}
          >
            <SideBar />
          </div>
          <div className={cx('out-let')}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchVideoLayout;
