import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ActionsWatchVideo.module.scss';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react';
import Model from '~/components/Model';
import ShareSocials from '~/components/ShareSocials';

const cx = classNames.bind(styles);
const ActionsWatchVideo = ({
  className,
  iconLeft,
  title,
  content,
  toggle,
  ModelContent,
}) => {
  const [active, setActive] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const handleClick = () => {
    if (toggle) {
      setActive(!active);
    }
    if (ModelContent) {
      setShowModel(true);
    }
  };

  return (
    <>
      {content ? (
        <Tippy
          content={content}
          arrow={false}
          placement={'bottom'}
          offset={[0, -4]}
        >
          <button
            className={cx('action-item', className)}
            onClick={handleClick}
          >
            {iconLeft && (
              <div
                className={cx('icon', {
                  active: active,
                })}
              >
                {iconLeft}
              </div>
            )}
            {title && <span className={cx('title')}>{title}</span>}
            {showModel && ModelContent && (
              <Model setShowModel={setShowModel}>
                <ModelContent setShowModel={setShowModel} />
              </Model>
            )}
          </button>
        </Tippy>
      ) : (
        <button className={cx('action-item', className)} onClick={handleClick}>
          {iconLeft && <div className={cx('icon')}>{iconLeft}</div>}
          {title && <span className={cx('title')}>{title}</span>}
          {showModel && ModelContent && (
            <Model setShowModel={setShowModel}>
              <ModelContent setShowModel={setShowModel} />
            </Model>
          )}
        </button>
      )}
    </>
  );
};

ActionsWatchVideo.propTypes = {
  className: PropTypes.string,
  iconLeft: PropTypes.node,
  title: PropTypes.string,
  content: PropTypes.string,
};

export default ActionsWatchVideo;
