import React from 'react';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_STRIPE_PK);

const Payment = () => {

    return (
        <div className='mt-28 mx-auto w-full max-w-md bg-lime-200'>
            <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
        </div>
    );
};

export default Payment;