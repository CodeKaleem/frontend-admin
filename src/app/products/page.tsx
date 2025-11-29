'use client';

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, Typography, Fade, Chip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DashboardLayout from '@/components/layout/DashboardLayout';
import ProductTable from '@/components/products/ProductTable';
import ProductForm from '@/components/products/ProductForm';
import { RootState } from '@/store/store';
import { addProduct, updateProduct, deleteProduct } from '@/store/productSlice';
import { Product } from '@/data/products';
import { useAuth } from '@/hooks/useAuth';

export default function ProductsPage() {
    useAuth();
    const products = useSelector((state: RootState) => state.products.items);
    const dispatch = useDispatch();
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);

    const handleAdd = () => {
        setEditingProduct(null);
        setIsFormOpen(true);
    };

    const handleEdit = (product: Product) => {
        setEditingProduct(product);
        setIsFormOpen(true);
    };

    const handleDelete = (id: string) => {
        if (confirm('Are you sure you want to delete this product?')) {
            dispatch(deleteProduct(id));
        }
    };

    const handleFormSubmit = (data: Omit<Product, 'id'>) => {
        if (editingProduct) {
            dispatch(updateProduct({ ...data, id: editingProduct.id }));
        } else {
            dispatch(addProduct({ ...data, id: Date.now().toString() }));
        }
    };

    return (
        <DashboardLayout>
            <Fade in timeout={800}>
                <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                        <Box>
                            <Typography variant="h4" fontWeight="bold" gutterBottom>
                                Products
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                                <Typography variant="body1" color="text.secondary">
                                    Manage your product inventory
                                </Typography>
                                <Chip
                                    label={`${products.length} items`}
                                    size="small"
                                    color="primary"
                                    sx={{ fontWeight: 'bold' }}
                                />
                            </Box>
                        </Box>
                        <Button
                            variant="contained"
                            startIcon={<AddIcon />}
                            onClick={handleAdd}
                            sx={{
                                py: 1.5,
                                px: 3,
                                borderRadius: 2,
                                textTransform: 'none',
                                fontWeight: 'bold',
                                boxShadow: 3,
                                '&:hover': {
                                    boxShadow: 6,
                                    transform: 'translateY(-2px)',
                                },
                                transition: 'all 0.3s ease',
                            }}
                        >
                            Add Product
                        </Button>
                    </Box>
                    <ProductTable products={products} onEdit={handleEdit} onDelete={handleDelete} />
                    <ProductForm
                        open={isFormOpen}
                        onClose={() => setIsFormOpen(false)}
                        onSubmit={handleFormSubmit}
                        initialData={editingProduct}
                    />
                </Box>
            </Fade>
        </DashboardLayout>
    );
}
