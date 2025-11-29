'use client';

import { Card, CardContent, Typography, Box, alpha, Grow } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

interface KPICardProps {
    title: string;
    value: string | number;
    icon: React.ReactNode;
    color: string;
    trend?: string;
}

export default function KPICard({ title, value, icon, color, trend = '+12%' }: KPICardProps) {
    return (
        <Grow in timeout={600}>
            <Card
                sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    overflow: 'visible',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: 6,
                    },
                    borderRadius: 2,
                    background: `linear-gradient(135deg, ${alpha(color, 0.05)} 0%, ${alpha(color, 0.15)} 100%)`,
                    border: `1px solid ${alpha(color, 0.2)}`,
                }}
            >
                <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <Box>
                            <Typography color="text.secondary" variant="body2" gutterBottom fontWeight="medium">
                                {title}
                            </Typography>
                            <Typography variant="h4" component="div" fontWeight="bold" sx={{ mb: 1 }}>
                                {value}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                <TrendingUpIcon sx={{ fontSize: 16, color: 'success.main' }} />
                                <Typography variant="caption" color="success.main" fontWeight="bold">
                                    {trend}
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                    vs last month
                                </Typography>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                p: 1.5,
                                borderRadius: 2,
                                bgcolor: color,
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: `0 4px 12px ${alpha(color, 0.4)}`,
                            }}
                        >
                            {icon}
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Grow>
    );
}
