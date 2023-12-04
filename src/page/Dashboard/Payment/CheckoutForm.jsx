import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAxioslocalhost from "../../../hooks/useAxioslocalhost";
import useAuth from "../../../hooks/useAuth";
import moment from 'moment';
import Swal from "sweetalert2";


const CheckoutForm = ({ eachCamp }) => {

    const { campFees, _id, campName, venue } = eachCamp
    const date = moment().format("MMM Do YY");
    const time = moment().format('LT');
    // console.log(date,time)
    // console.log(campFees)
    const { user } = useAuth()
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const axiosLocalhost = useAxioslocalhost();
    // const totalPrice = camp.reduce((total, item) => total + item.campFees, 0)
    const totalPrice = campFees;
    console.log(totalPrice)

    useEffect(() => {
        if (totalPrice > 0) {
            axiosLocalhost.post('/create-payment-intent', { campFees: totalPrice })
                .then(res => {
                    setClientSecret(res.data.clientSecret);
                    console.log(res.data.clientSecret)
                })
        }

    }, [axiosLocalhost, totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })
        if (error) {
            setError(error.message)
            console.log('[error]', error);

        } else {
            setError('')
            console.log('[PaymentMethod]', paymentMethod);
        }

        // confirmation status 
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if (confirmError) {
            console.log('confirm Error')
        }
        else {
            console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);

                //now save the payment in the database
                const payment = {
                    email: user.email,
                    price: totalPrice,
                    campId: _id,
                    campName: campName,
                    venue: venue,
                    date: date,
                    time: time,
                    transactionId: paymentIntent.id,
                    status: 'paid'
                }
                //console.log(payment)
                const res = await axiosLocalhost.post('/payments', payment);
                console.log('payment saved', res.data);
                // refetch();
                if (res.data?.paymentResult?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Payment successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
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

                <button className="btn btn-sm btn-primary my-4" type="submit" disabled={!stripe || !clientSecret} >
                    Pay
                </button>
                <p className="text-red-600">{error}</p>
                {transactionId && <p className="text-green-600"> Your transaction id: {transactionId}</p>}
            </form>
        </>
    );
};

export default CheckoutForm;