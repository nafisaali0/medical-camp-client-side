
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)

const Payment = ({ enrollCampId, enrollCampName, enrollCampCategory, enrollCampFee, enrollCampDate, enrollCampVenue, enrollCampTime, enrollCampAge }) => {


    return (
        <>
            <div className='my-5'>
                <Elements stripe={stripePromise}>

                    <CheckoutForm
                        key={enrollCampId}
                        enrollCampId={enrollCampId}
                        enrollCampName={enrollCampName}
                        enrollCampCategory={enrollCampCategory}
                        enrollCampFee={enrollCampFee}
                        enrollCampDate = {enrollCampDate}
                        enrollCampVenue = {enrollCampVenue}
                        enrollCampTime = {enrollCampTime}
                        enrollCampAge = {enrollCampAge}>
                </CheckoutForm>

            </Elements>
        </div >

        </>
    );
};

export default Payment;