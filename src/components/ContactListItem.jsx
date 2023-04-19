import css from './ContactForm.module.css'
import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/contacts/operations";

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';

const ContactListItem = ({ id, name, number }) => {
    const dispatch = useDispatch();

    const handleDelete = () => dispatch(deleteContact(id));

    return (
        <div className={css.divItem}>
            <span>{name}: {number}</span>
            <IconButton aria-label="delete" size="small" onClick={handleDelete}>
                <DeleteIcon fontSize="inherit"/>
            </IconButton>
        </div>
    );

};

export default ContactListItem;
