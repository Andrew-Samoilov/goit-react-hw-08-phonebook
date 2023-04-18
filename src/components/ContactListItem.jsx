import css from './ContactForm.module.css'
import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/contacts/operations";

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const ContactListItem = ({ id, name, number }) => {
    const dispatch = useDispatch();

    const handleDelete = () => dispatch(deleteContact(id));

    return (
        <div className={css.divItem}>
            <span>{name}: {number}</span>
            <IconButton aria-label="delete" size="small">
                <DeleteIcon fontSize="inherit"
                    onClick={handleDelete}
                />
            </IconButton>

            {/* <button
                onClick={handleDelete}
                name={name}
                className={css.button}
                type="button">Delete
            </button> */}
        </div>
    );

};

export default ContactListItem;
