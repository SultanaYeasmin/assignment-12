import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';



const CheckoutForm = ({ price }) => {
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    useEffect(() => {
        if (price) {
            axiosSecure.post('/create-payment-intent', { price: price })
                .then(res => {
                    console.log("client secret: ", res.data.clientSecret)
                    setClientSecret(res.data.clientSecret)
                })

        }
    }, [price, axiosSecure])

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
            error: cardConfirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
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
            console.log('payment intent:', paymentIntent)
        }

  
    if (paymentIntent?.status === 'succeeded') {
        console.log('transaction id', paymentIntent.id);
        setTransactionId(paymentIntent.id);


        //now save the payment in the database

        // const payment = {
        //     email: user?.email,
        //     price: totalPrice,
        //     transactionId: paymentIntent.id,
        //     date: new Date(),

        //     status: 'pending',

        // }

        // const res = await axiosSecure.post('/payments', payment)

        // console.log('payment saved to db!', res.data);
        // refetch()
        // if (res.data?.paymentResult?.insertedId) {
        //     Swal.fire({
        //         position: "top-end",
        //         icon: "success",
        //         title: `thank you for payment!`,
        //         showConfirmButton: false,
        //         timer: 1500
        //     });
        //     navigate('/dashboard/paymentHistory')
        // }
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
                transactionId && <p className='text-green-800'>
                    Your transaction id is {transactionId}
                </p>
            }
        </form>
    );
};

export default CheckoutForm;