import { MdFormatListBulletedAdd } from "react-icons/md"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { CiCalendarDate, CiCircleChevDown, CiCircleChevUp } from "react-icons/ci";
import { IoTodayOutline } from "react-icons/io5";
import moment from "moment";
import Loader from "../../../../components/Loader";

const ShowTodayCamp = ({ camp }) => {

    const [cardOpen, setCardOpen] = useState(false)
    const [cardIndex, setCardIndex] = useState(null)
    const [todayCamp, setTodayCamp] = useState()
    const todayDate = moment().format('YYYY-MM-DD');

    function handleCardDropDown(index) {

        if (cardIndex === index) {
            setCardOpen(!cardOpen);
        } else {
            setCardIndex(index);
            setCardOpen(true);
        }

    }

    useEffect(() => {

        if (!camp) return <Loader />;

        const storeDayCamp = camp?.filter(camp => camp?.campDate === todayDate);

        setTodayCamp(storeDayCamp);

    }, [camp, todayDate]);

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
                    todayCamp === 0 ?
                        <>
                            <div className="flex flex-col justify-center items-center gap-1">
                                <h1 className="text-xl font-semibold text-textDark">No Camp Today</h1>
                                <h1 className="text-lg font-medium text-grayText">{todayDate}</h1>
                            </div>
                        </>
                        :
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
                                {
                                    todayCamp?.map((campInfo, index) =>

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

                                                            <div className="space-y-1 py-3 px-3">
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

                                                            <div className="my-3 px-3">

                                                                <div>
                                                                    <Link to={`/camp-details/${campInfo?._id}`}>
                                                                        <button className="primaryBtn">
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
