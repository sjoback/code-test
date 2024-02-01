export interface Cart {
    id: string;
    products: Product[];
    delivery: string;
}

interface Product {
    id: string;
    quantity: number;
    name: string;
    imageUrl: string;
    price: number;
    originalPrice: number;
}
