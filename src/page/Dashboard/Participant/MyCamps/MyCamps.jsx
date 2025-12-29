import { useState } from "react";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { ImBasecamp } from "react-icons/im";
import { CiCalendarDate, CiCircleChevDown, CiCircleChevUp } from "react-icons/ci";
import { Link } from "react-router-dom";
import { LuView } from "react-icons/lu";
import { GrStatusGood } from "react-icons/gr";
import useUserEnrollCamp from "../../../../hooks/useUserEnrollCamp";
import Review from "../Review/Review";
import ViewUserFeedback from "../Review/ViewUserFeedback";


const MyCamps = () => {

    const [userEnrollCamp] = useUserEnrollCamp();
    const [cardOpen, setCardOpen] = useState(false)
    const [cardIndex, setCardIndex] = useState(null)

    function handleCardDropDown(index) {

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
                            <ImBasecamp className="text-[22px]" />
                            <h1 className="text-textDark text-lg font-medium">My Camps</h1>
                        </div>

                        <div>
                            <button className="flex items-center gap-2 px-3 py-2 text-xm lg:text-xm font-normal text-white bg-btnColor rounded-xl cursor-pointer">
                                <span>
                                    <MdFormatListBulletedAdd className="text-[16px] lg:text-[20px]" />
                                </span>
                                Total : {userEnrollCamp?.length}
                            </button>
                        </div>

                    </div>
                </div>

                <div className="bg-white px-4 py-10 rounded-xl border border-borderColour">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2">
                        {
                            userEnrollCamp?.map((campInfo, index) =>
                                <>
                                    <div key={index} className="relative">
                                        <div
                                            onClick={() => handleCardDropDown(index)}
                                            className="h-24 px-3 py-2 border border-borderColour rounded-xl shadow-lg space-y-2">

                                            <div className="flex items-center justify-between">

                                                <div>
                                                    <h1 className="text-sm font-semibold text-textDark">{campInfo?.enrollCampName}</h1>
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
                                                    <p className="text-sm font-medium text-textDark">{campInfo?.enrollCampDate}</p>
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
                                                            <span className="font-semibold">Time: </span>
                                                            {campInfo?.enrollCampTime}
                                                        </h1>
                                                        <h1 className="text-sm font-medium text-textDark">
                                                            <span className="font-semibold">Location: </span>
                                                            {campInfo?.enrollCampVenue}
                                                        </h1>
                                                        <h1 className="text-sm font-medium text-textDark">
                                                            <span className="font-semibold">Fee: </span>
                                                            {campInfo?.price} BDT</h1>
                                                    </div>

                                                    <div className="flex items-center justify-between lg:gap-10 mt-5 mb-3">

                                                        <div className="flex items-center gap-2">

                                                            {
                                                                campInfo?.rating ?
                                                                    <>
                                                                        <div className="bg-btnColor rounded-full p-2">
                                                                            <ViewUserFeedback
                                                                                rating={campInfo?.rating}
                                                                                comment={campInfo?.comment}
                                                                            />

                                                                        </div>
                                                                    </>
                                                                    :
                                                                    <>
                                                                        <div className="bg-btnColor rounded-full p-2">
                                                                            <Review
                                                                                enrollCampId={campInfo?._id}
                                                                            />
                                                                        </div>
                                                                    </>
                                                            }

                                                            <Link
                                                                to={`/camp-details/${campInfo?.enrollCampId}`}
                                                                className="bg-btnColor rounded-full p-2">
                                                                <LuView
                                                                    className="text-[18px] text-white cursor-pointer"
                                                                    title="View Camp Details" />
                                                            </Link>
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

export default MyCamps
