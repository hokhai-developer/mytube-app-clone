import React, { Children, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import MenuItem from '../MenuItem';
import styles from './Menu.module.scss';
import { BackIcon } from '../../../../../components/Icons/Icons';

const cx = classNames.bind(styles);
const Menu = ({
  children,
  placement,
  data,
  offset,
  showMenu,
  setShowMenu,
  delay = [500, 1000],
}) => {
  const [menu, setMenu] = useState([data]);

  const currentMenu = menu[menu.length - 1];

  const handleNexMenu = (menuChildren) => {
    if (menuChildren) {
      setMenu((prev) => [...prev, menuChildren]);
      return;
    } else {
      //clcik len item...xu ly event
    }
  };
  const handleBackMenu = () => {
    setMenu((prev) => prev.slice(0, prev.length - 1));
  };
  const handleReset = () => {
    setMenu([data]);
  };

  return (
    <div>
      {menu.length > 0 && (
        <Tippy
          placement={placement}
          interactive
          visible={showMenu}
          delay={delay}
          onClickOutside={() => setShowMenu(!showMenu)}
          offset={offset}
          onHide={handleReset}
          render={(attrs) => (
            <div className={cx('search-box')} tabIndex="-1" {...attrs}>
              <div className={cx('popper')}>
                {menu.length > 1 && currentMenu && (
                  <header className={cx('header')}>
                    <button className={cx('btn')} onClick={handleBackMenu}>
                      <BackIcon />
                    </button>
                    <h5 className={cx('title')}>
                      Choose your {currentMenu.type}
                    </h5>
                  </header>
                )}
                {currentMenu.values.length > 0 &&
                  currentMenu.values.map((item) => {
                    return (
                      <MenuItem
                        menuChildren={item.children}
                        onClick={handleNexMenu}
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
          )}
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
