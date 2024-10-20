'use server'
import { NextResponse } from "next/server";
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

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
                    price: 'price_1Q8xomBmewR921WbEPn531NF',
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: 'http://localhost:3000/gallery/checkout/?success=true',
            cancel_url: 'http://localhost:3000/gallery/checkout/?canceled=true',
        });
        return NextResponse.redirect(new URL(session.url!), { status: 303 });
    } catch {
        return NextResponse.json(new Error, { status: 500 });
    }
}