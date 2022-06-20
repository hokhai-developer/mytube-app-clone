import React from 'react';
import classNames from 'classnames/bind';
import Header from '~/layouts/components/Header';
import SideBar from '~/layouts/components/SideBar';
import { Outlet } from 'react-router-dom';
import styles from './MainLayout.module.scss';

const cx = classNames.bind(styles);

const MainLayout = () => {
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
