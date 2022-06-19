import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SideBar = (props) => {
  console.log('re load');
  return (
    <div>
      <h1>Side BAr</h1>
      <Link to="/">HOme</Link>
      <Link to="/shorts">short</Link>
      <Link to="/notfound">lay out not found</Link>
    </div>
  );
};

SideBar.propTypes = {};

export default SideBar;
