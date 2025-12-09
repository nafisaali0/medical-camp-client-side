import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAxioslocalhost from "../../../hooks/useAxioslocalhost";
import Swal from "sweetalert2";
import moment from "moment";
import useUsers from "../../../hooks/useUsers";

const CheckoutForm = ({ enrollCampId, enrollCampName, enrollCampCategory, enrollCampFee }) => {

    // console.log(enrollCampId, enrollCampName, enrollCampCategory, enrollCampFee)
    const date = moment().format("MMM Do YY");
    const time = moment().format('LT');
    const [users] = useUsers();
    const currentUser = users?.length > 0 ? users[0] : {};
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const axiosLocalhost = useAxioslocalhost();
    const totalPrice = enrollCampFee;

    useEffect(() => {
        if (totalPrice > 0) {
            axiosLocalhost.post('/create-payment-intent', { enrollCampFee: totalPrice })
                .then(res => {
                    setClientSecret(res.data.clientSecret);
                    console.log(res.data.clientSecret)
                })
        }

    }, [axiosLocalhost, totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(event)
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            console.log(stripe)
            console.log(elements)
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
                    email: currentUser?.email || 'anonymous',
                    name: currentUser?.userName || 'anonymous'
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
                    email: currentUser?.email,
                    price: totalPrice,
                    campId: enrollCampId,
                    enrollCampName: enrollCampName,
                    enrollCampCategory: enrollCampCategory,
                    date: date,
                    time: time,
                    transactionId: paymentIntent.id,
                    status: 'paid'
                }
                // console.log(payment)
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
                                color: '#0A1931',
                                '::placeholder': {
                                    color: '#0A1931',
                                },
                            },
                            invalid: {
                                color: '#6B6B6B',
                            },
                        },
                    }}
                />
                <p className="text-textDark my-2">{error}</p>
                {transactionId && <p className="text-textDark my-2"> Your transaction id: <span className="text-grayText"> {transactionId}</span></p>}
                <div className="flex justify-center items-center py-5">
                    <button
                        type="submit"
                        disabled={!stripe || !clientSecret}
                        className="primaryBtn">
                        Complete Enrollment
                        <div className="arrow-wrapper">
                            <div className="arrow"></div>
                        </div>
                    </button>
                </div>

            </form>
        </>
    );
};

export default CheckoutForm;