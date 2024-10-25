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
import { CartItem, propProduct } from "./type";




// NOTE: Show the list of the products in the cart
export function CartSheet({ product }: propProduct) {
    const stock = product.stock
    const { quantity, increaseQuantity, decreaseQuantity } = Calculation(stock);

    // NOTE: Manage the cart status
    const [cart, setCart] = useState<CartItem[]>([]);

    function addToCart() {
        setCart((prevCart: any) => {
            console.log('******', prevCart, { product, quantity: 1 })
            return prevCart
        })
    };

    return (

        <div>
            {/* NOTE: To show the item in the cart */}
            <Sheet>
                <SheetTrigger onClick={addToCart}>add to Cart</SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Cart</SheetTitle>
                        <SheetDescription>Items in your cart</SheetDescription>
                    </SheetHeader>
                    <div>
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


                        {/* IMPROTANT JST LEAVE THERE FROM NOW
                        <form action="/api/checkout" method="POST">
                            <Button>Checkout</Button>
                        </form> */}

                    </div>



                </SheetContent>
            </Sheet>
        </div>

    )
}