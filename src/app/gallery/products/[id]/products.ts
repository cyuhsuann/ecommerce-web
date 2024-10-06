export type productsType = {
    id: number;
    name: string;
    price: number;
    quantity: number
}

export const data = {
    products: [
        {
            id: 1,
            name: 'Tea Pot Set',
            image: '/products/IMG_5331.png',
            price: 120,
            stock: 10,
            description: 'Artist-- YuChi'
        },
        {
            id: 2,
            name: 'Tea Cup * 4',
            image: '/products/IMG_5332.png',
            price: 120,
            stock: 20,
            description: 'Artist-- YuChi'
        },
        {
            id: 3,
            name: 'Tea Pot',
            image: '/products/IMG_5333.png',
            price: 120,
            stock: 15,
            description: 'Artist-- YuChi'
        },
        {
            id: 4,
            name: 'Tea Pot Set - Dark',
            image: '/products/IMG_5331.png',
            price: 120,
            stock: 16,
            description: 'Artist-- YuChi'
        },
        {
            id: 5,
            name: 'Tea Cup * 8',
            image: '/products/IMG_5332.png',
            price: 120,
            stock: 9,
            description: 'Artist-- YuChi'
        },
        {
            id: 6,
            name: 'Tea Pot - Special',
            image: '/products/IMG_5333.png',
            price: 120,
            stock: 6,
            description: 'Artist-- YuChi'
        },
    ]
}