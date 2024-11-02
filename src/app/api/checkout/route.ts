// 'use server'
import { type NextRequest, NextResponse } from "next/server";
import Stripe from 'stripe';
import { type CartItem } from "~/app/products/type";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
export const nextUrl = process.env.NEXTAUTH_URL
const logRequest = (verb: string) => { console.log(`${verb} Request Received`) }


// export async function GET() {
//     logRequest("GET")
//     return new NextResponse(JSON.stringify({ code: "*********GET" }), { status: 200 })
// }


export async function POST(req: NextRequest) {
    logRequest("POST");
    // req.json().then((body) => {
    //     // Do something here
    // })


    // try {

    const { cart } = await req.json() as { cart: CartItem[] };
    console.log("********")
    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] =
        cart.map(item => ({
            price: item.product.priceId,
            quantity: item.quantity,
        }));

    console.log("@@@@@@@@")


    const session = await stripe.checkout.sessions.create({
        line_items,
        mode: 'payment',
        success_url: `${nextUrl}/checkout/?success=true`,
        cancel_url: `${nextUrl}/checkout/?canceled=true`,
    });
    return NextResponse.redirect(new URL(session.url!), { status: 303 });
    // } catch {
    //     return NextResponse.json(new Error, { status: 500 });
    // }
}