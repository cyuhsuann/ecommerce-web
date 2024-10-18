'use client'

import Image from "next/image";
import { Calculation } from "../hooks/calculation";
import { CheckoutStatus } from "../checkout/checkoutStatus";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "~/components/ui/sheet"
import { Button } from "~/components/ui/button";

type Product = {
    id: number;
    name: string;
    image: string;
    price: number;
    stock: number;
}

type propProduct = {
    product: Product
}

export default function CartSheet({ product }: propProduct) {
    const { quantity, increaseQuantity, decreaseQuantity } = Calculation();
    const { isSuccess, isCanceled } = CheckoutStatus();

    return (
        <div>
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
                        <p>Quantity: {quantity}</p>
                        <Button onClick={increaseQuantity}> + </Button>

                        <p>Total Price: ${quantity * product.price}</p>
                    </div>

                    <form action="/api/checkout" method="POST">
                        <Button>Checkout</Button>
                        {isSuccess && <p>Order placed! You will receive an email confirmation.</p>}
                        {isCanceled && <p>Order canceled -- Continue to shop around and checkout when you’re ready.</p>}
                    </form>

                </SheetContent>
            </Sheet>
        </div>
    )
}