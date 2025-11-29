export interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    stock: number;
    status: 'In Stock' | 'Low Stock' | 'Out of Stock';
}

export const products: Product[] = [
    {
        id: '1',
        name: 'Wireless Headphones',
        category: 'Electronics',
        price: 99.99,
        stock: 45,
        status: 'In Stock',
    },
    {
        id: '2',
        name: 'Smart Watch',
        category: 'Electronics',
        price: 149.50,
        stock: 12,
        status: 'Low Stock',
    },
    {
        id: '3',
        name: 'Running Shoes',
        category: 'Fashion',
        price: 79.99,
        stock: 0,
        status: 'Out of Stock',
    },
    {
        id: '4',
        name: 'Leather Wallet',
        category: 'Accessories',
        price: 35.00,
        stock: 100,
        status: 'In Stock',
    },
    {
        id: '5',
        name: 'Gaming Mouse',
        category: 'Electronics',
        price: 59.99,
        stock: 25,
        status: 'In Stock',
    },
];
