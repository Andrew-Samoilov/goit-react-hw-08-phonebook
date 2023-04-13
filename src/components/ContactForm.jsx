import css from './ContactForm.module.css'
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { addContact } from "../redux/operations";
import { selectContacts } from "../redux/selectors";

// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

export const ContactForm = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = (e) => {
        if (e.currentTarget.name === 'name') {
            setName(e.currentTarget.value);
        }
        if (e.currentTarget.name === 'number') {
            setNumber(e.currentTarget.value);
        }
    };

    const contacts = useSelector(selectContacts);

    const handleSubmit = (e) => {
        // console.log(name, number, e);
        const checkName = contacts.find((el) => el.name === name);
        // console.log(contacts, checkName);
        e.preventDefault();

        if (checkName) {
            alert(`Contact ${name} already exist!`)
        } else {
            dispatch(addContact({ name, number }));
            setName('');
            setNumber('');
        }
    };

    return (
        <div>
            {/* <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1 },
                    bgcolor: 'background.paper',
                    boxShadow: 1,
                    borderRadius: 2,
                    p: 2,
                    m: 2,
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="Name" variant="outlined" />
                <TextField id="outlined-basic" label="Number" variant="outlined" />
                <Button variant="contained" type="submit">Add contact</Button>
            </Box> */}

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
        </div >
    );

}
