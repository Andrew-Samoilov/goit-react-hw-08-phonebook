import css from './ContactForm.module.css'
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/actions";

const ContactListItem = ({ id, name, number }) => {
    const dispatch = useDispatch();

    const handleDelete = () => dispatch(deleteContact(id));

    return (
        <div className = {css.divItem}>
            <span>{name}: {number}</span> 
            <button
                onClick={handleDelete}
                name={name}
                className={css.button}
                type="button">Delete
            </button>
        </div>
    );
    
};

export default ContactListItem;

ContactListItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
}
