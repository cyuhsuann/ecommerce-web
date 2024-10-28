import { atom } from "jotai";

export const products = atom([
    {
        id: 1,
        name: 'Tea Pot Set',
        image: '/products/IMG_5331.png',
        price: 300,
        priceId: 'price_1QCFIuBmewR921WbydIvQebI',
        stock: 10,
        description: 'Artist-- YuChi'
    },
    {
        id: 2,
        name: 'Tea Cup * 4',
        image: '/products/IMG_5332.png',
        price: 120,
        priceId: 'price_1QCFK1BmewR921WbGzRtnWkt',
        stock: 20,
        description: 'Artist-- YuChi'
    },
    {
        id: 3,
        name: 'Tea Pot',
        image: '/products/IMG_5333.png',
        price: 180,
        priceId: 'price_1QCFKqBmewR921Wbzepc42Qm',
        stock: 15,
        description: 'Artist-- YuChi'
    },
    {
        id: 4,
        name: 'Tea Pot Set - Dark',
        image: '/products/IMG_5331.png',
        price: 320,
        priceId: 'price_1QCFLCBmewR921WbClEVtBar',
        stock: 16,
        description: 'Artist-- YuChi'
    },
    {
        id: 5,
        name: 'Tea Cup * 8',
        image: '/products/IMG_5332.png',
        price: 200,
        priceId: 'price_1QCFLvBmewR921WbkaimbwCt',
        stock: 9,
        description: 'Artist-- YuChi'
    },
    {
        id: 6,
        name: 'Tea Pot - Special',
        image: '/products/IMG_5333.png',
        price: 350,
        priceId: 'price_1QCFMOBmewR921WbOEq8fCFh',
        stock: 6,
        description: 'Artist-- YuChi'
    },
]);

export const productPrice = atom({
    product1: 'price_1QCFIuBmewR921WbydIvQebI',
    product2: 'price_1QCFK1BmewR921WbGzRtnWkt',
    product3: 'price_1QCFKqBmewR921Wbzepc42Qm',
    product4: 'price_1QCFLCBmewR921WbClEVtBar',
    product5: 'price_1QCFLvBmewR921WbkaimbwCt',
    product6: 'price_1QCFMOBmewR921WbOEq8fCFh',
})

