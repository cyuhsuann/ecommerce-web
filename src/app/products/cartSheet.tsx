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


// NOTE: to show the list of the products
export function CartSheet({ product }: propProduct) {
    const stock = product.stock
    const { quantity, increaseQuantity, decreaseQuantity } = Calculation(stock);


    return (
        <div>
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

                        <p>Item: {product.name}</p>
                        <p>Price: {product.price}</p>
                        <Button onClick={decreaseQuantity}> - </Button>
                        Quantity: {quantity}
                        <Button onClick={increaseQuantity}> + </Button>
                        <br />
                        <p>Total Price: ${quantity * product.price}</p>
                    </div>

                    <form action="/api/checkout" method="POST">
                        <Button>Checkout</Button>
                    </form>

                </SheetContent>
            </Sheet>
        </div>
    )
}
