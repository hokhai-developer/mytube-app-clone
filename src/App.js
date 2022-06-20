import MainLayout from '~/layouts/MainLayout';
import Shorts from '~/pages/Shorts';
import HomePage from '~/pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LayoutNotfound from './layouts/LayoutNotfound';
import Notfound from './pages/Notfound/Notfound';
import React from 'react';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/shorts" element={<Shorts />} />
          <Route path="/explore" element={<Shorts />} />
          <Route path="/subscriptions" element={<Shorts />} />
        </Route>

        <Route path="/notfound" element={<LayoutNotfound />}>
          <Route index element={<Notfound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
