
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from './CheckoutForm';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Payment = () => {

    // const { id } = useParams();
    const registerCamp = useLoaderData();
    // console.log(registerCamp)


    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
    return (
        <>
            <Helmet>
                <title>Amelia | Payment</title>
            </Helmet>
           
            {/*  className='mx-auto container my-20 overflow-hidden' */}
            <div>
                <div>
                    <Elements stripe={stripePromise}>
                        {
                            registerCamp?.map((eachCamp) => (
                                <>
                                    <CheckoutForm
                                        key={eachCamp._id}
                                        eachCamp={eachCamp}>
                                    </CheckoutForm>
                                </>
                            ))
                        }

                    </Elements>
                </div>
            </div>


        </>
    );
};

export default Payment;