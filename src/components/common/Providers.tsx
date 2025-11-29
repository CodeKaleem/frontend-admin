'use client';

import { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { store } from '@/store/store';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { loginSuccess, logout } from '@/store/authSlice';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#dc004e',
        },
    },
});

function AuthInitializer({ children }: { children: React.ReactNode }) {
    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem('token');
        const loginTime = localStorage.getItem('loginTime');
        const TWENTY_FOUR_HOURS = 24 * 60 * 60 * 1000;

        if (token && loginTime) {
            const now = Date.now();
            if (now - parseInt(loginTime) > TWENTY_FOUR_HOURS) {
                // Session expired
                localStorage.removeItem('token');
                localStorage.removeItem('loginTime');
                dispatch(logout()); // Ensure logout action is imported
            } else {
                // Valid session
                const user = { email: 'admin@example.com', name: 'Admin User' };
                dispatch(loginSuccess({ user, token }));
            }
        } else {
            // No valid session data
            localStorage.removeItem('token');
            localStorage.removeItem('loginTime');
        }
    }, [dispatch]);

    return <>{children}</>;
}

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AuthInitializer>{children}</AuthInitializer>
            </ThemeProvider>
        </Provider>
    );
}
