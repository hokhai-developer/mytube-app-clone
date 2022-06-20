import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import MenuSideBar from '~/layouts/components/SideBar/MenuSideBar';
import ItemSideBar from '~/layouts/components/SideBar/ItemSidebar';
import {
  ShowMoreIcon,
  ShowLessIcon,
  PlaylistIcon,
  LiveIcon,
} from '~/components/Icons';
import { MENU_DATA_POPULAR } from './DataMenu';
import { MENU_MORE_FROM_YOUTUBE } from './DataMenu';
import Image from '~/components/Image';
import Images from '~/assets/Images';

const PLAYLIST = [
  {
    id: uuidv4(),
    title: 'music',
    iconLeft: <PlaylistIcon />,
    path: '/playlist/list',
  },
  {
    id: uuidv4(),
    title: 'Javascript',
    iconLeft: <PlaylistIcon />,
    path: '/playlist/list',
  },
  {
    id: uuidv4(),
    title: 'ReactJS',
    iconLeft: <PlaylistIcon />,
    path: '/playlist/list',
  },
  {
    id: uuidv4(),
    title: 'HTML & CSS',
    iconLeft: <PlaylistIcon />,
    path: '/playlist/list',
  },
];
const SUB_CHANNEL = [
  {
    id: uuidv4(),
    title: 'F8',
    iconLeft: <Image src={Images.noImage} alt="channel name" />,
    iconRight: <LiveIcon />,
    path: '/channel',
  },
  {
    id: uuidv4(),
    title: 'Hoi Dan IT',
    iconLeft: <Image src={Images.noImage} alt="channel name" />,
    iconRight: null,
    path: '/channel',
  },
  {
    id: uuidv4(),
    title: 'Easy Frontend',
    iconLeft: <Image src={Images.noImage} alt="channel name" />,
    iconRight: <LiveIcon />,
    path: '/channel',
  },
  {
    id: uuidv4(),
    title: 'Henry dev web',
    iconLeft: <Image src={Images.noImage} alt="channel name" />,
    iconRight: null,
    path: '/channel',
  },
  {
    id: uuidv4(),
    title: 'Hole Text',
    iconLeft: <Image src={Images.noImage} alt="channel name" />,
    iconRight: null,
    path: '/channel',
  },
  {
    id: uuidv4(),
    title: 'evondev',
    iconLeft: <Image src={Images.noImage} alt="channel name" />,
    iconRight: <LiveIcon />,
    path: '/channel',
  },
  {
    id: uuidv4(),
    title: 'Online Tutorials',
    iconLeft: <Image src={Images.noImage} alt="channel name" />,
    iconRight: null,
    path: '/channel',
  },
  {
    id: uuidv4(),
    title: 'F8',
    iconLeft: <Image src={Images.noImage} alt="channel name" />,
    iconRight: <LiveIcon />,
    path: '/channel',
  },
  {
    id: uuidv4(),
    title: 'Hoi Dan IT',
    iconLeft: <Image src={Images.noImage} alt="channel name" />,
    iconRight: null,
    path: '/channel',
  },
  {
    id: uuidv4(),
    title: 'Easy Frontend',
    iconLeft: <Image src={Images.noImage} alt="channel name" />,
    iconRight: <LiveIcon />,
    path: '/channel',
  },
  {
    id: uuidv4(),
    title: 'Henry dev web',
    iconLeft: <Image src={Images.noImage} alt="channel name" />,
    iconRight: null,
    path: '/channel',
  },
  {
    id: uuidv4(),
    title: 'Hole Text',
    iconLeft: <Image src={Images.noImage} alt="channel name" />,
    iconRight: null,
    path: '/channel',
  },
  {
    id: uuidv4(),
    title: 'evondev',
    iconLeft: <Image src={Images.noImage} alt="channel name" />,
    iconRight: <LiveIcon />,
    path: '/channel',
  },
  {
    id: uuidv4(),
    title: 'Online Tutorials',
    iconLeft: <Image src={Images.noImage} alt="channel name" />,
    iconRight: null,
    path: '/channel',
  },
];

const cx = classNames.bind(styles);
const SideBar = (props) => {
  const [showMorePopular, setShowMorePopular] = useState(true);
  const [showMoreSubscriptions, setShowMoreSubscriptions] = useState(true);
  const [playlist, setPlaylist] = useState(PLAYLIST);

  const popularData = showMorePopular
    ? [...MENU_DATA_POPULAR]
    : [...MENU_DATA_POPULAR, ...playlist];
  const subscriptionsData = showMoreSubscriptions
    ? [...SUB_CHANNEL].splice(0, 7)
    : SUB_CHANNEL;

  //popular
  const handleShowPopular = () => {
    setShowMorePopular(!showMorePopular);
  };

  //subscriptions
  const handleShowSubscriptions = () => {
    setShowMoreSubscriptions(!showMoreSubscriptions);
  };

  return (
    <aside className={cx('wrapper')}>
      {/* //popular menu */}
      {popularData && (
        <section className={cx('popular')}>
          <MenuSideBar>
            {popularData.map((item) => {
              return (
                <ItemSideBar
                  type="popular"
                  target={item.target ? item.target : null}
                  key={item.id}
                  iconLeft={item.iconLeft}
                  title={item.title}
                  path={item.path}
                />
              );
            })}
            <ItemSideBar
              onClick={handleShowPopular}
              iconLeft={showMorePopular ? <ShowLessIcon /> : <ShowMoreIcon />}
              title={showMorePopular ? 'Show  144 more' : 'Show less'}
            />
          </MenuSideBar>
        </section>
      )}

      {/* subscriptions menu */}
      {subscriptionsData && (
        <section className={cx('subscriptions')}>
          <h3 className={cx('sub-title')}>subscriptions</h3>
          <MenuSideBar>
            {subscriptionsData.map((item) => {
              return (
                <ItemSideBar
                  key={item.id}
                  type="subscriptions"
                  iconLeft={item.iconLeft}
                  title={item.title}
                  path={item.path}
                  channelID={item.id}
                  iconRight={item.iconRight}
                />
              );
            })}
            <ItemSideBar
              onClick={handleShowSubscriptions}
              iconLeft={
                showMoreSubscriptions ? <ShowLessIcon /> : <ShowMoreIcon />
              }
              title={
                showMoreSubscriptions
                  ? `Show  ${SUB_CHANNEL.length - 7} more`
                  : 'Show less'
              }
            />
          </MenuSideBar>
        </section>
      )}

      {/* more from youtube */}
      {MENU_MORE_FROM_YOUTUBE && (
        <section className={cx('more-from-youtube')}>
          <h3 className={cx('more-from-youtube')}>subscriptions</h3>
          <MenuSideBar>
            {MENU_MORE_FROM_YOUTUBE.map((item) => {
              return (
                <ItemSideBar
                  key={item.id}
                  type="more-from-youtube"
                  iconLeft={item.iconLeft}
                  title={item.title}
                  path={item.path}
                />
              );
            })}
          </MenuSideBar>
        </section>
      )}
      {/* footer sidebar */}
      <footer className={cx('footer')}>
        <p className={cx('footer-mail')}>
          Copy right by: <br />
          <span>
            <a href="mailto: quangkhai846@gmail.com" className={cx('email')}>
              quangkhai846@gmail.com
            </a>
          </span>
        </p>
        <p className={cx('footer-bottom')}>© 2022 Google LLC</p>
      </footer>
    </aside>
  );
};

SideBar.propTypes = {};

export default SideBar;
