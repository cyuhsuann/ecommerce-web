'use client'
import { useEffect } from 'react';
import { Button } from '~/components/ui/button';
import stripePromise from './lib/stripe';


await stripePromise;

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

        <form action="/api/checkout" method="POST">
            <section>
                <Button type="submit" role="link">
                    Checkout
                </Button>
            </section>
        </form>

    );
}