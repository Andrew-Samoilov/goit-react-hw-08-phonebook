import { createAction, nanoid } from "@reduxjs/toolkit";

export const addContact = createAction("contacts/addContact", text => {
    return {
        payload: {
            id: nanoid(),
            name: text.name,
            number: text.number,          
        },
    };
});

export const deleteContact = createAction("contacts/deleteContact");

export const setFilter = createAction("filter/setFilter");
