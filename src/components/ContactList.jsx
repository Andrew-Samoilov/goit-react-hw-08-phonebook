import { useSelector } from "react-redux";
import css from './ContactForm.module.css'
import { getContacts, getFilter } from "../redux/selectors";
import ContactListItem from './ContactListItem'

const getVisibleContacts = (contacts, statusFilter) => {
    // console.log(contacts, statusFilter);
    if (statusFilter) {
        const normalizedFilter = statusFilter.toLowerCase();
        // console.log(contacts);
        return contacts.filter(
            contact => contact.name.toLowerCase().includes(normalizedFilter));
    }
    
    return contacts;
};

export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const statusFilter = useSelector(getFilter);
    // console.log(statusFilter);
    const visibleContacts = getVisibleContacts(contacts, statusFilter);
    // console.log(contacts, statusFilter);

    return (
        <ul className={css.listUl}>
            {visibleContacts.map(el =>
                <li key={el.id} className={css.listItem}>
                    <ContactListItem
                        id={el.id}
                        number={el.number}
                        name={el.name}
                    />
                </li>
            )}
        </ul>
    )
};
