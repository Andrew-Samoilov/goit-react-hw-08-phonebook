import { useSelector } from "react-redux";
import css from './ContactForm.module.css'
import { getContacts, getStatusFilter } from "../redux/selectors";
import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem'

const getVisibleContacts = (contacts, statusFilter) => {
    switch (statusFilter) {
        // case statusFilters.active:
        //     return contacts.filter(task => !task.completed);
        default:
            return contacts;
    }
};

export const ContactList = ({ stateContact, onDeleteContact }) => {
    const contacts = useSelector(getContacts);
    const statusFilter = useSelector(getStatusFilter);
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
