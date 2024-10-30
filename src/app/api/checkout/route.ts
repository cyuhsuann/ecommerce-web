'use server'
import { NextResponse } from "next/server";
import Stripe from 'stripe';
// NOTE: Have not used this one.
// import { productPrice } from "~/app/products/[id]/products";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
const nextUrl = process.env.NEXTAUTH_URL

const logRequest = (verb: string) => { console.log(`${verb} Request Received`) }

export async function GET() {
    logRequest("GET")
    return new NextResponse(JSON.stringify({ code: "*********GET" }), { status: 200 })
}


export async function POST() {
    logRequest("POST");
    try {
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                    //NOTE: similer like this: productPrice.product3, but it still wrong.
                    price: 'price_1QCFIuBmewR921WbydIvQebI',
                    quantity: 1,
                },
                {
                    // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                    price: 'price_1QCFKqBmewR921Wbzepc42Qm',
                    quantity: 2,
                },
            ],
            mode: 'payment',
            success_url: `${nextUrl}/checkout/?success=true`,
            cancel_url: `${nextUrl}/checkout/?canceled=true`,
        });
        return NextResponse.redirect(new URL(session.url!), { status: 303 });
    } catch {
        return NextResponse.json(new Error, { status: 500 });
    }
}