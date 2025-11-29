'use client';

import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Paper, IconButton, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Product } from '@/data/products';

interface ProductTableProps {
    products: Product[];
    onEdit: (product: Product) => void;
    onDelete: (id: string) => void;
}

export default function ProductTable({ products, onEdit, onDelete }: ProductTableProps) {
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'category', headerName: 'Category', width: 130 },
        { field: 'price', headerName: 'Price', width: 100, type: 'number', valueFormatter: (params) => `$${params}` },
        { field: 'stock', headerName: 'Stock', width: 100, type: 'number' },
        { field: 'status', headerName: 'Status', width: 130 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 120,
            sortable: false,
            renderCell: (params) => (
                <Box>
                    <IconButton onClick={() => onEdit(params.row as Product)} color="primary" size="small">
                        <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => onDelete(params.row.id)} color="error" size="small">
                        <DeleteIcon />
                    </IconButton>
                </Box>
            ),
        },
    ];

    return (
        <Paper sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={products}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Paper>
    );
}
