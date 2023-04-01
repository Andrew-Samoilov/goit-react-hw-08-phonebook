import React from "react";
import { ContactList } from "./ContactList";
import { ContactForm } from "./ContactForm";

import { Filter } from "./Filter";
import css from './ContactForm.module.css'

export const App = () => {
  return (
    <div className={css.mainDiv}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>);
}
