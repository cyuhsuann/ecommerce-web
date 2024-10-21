'use client'
import { useEffect, useState } from 'react';
import { stripePromise } from './load-stripe';


type CheckoutStatus = {
    isSuccess: boolean;
    isCanceled: boolean;
}

export function CheckoutStatus(): CheckoutStatus {

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

    return { isSuccess, isCanceled }
}
