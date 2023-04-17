import { NavLink } from "react-router-dom";
import css from '../components/navigate/NavigateBar.module.css'

// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';

export const HomePage = () => {
    return (
        <main>
            <h1>Welcome</h1>
            <p>Please choose your option:</p>
            {/* <nav> */}
            {/* <Stack spacing={2} direction="row">
             
                <Button variant="outlined"><NavLink to="/register">Register</NavLink></Button>
                    <Button variant="outlined"><NavLink to="/login">Login</NavLink></Button> */}


            <nav className={css.nav}>
                <NavLink to="/register">Register</NavLink>
                <NavLink to="/login">Login</NavLink>
            </nav>
            {/* </Stack> */}
            {/* </nav> */}
        </main>
    );
};
