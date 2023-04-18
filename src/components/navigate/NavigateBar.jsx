import { NavLink } from "react-router-dom";
import css from './NavigateBar.module.css'

import { useAuth } from '../../hooks/useAuth';
import { UserMenu } from './UserMenu';
import { AuthNav } from './AuthNav'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

export const NavigateBar = () => {
    const { isLoggedIn } = useAuth();

    return (
        <AppBar position="static">
            <Toolbar>
                <nav className={css.nav}>

                    <NavLink className={css.link} to="/" end>Home</NavLink>

                    {isLoggedIn ? <UserMenu /> : <AuthNav />}

                </nav>
            </Toolbar>
        </AppBar>
    );
}
