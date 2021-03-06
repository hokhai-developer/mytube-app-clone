import React, { useEffect, useContext } from 'react';
import classNames from 'classnames/bind';
import Header from '~/layouts/components/Header';
import SideBar from '~/layouts/components/SideBar';
import { Outlet } from 'react-router-dom';
import styles from './MainLayout.module.scss';
import { ToggleSideBarContext } from '~/context/ToggleSideBarProvider';

const cx = classNames.bind(styles);

const MainLayout = () => {
  const toggleSideBar = useContext(ToggleSideBarContext);
  useEffect(() => {
    if (toggleSideBar.value) return;
    toggleSideBar.toggle(false);
  }, []);
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <Header />
        <div className={cx('body')}>
          <SideBar />
          <div className={cx('content')}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
