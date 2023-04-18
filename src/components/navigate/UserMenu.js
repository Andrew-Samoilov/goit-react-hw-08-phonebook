import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import { NavLink } from "react-router-dom";
import css from './NavigateBar.module.css'

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <div className={css.nav}>
            <NavLink className={css.link} to="/contacts">Contacts</NavLink>
            <p>Welcome, <b>{user.name}!</b> {user.email}</p>
            <button className={css.btn} type="button" onClick={() => dispatch(logOut())}>
                Logout
            </button>
        </div>
    );
};
