'use client';

import { Grid, Box, Typography, Fade } from '@mui/material';
import DashboardLayout from '@/components/layout/DashboardLayout';
import KPICard from '@/components/dashboard/KPICard';
import SalesChart from '@/components/dashboard/SalesChart';
import ProductChart from '@/components/dashboard/ProductChart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InventoryIcon from '@mui/icons-material/Inventory';
import { kpiData } from '@/data/analytics';
import { useAuth } from '@/hooks/useAuth';

export default function DashboardPage() {
    useAuth();

    return (
        <DashboardLayout>
            <Fade in timeout={800}>
                <Box sx={{ flexGrow: 1 }}>
                    <Box sx={{ mb: 4 }}>
                        <Typography variant="h4" fontWeight="bold" gutterBottom>
                            Dashboard Overview
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Welcome back! Here's what's happening with your store today.
                        </Typography>
                    </Box>

                    <Grid container spacing={3}>
                        {/* KPI Cards */}
                        <Grid size={{ xs: 12, md: 4 }}>
                            <KPICard
                                title="Total Sales"
                                value={`$${kpiData.totalSales.toLocaleString()}`}
                                icon={<AttachMoneyIcon fontSize="large" />}
                                color="#10b981"
                                trend="+15.3%"
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <KPICard
                                title="Total Orders"
                                value={kpiData.totalOrders.toLocaleString()}
                                icon={<ShoppingCartIcon fontSize="large" />}
                                color="#3b82f6"
                                trend="+8.2%"
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <KPICard
                                title="Total Products"
                                value={kpiData.totalProducts}
                                icon={<InventoryIcon fontSize="large" />}
                                color="#f59e0b"
                                trend="+3.1%"
                            />
                        </Grid>

                        {/* Charts */}
                        <Grid size={{ xs: 12, md: 8 }}>
                            <SalesChart />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <ProductChart />
                        </Grid>
                    </Grid>
                </Box>
            </Fade>
        </DashboardLayout>
    );
}
