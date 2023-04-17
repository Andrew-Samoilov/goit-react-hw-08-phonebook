import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contactsSlice";
import { filterReducer } from "./contacts/filtersSlice";

const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filters: filterReducer,
    },
});

export default store;
