import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <Stack direction="row" alignItems="baseline" spacing={1}>
            <p>Welcome, <b>{user.name}!</b> {user.email}</p>
            <Button
                variant="text"
                color="inherit"
                size="small"
                sx={{ mr: 2 }}
                onClick={() => dispatch(logOut())}>
                Logout
            </Button>
        </Stack>
    );
};
