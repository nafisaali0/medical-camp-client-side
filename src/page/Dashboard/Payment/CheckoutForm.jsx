import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAxioslocalhost from "../../../hooks/useAxioslocalhost";
import Swal from "sweetalert2";
import moment from "moment";
import useUsers from "../../../hooks/useUsers";
import { FaLocationCrosshairs, FaPhone, FaUser } from "react-icons/fa6";
import { PiGenderIntersexBold } from "react-icons/pi";
import { GiAges } from "react-icons/gi";

const CheckoutForm = ({ enrollCampId, enrollCampName, enrollCampCategory, enrollCampFee, enrollCampDate, enrollCampVenue, enrollCampTime, enrollCampAge }) => {
    
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

                    price: totalPrice,
                    campId: enrollCampId,
                    enrollCampName: enrollCampName,
                    enrollCampCategory: enrollCampCategory,
                    enrollCampDate: enrollCampDate,
                    enrollCampAge: enrollCampAge,
                    enrollCampVenue: enrollCampVenue,
                    enrollCampTime: enrollCampTime,
                    date: date,
                    time: time,
                    transactionId: paymentIntent.id,
                    status: 'paid',

                    // user
                    email: currentUser?.email,
                    userName: event.target.userName.value,
                    userImage: currentUser?.userImage,
                    userAge: event.target.userAge.value,
                    userGender: event.target.userGender.value,
                    userAddress: event.target.userAddress.value,
                }
                const res = await axiosLocalhost.post('/enrollCamp', payment);
                // console.log('payment saved', res.data);
                if (res.data?.insertedId) {
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

                <div className="space-y-4">

                    <div className="flex flex-col lg:flex-row gap-2 mb-5">
                        <div className="flex-1 w-full space-y-4">

                            <div className="relative flex items-center  w-full">
                                <FaUser className="absolute left-3 text-grayText text-lg" />
                                <input
                                    type="name" name="userName" placeholder="Name"
                                    defaultValue={currentUser?.userName}
                                    className="text-sm ease-soft block w-full rounded-lg border border-solid border-borderColour py-2 pl-10 pr-3 font-medium text-textSmallGray transition-all focus:border-borderColour focus:bg-mainTheme focus:text-grayText focus:outline-none"
                                />
                            </div>
                            <div className="relative flex items-center">
                                <PiGenderIntersexBold className="absolute left-3 text-grayText text-lg" />
                                <input
                                    type="gender" name="userGender" placeholder="Gender"
                                    defaultValue={currentUser?.userGender}
                                    className="text-sm ease-soft block w-full rounded-lg border border-solid border-borderColour py-2 pl-10 pr-3 font-medium text-textSmallGray transition-all focus:border-borderColour focus:bg-mainTheme focus:text-grayText focus:outline-none"
                                />
                            </div>
                        </div>

                        <div className="flex-1 w-full space-y-4">

                            <div className="relative flex items-center">
                                <GiAges className="absolute left-3 text-grayText text-lg" />
                                <input
                                    type="age" name="userAge" placeholder="Age"
                                    defaultValue={currentUser?.userAge}
                                    className="text-sm ease-soft block w-full rounded-lg border border-solid border-borderColour py-2 pl-10 pr-3 font-medium text-textSmallGray transition-all focus:border-borderColour focus:bg-mainTheme focus:text-grayText focus:outline-none"
                                />
                            </div>
                            <div className="relative flex items-center">
                                <FaPhone className="absolute left-3 text-grayText text-lg" />
                                <input
                                    type="number" name="userPhone" placeholder="Phone Number"
                                    defaultValue={currentUser?.userPhone}
                                    className="text-sm ease-soft block w-full rounded-lg border border-solid border-borderColour py-2 pl-10 pr-3 font-medium text-textSmallGray transition-all focus:border-borderColour focus:bg-mainTheme focus:text-grayText focus:outline-none"
                                />
                            </div>

                        </div>
                    </div>

                    <div className="relative w-full">
                        <FaLocationCrosshairs className="absolute left-3 top-3 text-grayText text-lg" />
                        <textarea
                            name="userAddress"
                            placeholder="Address"
                            defaultValue={currentUser?.userAddress}
                            className="textarea w-full py-2 pl-10 pr-3 font-medium border-borderColour"
                        ></textarea>
                    </div>
                    <div>
                        <h1 className="text-xl font-medium text-textDark my-2">Payment</h1>

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

                        <p className="text-textDark">{error}</p>
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

                    </div>

                </div>

                {/* <p className="text-textDark my-2">{error}</p>
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
                </div> */}

            </form>
        </>
    );
};

export default CheckoutForm;