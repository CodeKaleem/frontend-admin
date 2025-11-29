import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { products, Product } from '@/data/products';

interface ProductState {
    items: Product[];
}

const initialState: ProductState = {
    items: products,
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            state.items.push(action.payload);
        },
        updateProduct: (state, action: PayloadAction<Product>) => {
            const index = state.items.findIndex((p) => p.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = action.payload;
            }
        },
        deleteProduct: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter((p) => p.id !== action.payload);
        },
    },
});

export const { addProduct, updateProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;
