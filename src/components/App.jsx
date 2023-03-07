import React, { useState } from "react";
import { nanoid } from 'nanoid'
import { ContactList } from "./ContactList";
import { ContactForm } from "./ContactForm";

import Filter from "./Filter";
import css from './ContactForm.module.css'

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie SIIimpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');

  // componentDidUpdate(prevProps, prevState) {
  //   console.log('componentDidUpdate');

  //   if (this.state.contacts !== prevState.contacts) {
  //     console.log('update contacts ');
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  // componentDidMount() {
  //   console.log('componentDidMount');

  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);

  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts })
  //   }
  // }

  let changeFilter = e => {
    setFilter(e.currentTarget.value);
  }

  let getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    console.log(filter, contacts, normalizedFilter);

    return contacts.filter(
      contact => contact.name.toLowerCase().includes(normalizedFilter));
  }

  let formSubmitHandler = (data) => {
    console.log(data);
    const newData = {
      id: nanoid(4),
      name: data.name,
      number: data.number,
    }

    if (contacts.filter(contact => contact.name === data.name).length > 0) {
      alert(`${data.name} is alredy in contacts.`);
    } else {
      setContacts([newData, ...contacts]);
    }
  };

  let deleteContact = (contactId) => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };


  const visibleContacts = getVisibleContacts();

  return (
    <div className={css.mainDiv}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList stateContact={visibleContacts} onDeleteContact={deleteContact} />
    </div>);

}
