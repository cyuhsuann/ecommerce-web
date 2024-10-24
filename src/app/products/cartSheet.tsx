'use client'
import Image from "next/image";
import { Calculation } from "../tools/calculation";

import { Button } from "~/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "~/components/ui/sheet";
import { useState } from "react";


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



// NOTE: Show the list of the products in the cart
export function CartSheet({ product }: propProduct) {
    const stock = product.stock
    const { quantity, increaseQuantity, decreaseQuantity } = Calculation(stock);

    // NOTE: Manage the cart status
    const [cart, setCart] = useState<CartItem[]>([]);
    const [likes, setLikes] = useState(0)

    function addToCart() {
        setCart(prevCart => {
            // console.log("””sgfcsbdヴィウセ”、", prevCart)
            // prevCart.push({ product, quantity: 1 })
            // const selectedItemIndex = prevCart.map(item => item.product.id === product.id);
            // console.log('**********', selectedItemIndex)
            // return prevCart

            const selectedItemIndex = prevCart.findIndex(item => item.product.id === product.id);

            if (selectedItemIndex === -1) {
                return [...prevCart, { product, quantity: 1 }];
            } else {
                const updatedCart = prevCart.map((item, index) => {
                    if (index === selectedItemIndex) {
                        return { ...item, quantity: item.quantity + 1 };
                    }
                    return item;
                });
                return updatedCart;
            }
        });
    };


    function pauseLike() {
        setLikes(likes + 1);
        console.log("+1")
    }


    return (

        <div>
            {/* NOTE: To show the item in the cart */}
            <Sheet>
                <SheetTrigger>Show Cart</SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Cart</SheetTitle>
                        <SheetDescription>Items in your cart</SheetDescription>
                    </SheetHeader>

                    <div>
                        {cart.length > 0 ? cart.map((item) => (
                            <div key={item.product.id}>
                                <Image
                                    src={item.product.image}
                                    width={0}
                                    height={0}
                                    style={{ width: "120px", height: "auto" }}
                                    priority={true}
                                    alt={item.product.name}
                                />

                                <p>Item: {item.product.name}</p>
                                <p>Price: {item.product.price}</p>
                                <Button onClick={decreaseQuantity}> - </Button>
                                Quantity: {item.quantity}
                                <Button onClick={increaseQuantity}> + </Button>
                                <br />
                                <p>Total Price: ${item.quantity * item.product.price}</p>
                            </div>
                        )) : <p>Your cart is empty.</p>}
                    </div>

                    <form action="/api/checkout" method="POST">
                        <Button>Checkout</Button>
                    </form>
                    <Button onClick={addToCart}>Click me!</Button>

                    <Button onClick={pauseLike}>Like {likes}</Button>

                </SheetContent>
            </Sheet>
        </div>
    )
}
