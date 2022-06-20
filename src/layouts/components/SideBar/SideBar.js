import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import MenuSideBar from '~/layouts/components/SideBar/MenuSideBar';
import ItemSideBar from '~/layouts/components/SideBar/ItemSidebar';
import {
  HomeIcon,
  ExploreIcon,
  SubscriptionsIcon,
  ShortsIcon,
} from '~/components/Icons';

const cx = classNames.bind(styles);
const SideBar = (props) => {
  return (
    <aside className={cx('wrapper')}>
      <MenuSideBar>
        <ItemSideBar iconLeft={<HomeIcon />} title="Home" path="/" />
        <ItemSideBar
          iconLeft={<ExploreIcon />}
          title="Explore"
          path="/explore"
        />
        <ItemSideBar iconLeft={<ShortsIcon />} title="Shorts" path="/shorts" />
        <ItemSideBar
          iconLeft={<SubscriptionsIcon />}
          title="Subscriptions"
          path="/subscriptions"
        />
      </MenuSideBar>

      <footer className={cx('footer')}>
        <span>© 2022 Google LLC</span>
      </footer>
    </aside>
  );
};

SideBar.propTypes = {};

export default SideBar;
