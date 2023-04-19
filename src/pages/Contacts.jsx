import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectIsLoading } from "redux/contacts/selectors";
import { fetchContacts } from "redux/contacts/operations";

import { ContactList } from "../components/ContactList";
import { ContactForm } from "../components/ContactForm";
import { Filter } from "../components/Filter";

export default function ContactsPage() {
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <main>
            <h1>Phonebook</h1>
            <ContactForm />
            <h2>Contacts</h2>
            <Filter />
            {isLoading && !error && <b>Request in progress...</b>}
            <ContactList />
        </main>
    );
};
