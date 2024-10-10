'use client'
import Image from "next/image";
import { data } from "./products";
import Link from "next/link";

import { Button } from "~/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "~/components/ui/sheet"
import { useState } from "react";
import { stripePage } from "~/app/script/stripe";


// NOTE: to show the list of the products
export function ProductItem() {

    // NOTE: Extremly important to connect to the other page, e.g. /cart wouldn't show up
    const handleAddtoCart = (id: number, name: string) => {
        // Because `localStorage` can only store string, using JSON to change its type
        // These 'cartItemId' and 'cartItemName' are VERY important, DO NOT use the same anme
        localStorage.setItem('cartItemId', JSON.stringify(id));
        localStorage.setItem('cartItemName', JSON.stringify(name));

    }

    const [quantity, setQuantity] = useState(1);

    function decreaseQuantity() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        } else {
            alert('Could not be less ...')
        }
    }

    function increaseQuantity() {
        if (quantity < 10) {
            setQuantity(quantity + 1);
        } else {
            alert('There is no more !');
        }
    }



    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-8">
            {/* NOTE: To show the each product */}
            {data.products.map((product) => {
                return (
                    <div key={product.id}>
                        <Image
                            src={product.image}
                            width={500}
                            height={500}
                            priority={true}
                            alt={product.name}
                        />
                        <p>{product.name}</p>
                        <p>$ {product.price}</p>

                        {/* NOTE: To show the item in the cart */}
                        <Sheet>
                            <SheetTrigger>Add to Cart</SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle>Cart</SheetTitle>
                                    <SheetDescription>Items in your cart</SheetDescription>
                                </SheetHeader>

                                <div>
                                    <Image
                                        src={product.image}
                                        width={0}
                                        height={0}
                                        style={{ width: "120px", height: "auto" }}
                                        priority={true}
                                        alt={product.name}
                                    />

                                    Item: {product.name} <br />
                                    Price: {product.price} <br />
                                    <Button onClick={decreaseQuantity}> - </Button>
                                    Quantity: {quantity}
                                    <Button onClick={increaseQuantity}> + </Button>
                                    <br />
                                    Total Price: ${quantity * product.price}
                                </div>
                                <Button onClick={stripePage}>Check_Out</Button> <br />
                                <br />
                                <Link href="/cart">
                                    <Button onClick={() =>
                                        handleAddtoCart(product.id, product.name)}
                                        className="btn btn-primary">View Cart</Button>
                                </Link>
                            </SheetContent>
                        </Sheet>
                    </div>
                )
            })}
        </div>
    )
}
