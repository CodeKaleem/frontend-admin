'use client';

import { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, MenuItem } from '@mui/material';
import { Product } from '@/data/products';

const schema = yup.object({
    name: yup.string().required('Name is required'),
    category: yup.string().required('Category is required'),
    price: yup.number().positive().required('Price is required'),
    stock: yup.number().integer().min(0).required('Stock is required'),
    status: yup.string().oneOf(['In Stock', 'Low Stock', 'Out of Stock'] as const).required('Status is required'),
}).required();

interface ProductFormProps {
    open: boolean;
    onClose: () => void;
    onSubmit: (data: Omit<Product, 'id'>) => void;
    initialData?: Product | null;
}

export default function ProductForm({ open, onClose, onSubmit, initialData }: ProductFormProps) {
    const { control, handleSubmit, reset, setValue } = useForm<yup.InferType<typeof schema>>({
        resolver: yupResolver(schema),
        defaultValues: {
            name: '',
            category: '',
            price: 0,
            stock: 0,
            status: 'In Stock',
        },
    });

    useEffect(() => {
        if (initialData) {
            setValue('name', initialData.name);
            setValue('category', initialData.category);
            setValue('price', initialData.price);
            setValue('stock', initialData.stock);
            setValue('status', initialData.status);
        } else {
            reset({
                name: '',
                category: '',
                price: 0,
                stock: 0,
                status: 'In Stock',
            });
        }
    }, [initialData, setValue, reset]);

    const onFormSubmit = (data: any) => {
        onSubmit(data);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{initialData ? 'Edit Product' : 'Add Product'}</DialogTitle>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <DialogContent>
                    <Controller
                        name="name"
                        control={control}
                        render={({ field, fieldState: { error } }) => (
                            <TextField
                                {...field}
                                label="Name"
                                fullWidth
                                margin="normal"
                                error={!!error}
                                helperText={error?.message}
                            />
                        )}
                    />
                    <Controller
                        name="category"
                        control={control}
                        render={({ field, fieldState: { error } }) => (
                            <TextField
                                {...field}
                                label="Category"
                                fullWidth
                                margin="normal"
                                error={!!error}
                                helperText={error?.message}
                            />
                        )}
                    />
                    <Controller
                        name="price"
                        control={control}
                        render={({ field, fieldState: { error } }) => (
                            <TextField
                                {...field}
                                label="Price"
                                type="number"
                                fullWidth
                                margin="normal"
                                error={!!error}
                                helperText={error?.message}
                            />
                        )}
                    />
                    <Controller
                        name="stock"
                        control={control}
                        render={({ field, fieldState: { error } }) => (
                            <TextField
                                {...field}
                                label="Stock"
                                type="number"
                                fullWidth
                                margin="normal"
                                error={!!error}
                                helperText={error?.message}
                            />
                        )}
                    />
                    <Controller
                        name="status"
                        control={control}
                        render={({ field, fieldState: { error } }) => (
                            <TextField
                                {...field}
                                select
                                label="Status"
                                fullWidth
                                margin="normal"
                                error={!!error}
                                helperText={error?.message}
                            >
                                <MenuItem value="In Stock">In Stock</MenuItem>
                                <MenuItem value="Low Stock">Low Stock</MenuItem>
                                <MenuItem value="Out of Stock">Out of Stock</MenuItem>
                            </TextField>
                        )}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button type="submit" variant="contained">
                        Save
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}
