import { Rating } from "@smastrom/react-rating"
import { VscFeedback } from "react-icons/vsc"

const ViewUserFeedback = ({ rating, comment }) => {

    return (
        <>
            <label htmlFor="my_modal_6">
                <VscFeedback
                    className="text-[18px] text-white cursor-pointer"
                    title="View Feedback" />
            </label>

            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">

                    <h1 className="text-3xl font-bold text-textDark my-5">Your Feedback</h1>

                    <div className="space-y-5">
                        <div>
                            <span>
                                <Rating
                                    style={{ maxWidth: 80 }}
                                    value={rating}
                                    readOnly
                                />
                            </span>
                        </div>

                        <div>
                            {
                                comment ?
                                    <>
                                        <div>
                                            <p className="text-xs font-medium">
                                                {comment}
                                            </p>
                                        </div>
                                    </>
                                    :
                                    ""
                            }
                        </div>
                    </div>

                    {/* end review */}
                    <div className="modal-action">
                        <label htmlFor="my_modal_6" className="px-2 py-2 text-lg primaryBtn cursor-pointer">Close!</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewUserFeedback
