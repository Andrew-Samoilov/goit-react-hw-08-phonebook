import { NavLink } from "react-router-dom";
import css from '../components/NavigateBar.module.css'

export const Home = () => {
    return (
        <main>
            <h1>Welcome</h1>
            <p>Please choose your option:</p>
            <nav className={css.nav}>
                <NavLink to="/register">Register</NavLink>
                <NavLink to="/login">Login</NavLink>
            </nav>
        </main>
    );
};
