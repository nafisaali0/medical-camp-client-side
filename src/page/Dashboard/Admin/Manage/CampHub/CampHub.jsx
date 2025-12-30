import { useState } from "react"
import { CiCalendarDate, CiCircleChevDown, CiCircleChevUp } from "react-icons/ci"
import { IoMdAdd } from "react-icons/io"
import { SiManageiq } from "react-icons/si"
import { Link } from "react-router-dom"
import useCamp from "../../../../../hooks/useCamp"
import { MdDeleteOutline, MdFormatListBulletedAdd, MdOutlineUpdate } from "react-icons/md"
import { ImBasecamp } from "react-icons/im"
import useAxioslocalhost from "../../../../../hooks/useAxioslocalhost"
import Swal from "sweetalert2"
import { BiCategoryAlt } from "react-icons/bi"


const CampHub = () => {

    const [camp, refetch, loading] = useCamp();
    const axiosLocalhost = useAxioslocalhost();
    const [cardOpen, setCardOpen] = useState(false)
    const [cardIndex, setCardIndex] = useState(null)

    function handleCardDropDown(index) {
        console.log(cardIndex)
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
            <div className="space-y-8">
                <div className="bg-white p-4 rounded-xl border border-borderColour">
                    <div className="flex justify-between">

                        <div className="flex items-center gap-2">
                            <SiManageiq className="text-[22px]" />
                            <h1 className="text-textDark text-lg font-medium">Manage Camps</h1>
                        </div>

                        <div>
                            <Link to={'/dashboard/create-camp'}>
                                <button className="flex items-center gap-2 px-3 py-2 text-xm lg:text-xm font-normal text-white bg-btnColor rounded-xl cursor-pointer">
                                    <span>
                                        <IoMdAdd className="text-[16px] lg:text-[20px]" />
                                    </span>
                                    Add New Camp
                                </button>
                            </Link>
                        </div>

                    </div>
                </div>

                {/* All Camp */}
                <div className="bg-white p-4 rounded-xl border border-borderColour">
                    <div className="flex justify-between">

                        <div className="flex items-center gap-2">
                            <ImBasecamp className="text-[22px]" />
                            <h1 className="text-textDark text-lg font-medium">All Camps</h1>
                        </div>

                        <div>
                            <div>
                                <button className="flex items-center gap-2 px-3 py-2 text-xm lg:text-xm font-normal text-white bg-btnColor rounded-xl cursor-pointer">
                                    <span>
                                        <MdFormatListBulletedAdd className="text-[16px] lg:text-[20px]" />
                                    </span>
                                    Total : {camp?.length}
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="bg-white px-4 py-10 rounded-xl border border-borderColour">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2">
                        {
                            camp.map((campInfo, index) =>
                                <>
                                    <div key={index} className="relative">
                                        <div
                                            onClick={() => handleCardDropDown(index)}
                                            className="h-24 px-3 py-3 border border-borderColour rounded-xl shadow-lg space-y-2">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <h1 className="text-sm font-semibold text-textDark">{campInfo?.campName}</h1>
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
                                            <div className="space-y-1 mb-3">
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
                                                    className="w-full absolute left-0 mt-2 bg-white border border-borderColour rounded-xl shadow-lg p-2 animate-slideDown z-10"
                                                >
                                                    <div className="space-y-1">
                                                        <h1 className="text-sm font-semibold text-primaryDark flex items-center gap-1 mb-2">
                                                            <span className="font-semibold">
                                                                <BiCategoryAlt className="text-primaryDark text-lg" />
                                                            </span>
                                                            {campInfo?.campCategory}
                                                        </h1>
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
                                                                to={`/dashboard/edit-camp/${campInfo?._id}`}
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
                                                                <button className="primaryBtn text-sm font-medium">
                                                                    View Details
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

                </div>
            </div>
        </>
    )
}

export default CampHub
