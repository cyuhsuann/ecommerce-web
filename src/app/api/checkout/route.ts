// NOTE: NextRequest and NextReponse will only work for middleware, and not for 
// pages or components, so there is a specific command line for it. If it does 
// not have a command line above it, then it will cause an error, like: 
// Imports "NextRequest" are only used as type.

// eslint-disable-next-line
import { NextRequest, NextResponse } from "next/server";
import Stripe from 'stripe';

// NOTE: Instead using `require()`, should use `Stripe()`
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)


async function handler(req: NextRequest) {
    if (req.method === 'GET') {
        return new NextResponse("GET from Pottery gallery", {
            status: 200
        })
    }

    else if (req.method === 'POST') {
        try {
            // Create Checkout Sessions from body params.
            const session = await stripe.checkout.sessions.create({
                line_items: [
                    {
                        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                        price: 'price_1Q8xomBmewR921WbEPn531NF',
                        quantity: 1,
                    },
                ],
                mode: 'payment',
                // NOTE: Now, leaving the URLs connect to checkout page.
                // success_url: `${req.headers}/?success=true`,
                success_url: 'http://localhost:3000/gallery/checkout/?success=true',
                // cancel_url: `${req.headers}/?canceled=true`,
                cancel_url: 'http://localhost:3000/gallery/checkout/?canceled=true',
            });
            return NextResponse.redirect(new URL(session.url!), {
                status: 303,
            });

        } catch {
            return NextResponse.json(new Error, {
                status: 500
            });
        }
    } else {
        if (req.method !== 'POST') {
            return new NextResponse('Method Not Allowed', {
                status: 405,
                headers: {
                    Allow: 'POST'
                }
            })
        }
        return NextResponse.json({ name: "Jane Doe" }, { status: 200 });
        // NOTE: Original code:
        // res.setHeaders('Allow', 'POST');
        // res.status(405).end('Method Not Allowed');
        // res.status(200).json({ name: "Jane Doe" });
    }
}

// NOTE: This export is important for the Stripe page.
export { handler as POST };