import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const CheckoutForm = () => {

    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('');
    const { user } = useAuth();
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const location = useLocation()
    const { price, _id } = location.state || {};
    console.log('payment price & id', price, _id,)


    useEffect(() => {
        if (price) {
            axiosSecure.post('/create-payment-intent', { price: price })
                .then(res => {
                    console.log("client secret: ", res.data.clientSecret)
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [price])

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('')
        }

        //confirm card-payment
        const { paymentIntent,
            error: cardConfirmError } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'anonymous',
                        name: user?.displayName || 'anonymous',
                    },
                },
            },
            );
        if (cardConfirmError) {
            console.log('confirm error!', cardConfirmError)
        } else {
            console.log('payment intent:', paymentIntent, paymentIntent?.status)
        }

        if (paymentIntent?.status === 'succeeded') {

            // now save the payment in the database
            const payment = {
                transaction_id: paymentIntent.id,
                date: new Date(),
                email: user?.email,
                price,
                bookings_id: _id,
            }
            console.log('payment object:', payment)
            setTransactionId(paymentIntent.id);
            console.log('transaction ID', transactionId);

            const res = await axiosSecure.post('/payments', payment);

            console.log('payment saved to database!', res?.data);
            if (res.data?.result?.insertedId && res.data?.deleteResult?.deletedCount > 0) {
                
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: 'WoW!',
                    showConfirmButton: false,
                    timer: 1000
                });
               navigate('/dashboard/payment-success');
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className='p-2'>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button type="submit" disabled={!stripe || !clientSecret} className='btn btn-primary btn-xs m-2'>
                Pay
            </button>
            <p className='text-red-400 font-bold '>
                {error}
            </p>
            {
                transactionId && <p className='text-gray-600 text-xs font-bold'>
                    Your transaction id is {transactionId}
                </p>
            }
        </form>
    );
};

export default CheckoutForm;