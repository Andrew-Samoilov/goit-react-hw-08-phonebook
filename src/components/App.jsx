import { React } from 'react';
import { Routes, Route } from "react-router-dom";

import css from './ContactForm.module.css'

import { Home } from "../pages/Home";
import { RegisterPage } from "../pages/RegisterPage";
import { Login } from "../pages/Login";
import { Contacts } from "../pages/Contacts";
import { NavigateBar } from "../components/NavigateBar";

// const Home = lazy(() => import('../pages/Home'));
// const Register = lazy(() => import('../pages/Register'));

export const App = () => {
  return (
    <div className={css.mainDiv}>
      <div>
        <NavigateBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </div>);
}
