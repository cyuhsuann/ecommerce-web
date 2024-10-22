'use client'
import { useEffect, useState } from 'react';
import { stripePromise } from './load-stripe';
import { Button } from "~/components/ui/button";
import Link from "next/link";


export default function CheckoutStatusPage() {

    // eslint-disable-next-line
    const stripe = stripePromise;

    const [isSuccess, setIsSuccess] = useState(false);
    const [isCanceled, setIsCanceled] = useState(false);

    useEffect(() => {
        const query = new URLSearchParams(window.location.search);

        // NOTE: Update the state.
        const success = query.get('success') !== null;
        const canceled = query.get('canceled') !== null;
        setIsSuccess(success);
        setIsCanceled(canceled);

        if (success) {
            console.log('Order success');
        }

        if (canceled) {
            console.log('Order canceled');
        }
    }, []);

    return (
        <div>
            <div>
                {isSuccess && <p>Order placed! You will receive an email confirmation.</p>}
                {isCanceled && <p>Order canceled -- Continue to shop around and checkout when you’re ready.</p>}
            </div>
            <div>
                <Link href={"/gallery"}>
                    <Button>Back to Gallery</Button>
                </Link>
            </div>
        </div>
    )
}
