'use client';

import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Divider,
    Drawer,
    Toolbar,
    alpha,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import LogoutIcon from '@mui/icons-material/Logout';
import { useRouter, usePathname } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { logout } from '@/store/authSlice';

const drawerWidth = 240;

export default function Sidebar() {
    const router = useRouter();
    const pathname = usePathname();
    const dispatch = useDispatch();

    const menuItems = [
        { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
        { text: 'Products', icon: <ShoppingCartIcon />, path: '/products' },
        { text: 'Analytics', icon: <BarChartIcon />, path: '/analytics' },
    ];

    const handleLogout = () => {
        dispatch(logout());
        router.push('/login');
    };

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    borderRight: '1px solid',
                    borderColor: 'divider',
                    background: 'linear-gradient(to bottom, #ffffff, #fafafa)',
                },
            }}
        >
            <Toolbar />
            <Box sx={{ overflow: 'auto', pt: 2 }}>
                <List>
                    {menuItems.map((item) => (
                        <ListItem key={item.text} disablePadding sx={{ px: 1, mb: 0.5 }}>
                            <ListItemButton
                                selected={pathname === item.path}
                                onClick={() => router.push(item.path)}
                                sx={{
                                    borderRadius: 2,
                                    transition: 'all 0.3s ease',
                                    '&.Mui-selected': {
                                        bgcolor: (theme) => alpha(theme.palette.primary.main, 0.12),
                                        color: 'primary.main',
                                        '&:hover': {
                                            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.18),
                                        },
                                        '& .MuiListItemIcon-root': {
                                            color: 'primary.main',
                                        },
                                    },
                                    '&:hover': {
                                        bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
                                        transform: 'translateX(4px)',
                                    },
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 40,
                                        transition: 'color 0.3s ease',
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={item.text}
                                    primaryTypographyProps={{
                                        fontWeight: pathname === item.path ? 'bold' : 'medium',
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider sx={{ my: 2 }} />
                <List>
                    <ListItem disablePadding sx={{ px: 1 }}>
                        <ListItemButton
                            onClick={handleLogout}
                            sx={{
                                borderRadius: 2,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    bgcolor: (theme) => alpha(theme.palette.error.main, 0.08),
                                    color: 'error.main',
                                    transform: 'translateX(4px)',
                                    '& .MuiListItemIcon-root': {
                                        color: 'error.main',
                                    },
                                },
                            }}
                        >
                            <ListItemIcon sx={{ minWidth: 40 }}>
                                <LogoutIcon />
                            </ListItemIcon>
                            <ListItemText primary="Logout" primaryTypographyProps={{ fontWeight: 'medium' }} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    );
}
