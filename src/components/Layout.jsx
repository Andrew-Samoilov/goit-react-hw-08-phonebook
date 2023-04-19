import { Outlet } from 'react-router-dom';
import { NavigateBar } from './navigate/NavigateBar';
import { Suspense } from 'react';

export const Layout = () => {
    return (
        <div>
            <NavigateBar />
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>    
        </div>
    );
};
