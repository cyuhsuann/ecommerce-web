'use client'
import { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Button } from '~/components/ui/button';

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
const stripePromise = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
    ? loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
    : () => { throw new Error('There is on Public Stripe Publishable Key') };



export default function PreviewPage() {
    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);
        if (query.get('success')) {
            console.log('Order placed! You will receive an email confirmation.');
        }

        if (query.get('canceled')) {
            console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
        }
    }, []);

    return (
        <form action="/checkout_sessions" method="POST">
            <section>
                <Button type="submit" role="link">
                    Checkout
                </Button>
            </section>
        </form>
    );
} 