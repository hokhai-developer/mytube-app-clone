import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import MenuSelectItem from './MenuSelectItem';
import classNames from 'classnames/bind';
import styles from './MenuSelect.module.scss';

const cx = classNames.bind(styles);
const MenuSelect = ({ children, data, setPrivacy, show, setShow }) => {
  return (
    <Tippy
      // maxWidth={maxWidth}
      placement={'top-end'}
      interactive
      visible={show}
      delay={500}
      onClickOutside={() => setShow(!show)}
      // onHide={handleReset}
      render={(attrs) => (
        <div {...attrs} className={cx('wrapper')}>
          {data.children.map((item) => {
            return (
              <MenuSelectItem
                key={item.id + Math.random()}
                iconLeft={item.iconLeft}
                title={item.title}
                desc={item.desc}
                onClick={() => {
                  setPrivacy(item.value);
                  setShow(!show);
                }}
              />
            );
          })}
        </div>
      )}
      // zIndex={zIndex}
    >
      <div>{children}</div>
    </Tippy>
  );
};

MenuSelect.propTypes = {};

export default MenuSelect;
