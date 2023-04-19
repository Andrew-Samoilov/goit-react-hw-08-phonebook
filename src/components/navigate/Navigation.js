import { Link as NavLink } from 'react-router-dom';
import Link from '@mui/material/Link';

import { useAuth } from '../../hooks/useAuth';

export const Navigation = () => {
    const { isLoggedIn } = useAuth();
    return (
        <nav>
            <Link
                color="inherit"
                underline="hover"
                sx={{ mr: 1 }}
                component={NavLink}
                to="/">Home
            </Link>
            {isLoggedIn && (
                <Link
                    color="inherit"
                    underline="hover"
                    sx={{ mr: 2 }}
                    component={NavLink}
                    to="/contacts">Contacts
                </Link>
            )}
        </nav>);

};


// return (
//     <nav>
//         <NavLink to="/">
//             Home
//         </NavLink>
//         {isLoggedIn && (
//             <NavLink to="/contacts">Contacts</NavLink>
//         )}
//     </nav>
// );