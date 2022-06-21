import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Action.module.scss';
import {
  AppsIcon,
  SettingsIcon,
  CreateIcon,
  NotificationsIcon,
} from '~/components/Icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Images from '~/assets/Images';
import Image from '~/components/Image';
import ButtonSignIn from '~/layouts/components/ButtonSignIn';
import Menu from './Menu';
import { MENU_APPS, MENU_SETTINGS, MENU_CREATE } from './DataMenu';

const cx = classNames.bind(styles);
const Action = (props) => {
  const [showMenuApps, setShowMenuApps] = useState(false);
  const [showMenuSettings, setShowMenuSettings] = useState(false);
  const [showMenuCreate, setShowMenuCreate] = useState(false);
  const hasAuth = true;
  // placement="top-start"
  return (
    <div className={cx('wrapper')}>
      {hasAuth && (
        <Menu
          showMenu={showMenuCreate}
          setShowMenu={setShowMenuCreate}
          data={MENU_CREATE}
          offset={[8, 4]}
          placement="bottom-start"
        >
          <Tippy content="Create" zIndex={988}>
            <button
              className={cx('btn')}
              onClick={() => setShowMenuCreate(!showMenuCreate)}
            >
              <CreateIcon />
            </button>
          </Tippy>
        </Menu>
      )}
      <Menu
        showMenu={showMenuApps}
        setShowMenu={setShowMenuApps}
        data={MENU_APPS}
        offset={[8, 4]}
        placement="bottom-start"
      >
        <Tippy content="My-tube Apps" zIndex={988}>
          <button
            className={cx('btn', 'btn-create', {
              active: showMenuApps,
            })}
            onClick={() => setShowMenuApps(!showMenuApps)}
          >
            <AppsIcon />
          </button>
        </Tippy>
      </Menu>
      {hasAuth && (
        <Tippy content="Notifications">
          <button className={cx('btn', 'btn-create')}>
            <NotificationsIcon />
          </button>
        </Tippy>
      )}
      <Menu
        showMenu={showMenuSettings}
        setShowMenu={setShowMenuSettings}
        data={MENU_SETTINGS}
        offset={[8, 4]}
        placement="bottom-start"
      >
        {hasAuth ? (
          <div onClick={() => setShowMenuSettings(!showMenuSettings)}>
            <Image src={Images.userAvatar} alt="User Avatar" />
          </div>
        ) : (
          <Tippy content="Settings" zIndex={988}>
            <button
              className={cx('btn', 'btn-settings', {
                active: showMenuSettings,
              })}
              onClick={() => setShowMenuSettings(!showMenuSettings)}
            >
              <SettingsIcon />
            </button>
          </Tippy>
        )}
      </Menu>

      {!hasAuth && (
        <div className={cx('btn-signIn')}>
          <ButtonSignIn />
        </div>
      )}
    </div>
  );
};

Action.propTypes = {};

export default Action;
