
import { Helmet } from 'react-helmet-async';
const ParticipantPaymentHistory = () => {


    return (
        <>
            <Helmet>
                <title>Amelia | Participant Payment History</title>
            </Helmet>
            <div>
                <h2 className='text-black text-2xl font-semibold my-10'>Total Payments: 30</h2>
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
                                <tr>
                                    <th>1</th>
                                    <td>campName</td>
                                    <td>price</td>
                                    <td>date</td>
                                    <td>transactionId</td>
                                    <td>status</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ParticipantPaymentHistory;