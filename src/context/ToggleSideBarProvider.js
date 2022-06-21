import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const ToggleSideBarContext = React.createContext();

const ToggleSideBarProvider = ({ children }) => {
  const [small, setSmall] = useState(false);

  const smallSideBar = {
    value: small,
    toggle: () => {
      setSmall(!small);
    },
  };
  return (
    <ToggleSideBarContext.Provider value={smallSideBar}>
      {children}
    </ToggleSideBarContext.Provider>
  );
};

export default ToggleSideBarProvider;
