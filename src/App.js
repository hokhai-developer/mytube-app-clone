import MainLayout from '~/layouts/MainLayout';
import Shorts from '~/pages/Shorts';
import HomePage from '~/pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LayoutNotfound from './layouts/LayoutNotfound';
import Notfound from './pages/Notfound/Notfound';
import React, { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { Auth } from '~/firebase/firebaseConfig';
import { useDispatch, useSelector } from 'react-redux';
import authSlice from '~/Redux/authSlice';
import { authSelector } from '~/Redux/selector';

function App() {
  const dispatch = useDispatch();
  const auth = useSelector(authSelector);
  useEffect(() => {
    const authChange = onAuthStateChanged(Auth, (user) => {
      if (user) {
        const { accessToken, displayName, email, uid, photoURL } = user;
        dispatch(
          authSlice.actions.signInAuth({
            accessToken,
            displayName,
            email,
            uid,
            photoURL,
          }),
        );
      } else {
        dispatch(authSlice.actions.signOutAuth());
      }
    });
    return () => {
      authChange();
    };
  }, [auth.status]);
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
