'use client';

import { products } from "../products/[id]/products";
import ProductItem from "../products/productItem";
import { atom, useAtom } from 'jotai'
import { type CartItem, Product, propProduct } from "../products/type";
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
import { decreaseQuantity, increaseQuantity } from "../tools/calculation";


const cartAtom = atom<CartItem[]>([]);

export default function Page() {
    const [product] = useAtom(products);
    const [cart, setCart] = useAtom<CartItem[]>(cartAtom);

    function addToCart(selectedItem: Product) {
        setCart((prevCart: CartItem[]): any => {
            const existedItem = prevCart.find((item: any) => item.product.id === selectedItem.id)
            if (existedItem) {
                return prevCart;
            } else {
                return [...prevCart, { product: selectedItem, quantity: 1 }]
            }
        })
    };

    return (
        <main>
            <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
                <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
                    Pottery <span className="text-[hsl(280,100%,70%)]">Gallery</span>
                </h1>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-8">
                {product.map((product: Product): any => {
                    return (
                        <div key={product.id}>
                            <ProductItem product={product} />
                            <Button onClick={() => addToCart(product)}>add to Cart</Button>
                        </div>
                    )
                })}
            </div>
            <div>
                <Sheet>
                    <SheetTrigger>Show Cart</SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Cart</SheetTitle>
                            <SheetDescription>Items in your cart</SheetDescription>
                        </SheetHeader>
                        here we are
                        {cart.map((item: CartItem) => {
                            return (
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
                                    <p>Price: {item.product.price}
                                        <Button onClick={() => decreaseQuantity(cart, setCart, item.product.id)}> - </Button>
                                        Quantity: {item.quantity}
                                        <Button onClick={() => increaseQuantity(cart, setCart, item.product.id)}> + </Button>
                                    </p>
                                    <p>Subtotal: ${item.quantity * item.product.price}</p>
                                </div>
                            )
                        })}
                        <br />
                        <div>
                            <form action="/api/checkout" method="POST">
                                <Button>Checkout</Button>
                            </form>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </main>
    )
}