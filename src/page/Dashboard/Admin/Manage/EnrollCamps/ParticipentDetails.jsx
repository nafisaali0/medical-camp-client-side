import { FaUsers } from "react-icons/fa"
import useAllEnrollCamp from "../../../../../hooks/useAllEnrollCamp";

const ParticipentDetails = ({ enrollCampId }) => {

    const [allEnrollCamp] = useAllEnrollCamp();
    const enrollmentUserDetails = allEnrollCamp
        .filter(item => item.enrollCampId === enrollCampId)
        .map(item => ({
            email: item.email,
            transactionId: item.transactionId
        }));

    return (
        <>
            {/* The button to open modal */}
            <label htmlFor={enrollCampId}>
                <div className="flex items-center gap-2">
                    <div
                        className="bg-btnColor rounded-full p-2">
                        <FaUsers
                            className="text-[18px] text-white cursor-pointer"
                            title="View Enroll Participent" />
                    </div>
                </div>
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id={enrollCampId} className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box w-11/12 max-w-5xl">
                    <div className="my-5 text-center font-semibold text-lg text-textDark">
                        <h1>Participents</h1>
                    </div>
                    <div className="overflow-x-auto w-full shadow-sm">
                        <table className="rounded-xl shadow w-[280px] md:w-full">

                            <tr className="bg-btnColor border-borderColour text-lg font-medium text-white">

                                <th className="px-4 py-3 text-center rounded-tl-xl">No</th>
                                <th className="px-4 py-3 text-center">Email</th>
                                <th className="px-4 py-3 text-center">Transaction Id</th>

                            </tr>

                            <tbody>

                                {
                                    enrollmentUserDetails?.map((item, index) =>
                                        <>
                                            <tr className="text-center text-sm font-medium text-textDark border-b border-b-borderColour hover:bg-base-200 cursor-pointer">

                                                <td className="px-4 py-3">
                                                    {index + 1}
                                                </td>
                                                <td className="px-4 py-3">
                                                    {item?.email}
                                                </td>
                                                <td className="px-4 py-3">
                                                    {item?.transactionId}
                                                </td>

                                            </tr>
                                        </>

                                    )}

                            </tbody>
                        </table>
                    </div>

                    <div className="modal-action">
                        <label htmlFor={enrollCampId} className="px-2 py-2 text-lg primaryBtn cursor-pointer">Close!</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ParticipentDetails
