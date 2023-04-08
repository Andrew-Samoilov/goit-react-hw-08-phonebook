import css from './ContactForm.module.css'
import React from "react";
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/filtersSlice";
import { selectFilter } from "../redux/selectors";

export const Filter = () => {
    const dispatch = useDispatch();
    const filt = useSelector(selectFilter);
    
    const filterChange = (e) => {
        dispatch(setFilter(e.currentTarget.value))
    }

    return (
        <label className={css.contactLabel}>Find contact by name
            <input
                value={filt}
                onChange={filterChange}
                name="filter"
                className={css.inputField} type="text" />
        </label>
    );
};

Filter.propTypes = {
    value: PropTypes.string,
}
