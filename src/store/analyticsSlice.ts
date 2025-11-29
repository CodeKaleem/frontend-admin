import { createSlice } from '@reduxjs/toolkit';
import { salesData, productPerformanceData, kpiData } from '@/data/analytics';

const initialState = {
    sales: salesData,
    performance: productPerformanceData,
    kpi: kpiData,
};

const analyticsSlice = createSlice({
    name: 'analytics',
    initialState,
    reducers: {
        // Add reducers for updating analytics if needed
    },
});

export default analyticsSlice.reducer;
