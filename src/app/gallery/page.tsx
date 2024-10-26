'use client';

import { products } from "../products/[id]/products";
import ProductItem from "../products/productItem";
import { Provider, useAtom } from 'jotai'
import { Product } from "../products/type";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "~/components/ui/sheet";
import Image from "next/image";
import { Button } from "~/components/ui/button";
import { Calculation } from "../tools/calculation";


export default function Page() {
    const [product, setProduct] = useAtom(products);
    const stock = product.map(item => item.stock)
    const { quantity, increaseQuantity, decreaseQuantity } = Calculation(10);
    function addToCart() {
        console.log("LALALALA~~~")
    };

    return (
        <main>
            <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
                <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
                    Pottery <span className="text-[hsl(280,100%,70%)]">Gallery</span>
                </h1>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-8">
                {/* NOTE: To show the each product */}
                {product.map((product: Product) => {
                    return (
                        <div key={product.id}>
                            <ProductItem product={product} />
                            <Button onClick={addToCart}>add to Cart</Button>
                        </div>
                    )
                })}
            </div>
            <div>
                {/* //
                {for _ in list: <Component addItem={(quantity)=>addToCart(itemId, quantity)}></Component>}
                {/* Inside component *}
                <Button onClick={addItem(quantity)}></Button>
                /* end inside component *}
                // */}
                <Sheet>
                    <SheetTrigger>Show the Cart</SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Cart</SheetTitle>
                            <SheetDescription>Items in your cart</SheetDescription>
                        </SheetHeader>
                        {product.map(product => {
                            return (
                                <div key={product.id}>
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
                            )
                        })}
                        {/* IMPROTANT JST LEAVE THERE FROM NOW
                        <form action="/api/checkout" method="POST">
                            <Button>Checkout</Button>
                        </form> */}

                    </SheetContent>
                </Sheet>
            </div>
        </main>
    )
}