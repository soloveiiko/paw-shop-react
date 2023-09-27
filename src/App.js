import React, { useEffect } from 'react';
import AppRoutes from '@routes/AppRoutes';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { setUser } from './redux/auth/authSlice';
import './App.scss';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const userData = Cookies.get('access_token');
    if (userData) {
      const parsedUserData = JSON.parse(userData);
      dispatch(setUser({ access_token: parsedUserData }));
    }
  }, [dispatch]);

  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
