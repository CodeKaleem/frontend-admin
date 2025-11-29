'use client';

import { AppBar, Toolbar, Typography, IconButton, Box, Avatar, Tooltip, Badge } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

export default function Header() {
    const { user } = useSelector((state: RootState) => state.auth);

    return (
        <AppBar
            position="fixed"
            sx={{
                zIndex: (theme) => theme.zIndex.drawer + 1,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            }}
        >
            <Toolbar>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{
                        flexGrow: 1,
                        fontWeight: 'bold',
                        letterSpacing: 1,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                    }}
                >
                    <Box
                        sx={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            bgcolor: '#4ade80',
                            animation: 'pulse 2s infinite',
                            '@keyframes pulse': {
                                '0%, 100%': { opacity: 1 },
                                '50%': { opacity: 0.5 },
                            },
                        }}
                    />
                    Admin Panel
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Tooltip title="Notifications">
                        <IconButton color="inherit">
                            <Badge badgeContent={3} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </Tooltip>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box sx={{ textAlign: 'right', display: { xs: 'none', sm: 'block' } }}>
                            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                {user?.name || 'Admin User'}
                            </Typography>
                            <Typography variant="caption" sx={{ opacity: 0.8 }}>
                                {user?.email || 'admin@example.com'}
                            </Typography>
                        </Box>
                        <Avatar
                            sx={{
                                bgcolor: 'secondary.main',
                                fontWeight: 'bold',
                                border: '2px solid white',
                            }}
                        >
                            {user?.name?.charAt(0) || 'A'}
                        </Avatar>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
