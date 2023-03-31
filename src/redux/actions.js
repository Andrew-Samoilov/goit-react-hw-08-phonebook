import { createAction, nanoid } from "@reduxjs/toolkit";

export const addContact = createAction("contacts/addContact", text => {
    return {
        payload: {
            name: text.name,
            number: text.number,
            id: nanoid(),
        },
    };
});

export const deleteContact = createAction("contacts/deleteContact");

export const setFilter = createAction("filters/setFilter");
