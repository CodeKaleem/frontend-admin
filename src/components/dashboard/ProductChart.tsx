'use client';

import { Paper, Typography, Box, Grow } from '@mui/material';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import { productPerformanceData } from '@/data/analytics';

export default function ProductChart() {
    return (
        <Grow in timeout={1000}>
            <Paper
                sx={{
                    p: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 400,
                    borderRadius: 2,
                    boxShadow: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        boxShadow: 6,
                    },
                }}
            >
                <Typography variant="h6" gutterBottom fontWeight="bold">
                    Top Products
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Best performing items
                </Typography>
                <Box sx={{ flexGrow: 1, minHeight: 0 }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={productPerformanceData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                            <XAxis dataKey="name" stroke="#666" />
                            <YAxis stroke="#666" />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: '#fff',
                                    border: '1px solid #e0e0e0',
                                    borderRadius: 8,
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                }}
                            />
                            <Legend />
                            <Bar dataKey="sales" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </Box>
            </Paper>
        </Grow>
    );
}
