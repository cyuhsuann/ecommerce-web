import { type CartItem } from "../products/type";

export function decreaseQuantity(cart: CartItem[],
    setCart: (cart: CartItem[]) => void, productId: number) {
    // NOTE: use setCart to update the items in the cart
    setCart(cart.map((item: CartItem): CartItem => {
        if (item.product.id === productId) {
            if (item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            } else {
                alert('Could not be less ...');
                return item;
            }
        }
        return item;
    }))
}

export function increaseQuantity(cart: CartItem[],
    setCart: (cart: CartItem[]) => void, productId: number) {
    setCart(cart.map((item: CartItem): CartItem => {
        if (item.product.id === productId) {
            if (item.quantity < item.product.stock) {
                return { ...item, quantity: item.quantity + 1 };
            } else {
                alert('There is no more !');
                return item;
            }
        }
        return item;
    }))
}