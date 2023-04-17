import { NavLink } from "react-router-dom";
import css from '../components/navigate/NavigateBar.module.css'

export const HomePage = () => {
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
