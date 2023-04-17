import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import css from './NavigateBar.module.css'
import { logOut } from 'redux/auth/operations';

export const NavigateBar = () => {
    const dispatch = useDispatch();

    return (
        <nav className={css.nav}>
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
            <button type="button" onClick={() => dispatch(logOut())}>
                Logout
            </button>
            <NavLink to="/contacts">Contacts</NavLink>
        </nav>
    );
}
