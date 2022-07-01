import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Auth } from '~/firebase/firebaseConfig';
import MainLayout from '~/layouts/MainLayout';
import HomePage from '~/pages/HomePage';
import SearchPage from '~/pages/SearchPage';
import authSlice from '~/redux/authSlice';
import { authSelector } from '~/redux/selector';
import LayoutNotfound from './layouts/LayoutNotfound';
import WatchVideoLayout from './layouts/WatchVideoLayout';
import Notfound from './pages/Notfound/Notfound';
import Watch from '~/pages/Watch';

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
          <Route path="/results/:searchValue" element={<Notfound />} />
          <Route path="/explore" element={<Notfound />} />
          <Route path="/subscriptions" element={<Notfound />} />
        </Route>
        {/* tam thoi */}
        <Route path="/shorts" element={<WatchVideoLayout />}>
          <Route path="/shorts" element={<Watch />} />
        </Route>

        <Route path="/notfound" element={<LayoutNotfound />}>
          <Route index element={<Notfound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
