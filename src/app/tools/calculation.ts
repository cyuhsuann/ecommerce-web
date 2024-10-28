import { useState } from "react";


export function Calculation(stock: number) {
    const [quantity, setQuantity] = useState(0);

    function decreaseQuantity(): void {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        } else {
            alert('Could not be less ...')
        }
    };

    function increaseQuantity(): void {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        } else {
            alert('There is no more !');
        }
    };

    return { quantity, decreaseQuantity, increaseQuantity }
}