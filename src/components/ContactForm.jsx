import css from './ContactForm.module.css'
import PropTypes from 'prop-types';
import React, { useState } from "react";

export const ContactForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = (e) => {
        // console.log(e.currentTarget.value);
        if (e.currentTarget.name === 'name') {
            setName(e.currentTarget.value);
        }
        if (e.currentTarget.name === 'number') {
            setNumber(e.currentTarget.value);
        }
    };

    const handleSubmit = (e) => {
        console.log(name, number, e);
        e.preventDefault();
       onSubmit({name, number});
    };


    return (
        <form className={css.contactForm} onSubmit={handleSubmit}>
            <label className={css.contactLabel}>Name
                <input
                    className={css.inputField}
                    value={name}
                    onChange={handleChange}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required />
            </label>
            <label className={css.contactLabel}>Number
                <input
                    className={css.inputField}
                    value={number}
                    onChange={handleChange}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>
            <button className={css.button} type="submit">Add contact</button>
        </form>
    );

}

ContactForm.propTypes = {
    state: PropTypes.exact({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }),
}