import useAxioslocalhost from "../../../../hooks/useAxioslocalhost";
import useUsers from "../../../../hooks/useUsers";
import { MdRateReview } from "react-icons/md";
import { Slide, toast } from "react-toastify";

const Review = ({ enrollCampId }) => {

    const axiosLocalhost = useAxioslocalhost()
    const [users] = useUsers();
    const currentUser = users?.length > 0 ? users[0] : {};

    const handleCreateReview = async (e) => {

        e.preventDefault();

        const comment = e.target.comment.value;
        const ratingInput = document.querySelector('input[name="rating-2"]:checked');
        const rating = ratingInput ? parseInt(ratingInput.value, 10) : null;
        const reviewerName = currentUser?.userName;
        const reviewerPhoto = currentUser?.userImage;
        const email = currentUser?.email;

        if (enrollCampId) {

            const newFeedback = { comment, rating, reviewerName, reviewerPhoto, email, enrollCampId }

            axiosLocalhost.post('/feedbacks', newFeedback)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        toast.success('Feedback received.', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: true,
                            closeOnClick: false,
                            pauseOnHover: true,
                            draggable: true,
                            progress: 1,
                            theme: "light",
                            transition: Slide,
                        });
                    }
                })

            const newEnrollRating = { comment, rating }
            axiosLocalhost.patch(`/enrollCamp/${enrollCampId}`, newEnrollRating)
                .then(res => {
                    if (res.data.modifiedCount > 0) {
                        console.log(res.data.modifiedCount)
                    }
                })
        }

    }

    return (
        <>
            <label htmlFor="my_modal_6">
                <MdRateReview
                    className="text-[18px] text-white cursor-pointer"
                    title="Review" />
            </label>

            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">

                    <h1 className="text-3xl font-bold text-textDark my-5">Review</h1>

                    <form onSubmit={(e) => handleCreateReview(e)}>
                        <div className='flex justify-center items-center mb-4'>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-primaryDark" value={1} />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-primaryDark" value={2} />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-primaryDark" value={3} />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-primaryDark" value={4} />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-primaryDark" value={5} />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="Title" className="text-lg font-medium">Comment</label>
                            <textarea placeholder="Share Your Experiance" name='comment' className="textarea textarea-bordered textarea-lg w-full mt-4"></textarea>
                        </div>
                        <div className="mt-4">
                            <button type="submit" className="primaryBtn">Submit Review</button>
                        </div>
                    </form>

                    {/* end review */}
                    <div className="modal-action">
                        <label htmlFor="my_modal_6" className="px-2 py-2 text-lg primaryBtn cursor-pointer">Close!</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Review
