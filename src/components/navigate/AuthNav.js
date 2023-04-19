import { Link as NavLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

export const AuthNav = () => {
    return (
        <Stack direction="row" alignItems="baseline" spacing={1}>
        <nav>
            <Link
                color="inherit"
                underline="hover"
                sx={{ mr: 1 }}
                component={NavLink}
                to="/register">
                Register
            </Link>
            <Link
                color="inherit"
                underline="hover"
                sx={{ mr: 1 }}
                component={NavLink}
                to="/login">
                Log In
            </Link>
        </nav>
         </Stack >
    );
};

