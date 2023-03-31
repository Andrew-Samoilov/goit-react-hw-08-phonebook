import css from './ContactForm.module.css'
import React from "react";
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { setFilter } from "../redux/actions";

export const Filter = ({ value, onChange }) => {
    const dispatch = useDispatch();

    const filterChange = (e) => {
        dispatch(setFilter(e.currentTarget.value))
    }
    return (
        <label className={css.contactLabel}>Find contact by name
            <input
                value={value}
                onChange={filterChange}
                name="filter"
                className={css.inputField} type="text" />
        </label>
    );
};

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
}
