import React, { Children, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import MenuItem from '../MenuItem';
import styles from './Menu.module.scss';
import { BackIcon } from '~/components/Icons/Icons';
import Image from '~/components/Image';
import Images from '~/assets/Images';
import { useDispatch } from 'react-redux';
import authSlice from '~/redux/authSlice';
import { signOutAuth } from '~/firebase/signOut';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelector } from '~/redux/selector';

const cx = classNames.bind(styles);
const Menu = ({
  maxWidth,
  children,
  placement,
  data,
  offset,
  showMenu,
  setShowMenu,
  delay = [500, 1000],
  zIndex = 900,
}) => {
  const [menu, setMenu] = useState([data]);
  const dispatch = useDispatch();
  const auth = useSelector(authSelector);
  const navigate = useNavigate();
  const currentMenu = menu[menu.length - 1];

  const handleNexMenu = (item) => {
    if (item && item.children) {
      setMenu((prev) => [...prev, item.children]);
      return;
    }
    if (item && item.dataType) {
      if (item.dataType === 'SignOut') {
        signOutAuth()
          .then(() => {
            dispatch(authSlice.actions.signOutAuth());
            navigate(-1);
            //show toast SignOut thanh cong
          })
          .catch((error) => {
            alert(error);
            //show toast SignOut that bai
          });
      }
    }
  };

  const handleBackMenu = () => {
    setMenu((prev) => prev.slice(0, prev.length - 1));
  };
  const handleReset = () => {
    setMenu([data]);
  };

  const renderItem = (attrs) => (
    <div className={cx('wrapper-menu')} tabIndex="-1" {...attrs}>
      <div className={cx('popper')}>
        {currentMenu.type === 'user' && (
          <header className={cx('header-account')}>
            <div className={cx('avatar-user')}>
              <Image src={auth.user.photoURL} alt={auth.user.displayName} />
            </div>
            <div className={cx('user-info')}>
              <p className={cx('user-name')}>{auth.user.displayName}</p>
              <a
                href="https://myaccount.google.com/"
                target="_blank"
                className={cx('user-link')}
              >
                Manage your Google Account
              </a>
            </div>
          </header>
        )}
        {menu.length > 1 && currentMenu && (
          <header className={cx('header')}>
            <button className={cx('btn')} onClick={handleBackMenu}>
              <BackIcon />
            </button>
            <h5 className={cx('title')}>Choose your {currentMenu.type}</h5>
          </header>
        )}
        <div className={cx('menu-body')}>
          {currentMenu.values.length > 0 &&
            currentMenu.values.map((item) => {
              return (
                <MenuItem
                  onClick={() => {
                    handleNexMenu(item);
                  }}
                  key={item.id}
                  type={item.type}
                  id={item.id}
                  path={item.path}
                  target={item.target}
                  leftIcon={item.leftIcon}
                  title={item.title}
                  rightIcon={item.children ? true : false}
                  pathPreventive={item.pathPreventive}
                />
              );
            })}
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {menu.length > 0 && (
        <Tippy
          maxWidth={maxWidth}
          placement={placement}
          interactive
          visible={showMenu}
          delay={delay}
          onClickOutside={() => setShowMenu(!showMenu)}
          offset={offset}
          onHide={handleReset}
          render={renderItem}
          zIndex={zIndex}
        >
          {children}
        </Tippy>
      )}
    </div>
  );
};

Menu.propTypes = {
  children: PropTypes.node,
};

export default Menu;
