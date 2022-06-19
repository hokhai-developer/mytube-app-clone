import React, { Children } from 'react';
import PropTypes from 'prop-types';
import Header from '~/layouts/components/Header';
import SideBar from '~/layouts/components/SideBar';
import { Outlet } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shorts from '../../pages/Shorts';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <SideBar />
      <Outlet />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
