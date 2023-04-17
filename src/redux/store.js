import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contactsSlice";
import { filterReducer } from "./contacts/filtersSlice";
import { authReducer } from './auth/slice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        contacts: contactsReducer,
        filters: filterReducer,
    },
});

export default store;
