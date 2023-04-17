import { React, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from "react-router-dom";
import { useAuth } from '../hooks/useAuth';
import { refreshUser } from '../redux/auth/operations';

import css from './ContactForm.module.css'

import { HomePage } from "../pages/Home";
import { RegisterPage } from "../pages/Register";
import { LoginPage } from "../pages/Login";
import { ContactsPage } from "../pages/Contacts";
import { NavigateBar } from "./navigate/NavigateBar";
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

// const Home = lazy(() => import('../pages/Home'));
// const Register = lazy(() => import('../pages/Register'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <div className={css.mainDiv}> 
        <NavigateBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route index element={<HomePage />} />
          {/* <Route path="/register" element={<RegisterPage />} /> */}
          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
            }
          />

          {/* <Route path="/login" element={<LoginPage />} /> */}
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
            }
          />
          {/* <Route path="/contacts" element={<ContactsPage />} /> */}
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Routes>
 
    </div>);
}
