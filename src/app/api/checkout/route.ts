import { NextRequest, NextResponse } from "next/server";

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

function GET(req: NextRequest, res: NextResponse) {
    return new Response(JSON.stringify({ code: "Hello Yooshie" }), {
        status: 200
    })
}

async function handler(req: NextRequest, res: NextResponse) {
    if (req.method === 'GET') {
        console.log(res)
        console.log("\n\n\n\n\n\n")
        console.log("********    here Fack POST")

        return new NextResponse("Hello", {
            status: 200
        })
        // NOTE: Same as the one above.
        // return new Response(JSON.stringify({ code: "Hello ~ ~ ~ " }), {
        //     status: 200
        // })
    }
    else if (req.method === 'POST') {
        try {
            console.log("********    here success", JSON.stringify(req.headers))
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
                // success_url: `${req.headers}/?success=true`,
                success_url: 'https://example.com/success',
                // cancel_url: `${req.headers}/?canceled=true`,
                cancel_url: 'https://example.com/cancelled',
            });
            return NextResponse.redirect(new URL(session.url), {
                status: 303,
            });

        } catch (err: any) {
            console.log("********    here not right")
            return NextResponse.json({ err }, {
                status: err.statusCode || 500
            });

            // NOTE: Same as the one above.
            // res.status(err.statusCode || 500).json(err.message);
        }
    } else {
        // res.setHeader('Allow', 'POST');
        // res.status(405).end('Method Not Allowed');

        // res.status(200).json({ name: "Jane Doe" });
        // NOTE: Same as the one above.
        return NextResponse.json({ name: "Jane Doe" }, { status: 200 });
    }
}

export { GET, handler as POST };