import { BiSolidPurchaseTag } from "react-icons/bi"
import { Link } from "react-router-dom"
import useCamp from "../../../../../hooks/useCamp";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { useState } from "react";
import { CiCalendarDate, CiCircleChevDown, CiCircleChevUp } from "react-icons/ci";
import { LuView } from "react-icons/lu";
import { GrStatusGood } from "react-icons/gr";

const EnrollCamps = () => {

    const [camp] = useCamp();
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

    return (
        <>
            <div className="space-y-8">
                <div className="bg-white p-4 rounded-xl border border-borderColour">
                    <div className="flex justify-between">

                        <div className="flex items-center gap-2">
                            <BiSolidPurchaseTag className="text-[22px]" />
                            <h1 className="text-textDark text-lg font-medium">Manage Enroll Camps</h1>
                        </div>

                        <div>
                            <Link to={'/dashboard/create-camp'}>
                                <button className="flex items-center gap-2 px-3 py-2 text-xm lg:text-xm font-normal text-white bg-btnColor rounded-xl cursor-pointer">
                                    <span>
                                        <MdFormatListBulletedAdd className="text-[16px] lg:text-[20px]" />
                                    </span>
                                    Total : {camp.length}
                                </button>
                            </Link>
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
                                            className="h-24 px-3 py-2 border border-borderColour rounded-xl shadow-lg space-y-2">

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
                                            <div>
                                                <div className="flex items-center gap-1">
                                                    <span><CiCalendarDate className="text-[22px] text-textDark cursor-pointer" /></span>
                                                    <p className="text-sm font-medium text-textDark">{campInfo?.date}</p>
                                                </div>
                                            </div>

                                        </div>
                                        {
                                            cardOpen && cardIndex === index && (
                                                <div
                                                    key={index}
                                                    className="w-full absolute left-0 -mt-3 bg-white border border-borderColour rounded-xl shadow-lg p-2 animate-slideDown z-10"
                                                >
                                                    <div className="space-y-1">
                                                        <h1 className="text-sm font-medium text-textDark">
                                                            <span className="font-semibold">Participent: </span>
                                                            100
                                                        </h1>
                                                        <h1 className="text-sm font-medium text-textDark">
                                                            <span className="font-semibold">Time: </span>
                                                            {campInfo?.time}
                                                        </h1>
                                                        <h1 className="text-sm font-medium text-textDark">
                                                            <span className="font-semibold">Location: </span>
                                                            {campInfo?.venue}
                                                        </h1>
                                                        <h1 className="text-sm font-medium text-textDark">
                                                            <span className="font-semibold">Fee: </span>
                                                            {campInfo?.campFees} BDT</h1>
                                                    </div>

                                                    <div className="flex items-center justify-between lg:gap-10 mt-5 mb-3">

                                                        <div className="flex items-center gap-2">
                                                            <Link
                                                                to={`/camp-details/${campInfo?._id}`}
                                                                className="bg-btnColor rounded-full p-2">
                                                                <LuView
                                                                    className="text-[18px] text-white cursor-pointer"
                                                                    title="Update" />
                                                            </Link>
                                                            {/* <div className="bg-btnColor rounded-full p-2">
                                                                <MdDeleteOutline
                                                                    onClick={() => handleDelete(campInfo._id)}
                                                                    className="text-[18px] text-white cursor-pointer"
                                                                    title="Delete" />
                                                            </div> */}
                                                        </div>

                                                        <div>
                                                            <button className="primaryBtn text-sm font-medium">
                                                                <span>
                                                                    <GrStatusGood className="text-[18px] text-white" />
                                                                </span>
                                                                Paid
                                                            </button>
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

export default EnrollCamps
