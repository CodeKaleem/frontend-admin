'use client';

import { Box, Typography, Grid, Paper, Fade, Chip } from '@mui/material';
import DashboardLayout from '@/components/layout/DashboardLayout';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    BarChart,
    Bar,
    PieChart,
    Pie,
    Cell,
} from 'recharts';
import { salesData, productPerformanceData } from '@/data/analytics';
import { useAuth } from '@/hooks/useAuth';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

const pieData = [
    { name: 'Electronics', value: 400 },
    { name: 'Clothing', value: 300 },
    { name: 'Home', value: 300 },
    { name: 'Books', value: 200 },
];

export default function AnalyticsPage() {
    useAuth();

    return (
        <DashboardLayout>
            <Fade in timeout={800}>
                <Box sx={{ flexGrow: 1 }}>
                    <Box sx={{ mb: 4 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                            <Typography variant="h4" fontWeight="bold">
                                Analytics Dashboard
                            </Typography>
                            <Chip
                                icon={<TrendingUpIcon />}
                                label="Live Data"
                                color="success"
                                size="small"
                                sx={{ fontWeight: 'bold' }}
                            />
                        </Box>
                        <Typography variant="body1" color="text.secondary">
                            Comprehensive insights into your business performance
                        </Typography>
                    </Box>

                    <Grid container spacing={3}>
                        {/* Sales Trend */}
                        <Grid size={{ xs: 12, md: 8 }}>
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
                                    Monthly Sales Trend
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                    Sales and orders over the last 6 months
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
                        </Grid>

                        {/* Category Distribution */}
                        <Grid size={{ xs: 12, md: 4 }}>
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
                                    Sales by Category
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                    Distribution across categories
                                </Typography>
                                <Box sx={{ flexGrow: 1, minHeight: 0 }}>
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <Pie
                                                data={pieData}
                                                cx="50%"
                                                cy="50%"
                                                labelLine={false}
                                                label={(entry) => entry.name}
                                                outerRadius={80}
                                                fill="#8884d8"
                                                dataKey="value"
                                            >
                                                {pieData.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                ))}
                                            </Pie>
                                            <Tooltip
                                                contentStyle={{
                                                    backgroundColor: '#fff',
                                                    border: '1px solid #e0e0e0',
                                                    borderRadius: 8,
                                                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                                }}
                                            />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </Box>
                            </Paper>
                        </Grid>

                        {/* Product Performance */}
                        <Grid size={{ xs: 12 }}>
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
                                    Product Performance
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                    Top performing products by sales and views
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
                                            <Bar dataKey="views" fill="#06b6d4" radius={[8, 8, 0, 0]} />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            </Fade>
        </DashboardLayout>
    );
}
