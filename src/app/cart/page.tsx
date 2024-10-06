'use client'
import { useEffect, useState } from "react"
import { data } from "../gallery/products/[id]/products";
import { Button } from "~/components/ui/button"
import { Label } from "~/components/ui/label"
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group"


export default function Page() {

    // NOTE: `useState` is used to store item's ID and NAME
    // NOTE: `cartItemId` is initially set to NULL, unless `setCartItemId` function 
    // is used to update the state; ...NAME does the same.
    const [cartItemId, setCartItemId] = useState<number | null>(null);
    const [cartItemName, setCartItemName] = useState<string | null>(null);
    const [quantity, setQuantity] = useState<number>(1);
    const [stock, setStock] = useState<number>(0);
    const [price, setPrice] = useState<number>(0);
    const [typeOfshipping, setshipping] = useState<string>("delivery");
    const [shippingFee, setShipping] = useState<number>(20);

    // NOTE: `useEffect` is used to deal with "side effects", such as data require, DOM etc.
    // NOTE: As `[]` is a second parameter and empty, ensuring useEffect only uses once.
    useEffect(() => {
        const id = JSON.parse(localStorage.getItem('cartItemId') || 'null');
        const name = JSON.parse(localStorage.getItem('cartItemName') || 'null');

        setCartItemId(id);
        setCartItemName(name);

        if (id !== null) {
            const product = data.products.find((product) => product.id === id);
            if (product) {
                setStock(product.stock); // NOTE: Get the stock of the product.
                setQuantity(1) // NOTE: Default to 1.
                setPrice(product.price)
            }
        }
    }, []);

    // NOTE: Create increase and decrease functions' button
    const increaseQuantity = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        } else {
            alert('There is no more !');
        }
    }

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    const countShipping = (value: string) => {
        setshipping(value)
        if (value === 'delivery') {
            setShipping(20)
        } else {
            setShipping(0)
        }
    }

    return (
        <main>
            <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
                <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
                    Cart
                </h1>

                {/* NOTE: If `cartItemId` exits, it would show detail; otherwise it's NULL shows the message. */}
                {cartItemId ? (
                    <div className="text-5xl tracking sm:text-[1.5rem]">
                        <p>Item in cart:  {cartItemName} | Quantity: {quantity} | Price: {price}</p>
                        <Button onClick={decreaseQuantity}> - </Button>
                        <span>   {quantity}   </span>
                        <Button onClick={increaseQuantity}> + </Button>
                        {/* <p>Sub-total: ${quantity * (data.products.find(product => product.id === cartItemId)?.price || 0)}</p> */}
                        <p>SubTotal: ${quantity * price}</p>
                    </div>
                ) : (<p>No items in cart.</p>)}

                <div>
                    <RadioGroup defaultValue={typeOfshipping} onValueChange={countShipping}>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="delivery" id="delivery" />
                            <Label htmlFor="delivery">Delivery</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="pickup" id="pickup" />
                            <Label htmlFor="pickup">Pick-Up</Label>
                        </div>
                    </RadioGroup>
                </div>
                <div>
                    Total Price: ${(quantity * price) + shippingFee}
                </div>
            </div>
        </main>
    )
}