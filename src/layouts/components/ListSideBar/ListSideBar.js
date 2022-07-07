import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ToggleSideBarContext } from '~/context/ToggleSideBarProvider';
import ItemSideBar from '../ItemSidebar';
import styles from './ListSideBar.module.scss';
const cx = classNames.bind(styles);

const ListSideBar = ({ data = {} }) => {
  const toggleSideBar = useContext(ToggleSideBarContext);
  return (
    <section
      className={cx('wrapper', {
        [data.type]: !!data.type,
        toggleSideBar: toggleSideBar.value,
      })}
    >
      {data.head && (
        <h3
          className={cx('title', {
            toggleSideBar: toggleSideBar.value,
          })}
        >
          {data.head}
        </h3>
      )}

      {data.values?.length > 0 &&
        data.values.map((item) => {
          return (
            <ItemSideBar
              key={item.id}
              id={item.id}
              type={item.type}
              iconLeft={item.iconLeft}
              iconRight={item.iconRight ? item.iconRight : null}
              title={item.title}
              path={item.path}
              target={item.target ? item.target : null}
              channelId={item.channelId ? item.channelId : null}
              thumbnails={item.thumbnails}
            />
          );
        })}
    </section>
  );
};

ListSideBar.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ListSideBar;
