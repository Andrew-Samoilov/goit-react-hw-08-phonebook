import React from "react";
import { Routes, Route } from "react-router-dom";

import css from './ContactForm.module.css'

import { Home } from "../pages/Home";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import { Contacts } from "../pages/Contacts";
import { NavigateBar } from "../components/NavigateBar";

export const App = () => {
  return (
    <div className={css.mainDiv}>
      <div>
        <NavigateBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </div>);
}
