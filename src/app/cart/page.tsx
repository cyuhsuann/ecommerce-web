// 'use client'
// import { data } from "../gallery/products/[id]/products";
// import { Button } from "~/components/ui/button"
// import { Label } from "~/components/ui/label"
// import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group"
// import Link from "next/link";
// import CartItemData, {
//     increaseQuantity, decreaseQuantity, countShipping,
//     calculateSubtotal, calculateTotal
// } from "./calculate";


// export default function Page() {

//     // TODO: Check what is this doing🤚🤚🤚
//     const {
//         cartItemId,
//         cartItemName,
//         quantity,
//         stock,
//         price,
//         shippingType,
//         shippingFee,
//         setQuantity,
//         setShippingType,
//         setShippingFee,
//         // cartList, //TODO: Have NOT finished it yet.💪💪💪
//         // setCartList
//     } = CartItemData(data)

//     const subtotal = calculateSubtotal(quantity, price)
//     const total = calculateTotal(quantity, price, shippingFee)

//     return (
//         <main>
//             <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
//                 <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
//                     Cart
//                 </h1>

//                 {/* NOTE: If `cartItemId` exits, it would show detail; otherwise it's NULL shows the message. */}
//                 {cartItemId ? (
//                     <div>
//                         * * * * * * * * * * * * * * * * <br />
//                         Item: {cartItemName} <br />
//                         Price: {price} <br />
//                         <Button onClick={() => decreaseQuantity(quantity, setQuantity)}> - </Button>
//                         Quantity: {quantity}
//                         <Button onClick={() => increaseQuantity(quantity, stock, setQuantity)}> + </Button>
//                         <br />
//                         Subtotal: ${subtotal}
//                     </div>
//                 ) : (<p>No items in cart.</p>)}


//                 <div>
//                     <RadioGroup defaultValue={shippingType} onValueChange={(value) => countShipping(value, setShippingFee, setShippingType)}>
//                         <div className="flex items-center space-x-2">
//                             <RadioGroupItem value="delivery" id="delivery" />
//                             <Label htmlFor="delivery">Delivery</Label>
//                         </div>
//                         <div className="flex items-center space-x-2">
//                             <RadioGroupItem value="pickup" id="pickup" />
//                             <Label htmlFor="pickup">Pick-Up</Label>
//                         </div>
//                     </RadioGroup>
//                 </div>

//                 <div>
//                     Total Price: ${total}
//                 </div>

//                 <Button><Link href="">Check Out</Link></Button>

//                 <Button><Link href="/gallery">Go Back to Shop</Link></Button>

//             </div>
//         </main>
//     )
// }