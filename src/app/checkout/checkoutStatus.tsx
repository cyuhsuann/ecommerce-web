'use client'
import { useEffect, useState } from 'react';
import { stripePromise } from './load-stripe';


type CheckoutStatus = {
    isSuccess: boolean;
    isCanceled: boolean;
};


export function CheckoutStatus(): CheckoutStatus {

    // eslint-disable-next-line
    const stripe = stripePromise;

    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [isCanceled, setIsCanceled] = useState<boolean>(false);


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

    return { isSuccess, isCanceled }
}
