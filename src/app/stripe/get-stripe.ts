// NOTE: First, loading Stripe.js library from Stripe's servers.
import { Stripe, loadStripe } from '@stripe/stripe-js';


// NOTE: Using the singleton pattern to create/retrieve the Stripe instance.
let stripePromise: Promise<Stripe | null>;
const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
    }
    return stripePromise;
};

export default getStripe;