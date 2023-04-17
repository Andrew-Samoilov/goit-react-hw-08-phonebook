import { React } from 'react';
import { Routes, Route } from "react-router-dom";

import css from './ContactForm.module.css'

import { HomePage } from "../pages/Home";
import { RegisterPage } from "../pages/Register";
import { LoginPage } from "../pages/Login";
import { ContactsPage } from "../pages/Contacts";
import { NavigateBar } from "./navigate/NavigateBar";

// const Home = lazy(() => import('../pages/Home'));
// const Register = lazy(() => import('../pages/Register'));

export const App = () => {
  return (
    <div className={css.mainDiv}>
      
        <NavigateBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
 
    </div>);
}
