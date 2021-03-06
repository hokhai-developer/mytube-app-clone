import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ToggleSideBarContext } from '~/context/ToggleSideBarProvider';
import Image from '~/components/Image';
import styles from './ItemSideBar.module.scss';

const cx = classNames.bind(styles);
const ItemSideBar = ({
  iconLeft,
  title = '',
  iconRight,
  path = '',
  channelId = '',
  target = null,
  onClick = () => {},
  type = '',
  className,
  thumbnails,
  ...passProps
}) => {
  const toggleSideBar = useContext(ToggleSideBarContext);
  let Comp = 'div';
  const props = {
    onClick,
    ...passProps,
  };
  if (path) {
    if (!target) {
      props.to = path;
      Comp = NavLink;
    } else {
      Comp = 'a';
      props.href = path;
      props.target = '_blank';
    }
  }

  return (
    <Comp
      className={
        Comp === NavLink
          ? (nav) =>
              cx('item', className, {
                active: nav.isActive,
                [type]: type,
                toggleSideBar: toggleSideBar.value,
              })
          : cx('item', className, {
              toggleSideBar: toggleSideBar.value,
            })
      }
      {...props}
    >
      <div
        className={cx('btn', {
          'avatar-channel':
            type === 'bestOfYoutube' || type === 'subscriptions',
          toggleSideBar: toggleSideBar.value,
        })}
      >
        {iconLeft && iconLeft}
        {thumbnails && (
          <Image
            src={thumbnails[0] || thumbnails[0] || thumbnails[0]}
            alt={title}
          />
        )}
      </div>
      <h6
        className={cx('title', {
          toggleSideBar: toggleSideBar.value,
        })}
      >
        {title}
      </h6>
      {iconRight && <div className={cx('icon-right')}>{iconRight}</div>}
    </Comp>
  );
};

ItemSideBar.propTypes = {
  target: PropTypes.bool,
  type: PropTypes.string,
  className: PropTypes.string,
  iconLeft: PropTypes.node,
  title: PropTypes.string,
  iconRight: PropTypes.node,
  path: PropTypes.string,
  channelId: PropTypes.string,
  onClick: PropTypes.func,
};

export default ItemSideBar;
