import React, { useEffect, useState } from 'react';
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
import Notifications from './Notifications';
import { MENU_APPS, MENU_SETTINGS, MENU_CREATE, MENU_USER } from './DataMenu';
import { authSelector } from '~/Redux/selector';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);
const Action = (props) => {
  const [showMenuApps, setShowMenuApps] = useState(false);
  const [showMenuSettings, setShowMenuSettings] = useState(false);
  const [showMenuCreate, setShowMenuCreate] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const auth = useSelector(authSelector);

  useEffect(() => {
    setShowMenuApps(false);
    setShowMenuSettings(false);
    setShowMenuCreate(false);
  }, [auth.status]);

  return (
    <div className={cx('wrapper')}>
      {auth.status === 1 && (
        <Menu
          showMenu={showMenuCreate}
          setShowMenu={setShowMenuCreate}
          data={MENU_CREATE}
          offset={[8, 4]}
          placement="bottom-end"
        >
          <Tippy content="Create" zIndex={899}>
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
        placement="bottom-end"
      >
        <Tippy content="My-tube Apps" zIndex={899}>
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

      {auth.status === 1 && (
        <Notifications
          zIndex={950}
          placement={'left-start'}
          offset={[0, 0]}
          show={showNotification}
          setShow={setShowNotification}
          delay={[100, 100]}
        >
          <Tippy content="Notifications" zIndex={899}>
            <button
              className={cx('btn', 'btn-create')}
              onClick={() => setShowNotification(!showNotification)}
            >
              <NotificationsIcon />
            </button>
          </Tippy>
        </Notifications>
      )}

      {auth.status === 0 && (
        <Menu
          showMenu={showMenuSettings}
          setShowMenu={setShowMenuSettings}
          data={MENU_SETTINGS}
          offset={[8, 4]}
          placement={'bottom-end'}
        >
          <Tippy content="Settings" zIndex={899}>
            <button
              className={cx('btn', 'btn-settings', {
                active: showMenuSettings,
              })}
              onClick={() => setShowMenuSettings(!showMenuSettings)}
            >
              <SettingsIcon />
            </button>
          </Tippy>
        </Menu>
      )}

      {auth.status === 1 && (
        <Menu
          showMenu={showMenuSettings}
          setShowMenu={setShowMenuSettings}
          data={MENU_USER}
          offset={[-300, 4]}
          placement={'bottom-start'}
        >
          <div
            onClick={() => setShowMenuSettings(!showMenuSettings)}
            className={cx('user-avatar')}
          >
            <Image src={auth.user.photoURL} alt={auth.user.displayName} />
          </div>
        </Menu>
      )}

      {auth.status === 0 && (
        <div className={cx('btn-signIn')}>
          <ButtonSignIn />
        </div>
      )}
    </div>
  );
};

Action.propTypes = {};

export default Action;
