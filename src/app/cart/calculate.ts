'use client'
import { useEffect, useState } from "react"
import { data } from "../gallery/products/[id]/products";


// NOTE: `type` is more flexible while `interface` is to describe the shape of an object.
type Item = {
    id: number;
    name: string;
    stock: number;
    price: number;
}

type CartItem = {
    cartItemId: number | null;
    cartItemName: string | null;
    quantity: number;
    stock: number;
    price: number;
    shippingType: string;
    shippingFee: number;
    // NOTE: `void` is used where there is no data as return type
    setQuantity: (quantity: number) => void;
    setShippingType: (type: string) => void;
    setShippingFee: (fee: number) => void;
    cartList: string[];
    setCartList: (items: string[]) => void;
}

const Product = data.products

// TODO: Check what does the parameter do !!!🤚🤚🤚
export default function CartItemData(item: { products: Item[] }): CartItem {

    // NOTE: `useState` is used to store item's ID and NAME
    // NOTE: `cartItemId` is initially set to NULL, unless `setCartItemId` function 
    // is used to update the state; ...rest of them do the same job.
    const [cartItemId, setCartItemId] = useState<number | null>(null);
    const [cartItemName, setCartItemName] = useState<string | null>(null);
    const [quantity, setQuantity] = useState<number>(1);
    const [stock, setStock] = useState<number>(0);
    const [price, setPrice] = useState<number>(0);
    const [shippingType, setShippingType] = useState<string>("delivery");
    const [shippingFee, setShippingFee] = useState<number>(20);
    const [cartList, setCartList] = useState<string[]>([]);//TODO: Have NOT finished it yet.💪💪💪

    // NOTE: `useEffect` is used to deal with "side effects", such as data require, DOM etc.
    // NOTE: As `[]` is a second parameter and empty, ensuring useEffect only uses once.
    useEffect(() => {
        const id = JSON.parse(localStorage.getItem('cartItemId') || 'null');
        const name = JSON.parse(localStorage.getItem('cartItemName') || 'null');

        setCartItemId(id);
        setCartItemName(name);

        if (id !== null) {
            const product = Product.find((product) => product.id === id);
            if (product) {
                setStock(product.stock); // NOTE: Get the stock of the product.
                setQuantity(1) // NOTE: Default to 1.
                setPrice(product.price)
            }
        }
        // TODO: Check what is `[data.products]` for 🤚🤚🤚
    }, [item.products]);

    return { //NOTE: If without `type CartItem`, they would cause error
        cartItemId,
        cartItemName,
        quantity,
        stock,
        price,
        shippingType,
        shippingFee,
        setQuantity,
        setShippingType,
        setShippingFee,
        cartList,
        setCartList
    }
}

// TODO: Have NOT finished it yet. To store more then one product. 💪💪💪
// export function handleAddtoCart (id: number, name: string) {
//     setCartList((preList) => {
//         const existItem = preList.find((product) => product.id === id)
//     })
// }


// NOTE: Create increase and decrease functions' button
export function increaseQuantity(quantity: number, stock: number,
    setQuantity: (value: number) => void
) {
    if (quantity < stock) {
        setQuantity(quantity + 1);
    } else {
        alert('There is no more !');
    }
}


export function decreaseQuantity(quantity: number, setQuantity: (value: number) => void
) {
    if (quantity > 1) {
        setQuantity(quantity - 1);
    }
}

export function countShipping(
    value: string,
    setShippingFee: (value: number) => void,
    setShippingType: (value: string) => void
) {
    setShippingType(value)
    if (value === 'delivery') {
        setShippingFee(20)
    } else {
        setShippingFee(0)
    }
}

export function calculateSubtotal(quantity: number, price: number): number {
    return quantity * price
}

export function calculateTotal(quantity: number, price: number, shippingFee: number): number {
    return (quantity * price) + shippingFee
}