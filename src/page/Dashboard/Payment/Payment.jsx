
import { Elements } from '@stripe/react-stripe-js';
import DashboardTitle from './../../../components/DashboardTitle';
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from './CheckoutForm';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {

    // const { id } = useParams();
    const registerCamp = useLoaderData();
    // console.log(registerCamp)


    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
    return (
        <>
            <div>
                <DashboardTitle heading={"Payment With Stripe"}></DashboardTitle>
            </div>

            <div className='mx-auto container my-20 overflow-hidden'>
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