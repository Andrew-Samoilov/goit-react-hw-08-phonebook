import { createReducer } from "@reduxjs/toolkit";
import {
    addContact,
    deleteContact,
    setStatusFilter,
} from "./actions";

const initialContacts = Object.freeze([
    { id: 'id-1', name: 'Rosie SIIimpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
]);

export const contactsReducer = createReducer(initialContacts, {
    [addContact]: (state, action) => {
        state.push(action.payload);
    },
    [deleteContact]: (state, action) => {
        const index = state.findIndex(contact => contact.id !== action.payload);
        state.splice(index, 1);
    },
});

const filtersInitialState = {
    status: initialContacts.all,
};

export const filtersReducer = createReducer(filtersInitialState, {
    [setStatusFilter]: (state, action) => {
        state.status = action.payload;
    },
});