
import { Helmet } from 'react-helmet-async';
import DashboardTitle from '../../../components/DashboardTitle';
import usePayment from './../../../hooks/usePayment';
const ParticipantPaymentHistory = () => {

    const [paymentsCamp] = usePayment();

    return (
        <>
            <Helmet>
                <title>Amelia | Participant Payment History</title>
            </Helmet>
            <DashboardTitle heading={"Your Payment Story"}></DashboardTitle >
            {/*  */}
            <div className='container mx-auto my-20'>
                <h2 className='text-black text-2xl font-semibold my-10'>Total Payments: {paymentsCamp.length}</h2>
                <div className='bg-white w-10/12'>

                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead className='bg-black text-white text-xl'>
                                <tr>
                                    <th>Serial No</th>
                                    <th>Camp Name</th>
                                    <th>price</th>
                                    <th>Payment Date</th>
                                    <th>Transaction Id</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody className='text-black text-lg font-semibold my-10'>
                                {paymentsCamp.map((payment, index) => <tr key={payment._id}>
                                    <th>{index + 1}</th>
                                    <td>{payment.campName}</td>
                                    <td>{payment.price} $</td>
                                    <td>{payment.date}</td>
                                    <td>{payment.transactionId}</td>
                                    <td>{payment.status}</td>
                                </tr>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ParticipantPaymentHistory;