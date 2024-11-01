'use server'
import { NextRequest, NextResponse } from "next/server";
import Stripe from 'stripe';
import { CartItem } from "~/app/products/type";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
const nextUrl = process.env.NEXTAUTH_URL
const logRequest = (verb: string) => { console.log(`${verb} Request Received`) }


function transformToLineItem() {
    const lines = [{
        price: 'price_1QCFK1BmewR921WbGzRtnWkt',
        quantity: 3
    }]
    return lines
}

export async function GET() {
    logRequest("GET")
    return new NextResponse(JSON.stringify({ code: "*********GET" }), { status: 200 })
}


export async function POST(req: NextRequest) {
    logRequest("POST");
    try {

        const line_items = transformToLineItem()
        const session = await stripe.checkout.sessions.create({
            line_items,
            mode: 'payment',
            success_url: `${nextUrl}/checkout/?success=true`,
            cancel_url: `${nextUrl}/checkout/?canceled=true`,
        });
        return NextResponse.redirect(new URL(session.url!), { status: 303 });
    } catch {
        return NextResponse.json(new Error, { status: 500 });
    }
}