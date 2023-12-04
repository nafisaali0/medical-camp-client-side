import { Helmet } from 'react-helmet-async';
import DashboardTitle from '../../../components/DashboardTitle';
import usePayment from './../../../hooks/usePayment';
import useAxioslocalhost from '../../../hooks/useAxioslocalhost';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';

const FeedbackAndRatings = () => {

    const axiosLocalhost = useAxioslocalhost()
    const [paymentsCamp] = usePayment();
    const { user } = useAuth();

    const handleCreateReview = async (e, campid) => {

        e.preventDefault();

        const comment = e.target.comment.value;
        const ratingInput = document.querySelector('input[name="rating-2"]:checked');
        const rating = ratingInput ? parseInt(ratingInput.value, 10) : null;
        const reviewerName = user?.displayName;
        const reviewerPhoto = user?.photoURL;

        // for post rewiew in database 
        const newFeedback = { comment, rating, reviewerName, reviewerPhoto, campid }
        console.log(newFeedback)
        //  await axiosLocalhost.post('/feedbacks', newFeedback);
        axiosLocalhost.post('/feedbacks', newFeedback)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Thank you for your feedback`,
                        showConfirmButton: false,
                        timer: 1600
                    });
                }
            })
    }

    return (
        <>
            <Helmet>
                <title>Amelia | FeedBack And Rating</title>
            </Helmet>
            <DashboardTitle heading={"Your Payment Story"}></DashboardTitle >
            <div className='container mx-auto my-20'>
                <h2 className='text-black text-2xl font-semibold my-10'>Total Payments: {paymentsCamp.length}</h2>
                <div className='bg-white w-12/12'>

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
                                    <th>Payment Status</th>
                                    <th>Confirmation Status</th>
                                    <th>Review</th>
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
                                    <td>{payment.status}</td>
                                    <td>
                                        {/* modal */}
                                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                                        <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button>
                                        <dialog id="my_modal_1" className="modal">
                                            <div className="modal-box">
                                                <div>
                                                    <form onSubmit={(e) => handleCreateReview(e, payment._id)}>
                                                        <div className='my-10'>
                                                            <div className="rating">
                                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-500" value={1} />
                                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-500" value={2} />
                                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-500" value={3} />
                                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-500" value={4} />
                                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-500" value={5} />
                                                            </div>
                                                        </div>
                                                        <div className="my-3">
                                                            <label htmlFor="Title" className="text-lg font-bold">Comments</label>
                                                            <textarea placeholder="Share Your Experiance" name='comment' className="textarea textarea-bordered textarea-lg w-full"></textarea>
                                                        </div>
                                                        <div className="flex justify-end items-end my-5">
                                                            <button type="submit" className="btn text-white bg-gradient-to-r from-blue-500 to-indigo-800">Submit Review</button>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="modal-action">
                                                    <form method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button className="btn">Close</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </dialog>
                                    </td>
                                </tr>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/*  <form onSubmit={handleCreateBlog}>
                                        <input type="text" name="title" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                                        <button type="submit">submit</button>
                                    </form> */}
        </>
    );
};

export default FeedbackAndRatings;