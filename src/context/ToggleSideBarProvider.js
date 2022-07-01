import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const ToggleSideBarContext = React.createContext();

const ToggleSideBarProvider = ({ children }) => {
  const [small, setSmall] = useState(false);

  const smallSideBar = {
    value: small,
    toggle: (bool) => {
      if (bool === true || bool === false) {
        setSmall(bool);
      } else {
        setSmall(!small);
      }
    },
  };
  return (
    <ToggleSideBarContext.Provider value={smallSideBar}>
      {children}
    </ToggleSideBarContext.Provider>
  );
};

export default ToggleSideBarProvider;
