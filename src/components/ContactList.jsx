import { useSelector } from "react-redux";
import css from './ContactForm.module.css'
import { getContacts, getFilter } from "../redux/selectors";
import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem'

const getVisibleContacts = (contacts, statusFilter) => {
    if (statusFilter) {
        const normalizedFilter = statusFilter.toLowerCase();
        return contacts.filter(
            contact => contact.name.toLowerCase().includes(normalizedFilter));
    }

    return contacts;
};

export const ContactList = ({ stateContact, onDeleteContact }) => {
    const contacts = useSelector(getContacts);
    const statusFilter = useSelector(getFilter);
    const visibleContacts = getVisibleContacts(contacts, statusFilter);

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

ContactList.propTypes = {
    stateContact: PropTypes.array.isRequired,
}
