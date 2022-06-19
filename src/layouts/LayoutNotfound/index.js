import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

const LayoutNotfound = ({ children }) => {
  return (
    <div>
      <h1>LayoutNotfound no found</h1>
      <Outlet />
    </div>
  );
};

LayoutNotfound.propTypes = {};

export default LayoutNotfound;
