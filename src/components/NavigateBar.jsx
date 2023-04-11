import { NavLink } from "react-router-dom";
import css from './NavigateBar.module.css'

export const NavigateBar = () => {
    return (
        <nav className={css.nav}>
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
        </nav>
    );
}
