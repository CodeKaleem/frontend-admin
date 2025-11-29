'use client';

import { Box, Toolbar } from '@mui/material';
import Sidebar from './Sidebar';
import Header from './Header';
import { useAuth } from '@/hooks/useAuth';

const drawerWidth = 240;

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const isAuthenticated = useAuth();

    if (!isAuthenticated) {
        return null; // or a loading spinner
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <Header />
            <Sidebar />
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, ml: `${drawerWidth}px` }}
            >
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
}
