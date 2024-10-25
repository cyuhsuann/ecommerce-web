export type Product = {
    id: number;
    name: string;
    image: string;
    price: number;
    stock: number;
}

export type propProduct = {
    product: Product
}

export type CartItem = {
    product: Product;
    quantity: number;
}