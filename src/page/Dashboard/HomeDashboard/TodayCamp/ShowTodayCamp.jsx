import { MdDeleteOutline, MdFormatListBulletedAdd, MdOutlineUpdate } from "react-icons/md"
import { Link } from "react-router-dom"
import Swal from "sweetalert2";
import useAxioslocalhost from "../../../../hooks/useAxioslocalhost";
import { useState } from "react";
import { CiCalendarDate, CiCircleChevDown, CiCircleChevUp } from "react-icons/ci";
import { IoTodayOutline } from "react-icons/io5";

const ShowTodayCamp = ({ camp, loading, refetch }) => {

    const axiosLocalhost = useAxioslocalhost();
    const [cardOpen, setCardOpen] = useState(false)
    const [cardIndex, setCardIndex] = useState(null)

    function handleCardDropDown(index) {
        // console.log(cardIndex)
        if (cardIndex === index) {
            setCardOpen(!cardOpen);
        } else {
            setCardIndex(index);
            setCardOpen(true);
        }
    }

    const handleDelete = id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete it this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosLocalhost.delete(`/camp/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your camp has been deleted.',
                                'success'
                            )
                            loading()
                            refetch();
                        }
                    })
            }
        })

    }

    return (
        <>
            <div className="bg-white p-4 rounded-xl border border-borderColour my-7">
                <div className="flex justify-between">

                    <div className="flex items-center gap-1">
                        <IoTodayOutline className="text-[16px] md:text-[22px]" />
                        <h1 className="text-textDark text-xm md:text-lg font-medium">Today Camps</h1>
                    </div>

                    <div>
                        <button className="flex items-center gap-1 md:px-3 px-2 py-2 text-xm font-normal text-white bg-btnColor rounded-xl cursor-pointer">
                            <span>
                                <MdFormatListBulletedAdd className="text-[16px] md:text-[20px]" />
                            </span>
                            Total : {camp?.length}
                        </button>
                    </div>

                </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-borderColour">


                {
                    camp === 0 ?
                        <>
                            <div className="flex flex-col justify-center items-center gap-1">
                                <h1 className="text-xl font-semibold text-textDark">No Camp Today</h1>
                                <h1 className="text-lg font-medium text-grayText">5November2025</h1>
                            </div>
                        </>
                        :
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
                                {
                                    camp?.map((campInfo, index) =>
                                        <>
                                            <div key={index} className="relative">
                                                <div
                                                    onClick={() => handleCardDropDown(index)}
                                                    className="h-28 px-3 py-2 border border-borderColour rounded-xl shadow-lg space-y-2">

                                                    <div className="flex items-center justify-between">

                                                        <div>
                                                            <h1 className="text-sm font-medium text-textDark">{campInfo?.campName}</h1>
                                                        </div>
                                                        <div>
                                                            {
                                                                cardOpen && cardIndex === index ?
                                                                    <CiCircleChevUp className="text-[25px] text-textDark cursor-pointer" />
                                                                    :
                                                                    <CiCircleChevDown className="text-[25px] text-textDark cursor-pointer" />
                                                            }
                                                        </div>

                                                    </div>

                                                    <div>
                                                        <div className="flex items-center gap-1">
                                                            <span><CiCalendarDate className="text-[22px] text-textDark cursor-pointer" /></span>
                                                            <p className="text-sm font-medium text-textDark">{campInfo?.campDate}</p>
                                                        </div>
                                                    </div>

                                                </div>
                                                {
                                                    cardOpen && cardIndex === index && (
                                                        <div
                                                            key={index}
                                                            className="w-auto absolute left-0 -mt-14  bg-white border border-borderColour rounded-xl shadow-lg p-2 animate-slideDown z-10"
                                                        >

                                                            <div className="space-y-1">
                                                                <h1 className="text-sm font-medium text-textDark">
                                                                    <span className="font-semibold">Time: </span>
                                                                    {campInfo?.campTime}
                                                                </h1>
                                                                <h1 className="text-sm font-medium text-textDark">
                                                                    <span className="font-semibold">Location: </span>
                                                                    {campInfo?.campVenue}
                                                                </h1>
                                                                <h1 className="text-sm font-medium text-textDark">
                                                                    <span className="font-semibold">Fee: </span>
                                                                    {campInfo?.campFee} BDT</h1>
                                                            </div>

                                                            <div className="flex items-center justify-between lg:gap-10 mt-5 mb-3">

                                                                <div className="flex items-center gap-2">
                                                                    <Link
                                                                        to={`/dashboard/update-camp/${campInfo?._id}`}
                                                                        className="bg-btnColor rounded-full p-2">
                                                                        <MdOutlineUpdate
                                                                            className="text-[18px] text-white cursor-pointer"
                                                                            title="Update" />
                                                                    </Link>
                                                                    <div className="bg-btnColor rounded-full p-2">
                                                                        <MdDeleteOutline
                                                                            onClick={() => handleDelete(campInfo._id)}
                                                                            className="text-[18px] text-white cursor-pointer"
                                                                            title="Delete" />
                                                                    </div>
                                                                </div>

                                                                <div>
                                                                    <Link to={`/camp-details/${campInfo?._id}`}>
                                                                        <button className="primaryBtn text-base font-normal">
                                                                            Details
                                                                            <div className="arrow-wrapper">
                                                                                <div className="arrow"></div>
                                                                            </div>
                                                                        </button>
                                                                    </Link>
                                                                </div>

                                                            </div>

                                                        </div>
                                                    )}
                                            </div>

                                        </>

                                    )}
                            </div>
                        </>
                }


            </div>
        </>
    )
}

export default ShowTodayCamp
