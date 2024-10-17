'use client'
import { useEffect, useState } from 'react';
import { Button } from '~/components/ui/button';
import { stripePromise } from './load-stripe';
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert"



export default function PreviewPage() {

    // eslint-disable-next-line
    const stripe = stripePromise;

    const [isSuccess, setIsSuccess] = useState(false);
    const [isCanceled, setIsCanceled] = useState(false);


    useEffect(() => {
        // NOTE: Check to see if this is a redirect back from Checkout.
        // NOTE: `window` object only exists on the client-side, if it is used outside the 
        // useEffect() would cause 'undefined', because of running on server-side rendering.
        // So, it needs to call useState() first.
        const query = new URLSearchParams(window.location.search);

        // NOTE: Update the state.
        const success = query.get('success') !== null;
        const canceled = query.get('canceled') !== null;
        setIsSuccess(success);
        setIsCanceled(canceled);

        if (success) {
            console.log('Order placed! You will receive an email confirmation.');
        }

        if (canceled) {
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
            {/* {isSuccess && <div>Order placed! You will receive an email confirmation.</div>}
            {isCanceled && <div> Order canceled -- continue to shop around and checkout when you’re ready. </div>} */}
            {isSuccess &&
                <Alert>
                    <AlertTitle>Order placed!</AlertTitle>
                    <AlertDescription>
                        You will receive an email confirmation.
                    </AlertDescription>
                </Alert>}

            {isCanceled &&
                <Alert>
                    <AlertTitle>Order canceled</AlertTitle>
                    <AlertDescription>
                        Continue to shop around and checkout when you’re ready.
                    </AlertDescription>
                </Alert>}

        </form>
    );
}
