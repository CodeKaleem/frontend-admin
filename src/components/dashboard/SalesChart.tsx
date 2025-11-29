'use client';

import { Paper, Typography, Box, Grow } from '@mui/material';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import { salesData } from '@/data/analytics';

export default function SalesChart() {
    return (
        <Grow in timeout={800}>
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
                    Sales Overview
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Monthly sales and orders trend
                </Typography>
                <Box sx={{ flexGrow: 1, minHeight: 0 }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={salesData}>
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
                            <Line
                                type="monotone"
                                dataKey="sales"
                                stroke="#3b82f6"
                                strokeWidth={3}
                                dot={{ fill: '#3b82f6', r: 5 }}
                                activeDot={{ r: 8 }}
                            />
                            <Line
                                type="monotone"
                                dataKey="orders"
                                stroke="#10b981"
                                strokeWidth={3}
                                dot={{ fill: '#10b981', r: 5 }}
                                activeDot={{ r: 8 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </Box>
            </Paper>
        </Grow>
    );
}
