import { useState } from "react";

export function Calculation() {
    const [quantity, setQuantity] = useState<number>(1);

    function decreaseQuantity(): void {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        } else {
            alert('Could not be less ...')
        }
    };

    function increaseQuantity(): void {
        if (quantity < 10) {
            setQuantity(quantity + 1);
        } else {
            alert('There is no more !');
        }
    };

    return { quantity, decreaseQuantity, increaseQuantity };
}