import { NavLink } from "react-router-dom";
import css from './NavigateBar.module.css'
import { useAuth } from '../../hooks/useAuth';
import { UserMenu } from './UserMenu';
import { AuthNav } from './AuthNav'

export const NavigateBar = () => {
    const { isLoggedIn } = useAuth();

    return (
        <nav className={css.nav}>

            <NavLink className={css.link} to="/" end>Home</NavLink>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
           
        </nav>
    );
}
