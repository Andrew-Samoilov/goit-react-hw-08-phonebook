import { useAuth } from '../../hooks/useAuth';
import { UserMenu } from './UserMenu';
import { AuthNav } from './AuthNav'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

import { Navigation } from '../navigate/Navigation';

export const NavigateBar = () => {
    const { isLoggedIn } = useAuth();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Navigation />
                    {isLoggedIn ? <UserMenu /> : <AuthNav />}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
