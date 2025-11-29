import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import productReducer from './productSlice';
import analyticsReducer from './analyticsSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productReducer,
        analytics: analyticsReducer,
        // Add other reducers here
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
