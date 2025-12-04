import { Link } from "react-router-dom";
import useCamp from "../../hooks/useCamp";
import { Helmet } from "react-helmet-async";
import { CiCalendarDate } from "react-icons/ci";
import { IoArrowDownCircleOutline, IoArrowUpCircle, IoGridOutline } from "react-icons/io5";
import { AiOutlineBars } from "react-icons/ai";
import { useEffect, useState } from "react";
import Loader from './../../components/Loader';

const AvailableCamps = () => {

    const [camp] = useCamp()
    const [grid, setGridOpen] = useState(true)
    const [singleAlign, setSingleAlignOpen] = useState(false)
    const [defaultCamp, setDefaultCamp] = useState()

    useEffect(() => {
        if (camp?.length > 0) {
            setDefaultCamp(camp)
        } else {
            <Loader />
        }
    }, [camp])

    function handleAscendingOrder() {

        if (camp?.length === 0) return
        const copyCamp = [...camp];

        const sorting = copyCamp.sort(function (a, b) {
            return parseFloat(b.campFee) - parseFloat(a.campFee);
        })
        setDefaultCamp(sorting)
    }
    function handleDescendingOrder() {

        if (camp?.length === 0) return
        const copyCamp = [...camp];

        const sorting = copyCamp.sort(function (a, b) {
            return parseFloat(a.campFee) - parseFloat(b.campFee);
        })

        setDefaultCamp(sorting)
    }

    function handleSingleAlign() {
        // console.log("handleSingleAlign")
        if (singleAlign === false) {
            setSingleAlignOpen(true)
        }
        else {
            setGridOpen(false)
        }
    }
    function handleGrid() {
        // console.log("gridOpen")
        if (grid === false) {
            setGridOpen(true)
        }
        else {
            setSingleAlignOpen(false)
        }
    }

    return (
        <>
            <Helmet>
                <title>Amelia | AvailableCamps</title>
            </Helmet>

            <div className="py-20 px-5 my-16">

                {
                    grid ?
                        (
                            <>
                                {/* card-grid */}
                                <div className="max-w-[1300px] mx-auto overflow-hidden p-5">

                                    {
                                        defaultCamp !== 0 ?
                                            (
                                                <>
                                                    <div className="flex justify-between items-center mb-5">

                                                        <div className="flex items-center gap-2 border-2 border-btnColor rounded-full px-5 py-2">
                                                            <button className="text-sm font-semibold text-textDark">Sort by Price: </button>
                                                            <div>
                                                                <IoArrowUpCircle
                                                                    onClick={handleAscendingOrder}
                                                                    className="text-[20px] text-btnColor cursor-pointer" />
                                                            </div>
                                                            <div>
                                                                <IoArrowDownCircleOutline
                                                                    onClick={handleDescendingOrder}
                                                                    className="text-[20px] text-btnColor cursor-pointer" />
                                                            </div>
                                                        </div>
                                                        <div className="hidden md:flex gap-3 items-center">
                                                            <div>
                                                                <IoGridOutline
                                                                    onClick={handleGrid}
                                                                    className="text-[20px] text-btnColor cursor-pointer" />
                                                            </div>
                                                            <div>
                                                                <AiOutlineBars
                                                                    onClick={handleSingleAlign}
                                                                    className="text-[20px] text-btnColor cursor-pointer" />
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-5">

                                                        {
                                                            defaultCamp?.map((eachCamp, index) =>

                                                                <>
                                                                    <div
                                                                        key={index}
                                                                        className="card bg-primarylight/60 shadow-lg hover:shadow-xl">

                                                                        <figure>
                                                                            <img
                                                                                src={eachCamp?.campImage}
                                                                                className="w-full h-52 object-cover rounded-t-xl"
                                                                                alt="camp" />
                                                                        </figure>
                                                                        <div className="card-body items-center text-center">
                                                                            <h2 className="card-title text-sm">{eachCamp?.campName}</h2>
                                                                            <h2>
                                                                                <span className="font-semibold">Price: </span>
                                                                                ৳ {eachCamp?.campFee}
                                                                            </h2>
                                                                            <div className="card-actions justify-center mt-5">
                                                                                <Link to={`/camp-details/${eachCamp?._id}`}>
                                                                                    <button className="primaryBtn">
                                                                                        View Details
                                                                                        <div className="arrow-wrapper">
                                                                                            <div className="arrow"></div>
                                                                                        </div>
                                                                                    </button>
                                                                                </Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </>
                                                            )
                                                        }

                                                    </div>
                                                </>
                                            )
                                            :
                                            (
                                                <>
                                                    <div className="flex justify-center items-center">
                                                        <div>
                                                            <h1 className="text-textDark text-3xl font-bold">
                                                                No Camps Available
                                                            </h1>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                    }

                                </div>
                            </>
                        )
                        :
                        singleAlign ?
                            (
                                <>
                                    {/* card-single-align */}
                                    <div className="max-w-3xl mx-auto overflow-hidden p-5">

                                        {
                                            defaultCamp !== 0 ?
                                                (
                                                    <>
                                                        <div className="flex justify-between items-center mb-5">

                                                            <div className="flex items-center gap-2 border-2 border-btnColor rounded-full px-5 py-2">
                                                                <button className="text-sm font-semibold text-textDark">Sort by Price</button>
                                                                <div>
                                                                    <IoArrowUpCircle
                                                                        className="text-[20px] text-btnColor cursor-pointer" />
                                                                </div>
                                                                <div>
                                                                    <IoArrowDownCircleOutline
                                                                        className="text-[20px] text-btnColor cursor-pointer" />
                                                                </div>
                                                            </div>
                                                            <div className="hidden md:flex gap-3 items-center">
                                                                <div>
                                                                    <IoGridOutline
                                                                        onClick={handleGrid}
                                                                        className="text-[20px] text-btnColor cursor-pointer" />
                                                                </div>
                                                                <div>
                                                                    <AiOutlineBars
                                                                        onClick={handleSingleAlign}
                                                                        className="text-[20px] text-btnColor cursor-pointer" />
                                                                </div>
                                                            </div>

                                                        </div>

                                                        <div className="flex flex-col gap-5">

                                                            {
                                                                defaultCamp.map((eachCamp, index) =>
                                                                    <>
                                                                        <div
                                                                            key={index}
                                                                            className="card card-side bg-primarylight/60 shadow-lg hover:shadow-xl">

                                                                            <figure>
                                                                                <img
                                                                                    src={eachCamp?.campImage}
                                                                                    className="h-72 w-72"
                                                                                    alt="Movie" />
                                                                            </figure>

                                                                            <div className="card-body capitalize">
                                                                                <div className="flex gap-1 items-center text-sm font-medium">
                                                                                    <span>
                                                                                        <CiCalendarDate className="text-[25px] text-btnColor" />
                                                                                    </span>
                                                                                    {eachCamp.campDate}
                                                                                </div>
                                                                                <h2 className="card-title">{eachCamp?.campName}</h2>
                                                                                <h2>
                                                                                    <span className="font-semibold">Price: </span>
                                                                                    ৳ {eachCamp.campFee}
                                                                                </h2>
                                                                                <h2>
                                                                                    <span className="font-semibold">Target Audience: </span>
                                                                                    {eachCamp.campAge}
                                                                                </h2>
                                                                                <div className="card-actions justify-start mt-5">
                                                                                    <Link to={`/camp-details/${eachCamp._id}`}>
                                                                                        <button className="primaryBtn">
                                                                                            View Details
                                                                                            <div className="arrow-wrapper">
                                                                                                <div className="arrow"></div>
                                                                                            </div>
                                                                                        </button>
                                                                                    </Link>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </>
                                                                )}

                                                        </div>
                                                    </>
                                                )
                                                :
                                                (
                                                    <>
                                                        <div className="flex justify-center items-center">
                                                            <div>
                                                                <h1 className="text-textDark text-3xl font-bold">
                                                                    No Camps Available
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                        }
                                    </div>
                                </>
                            )
                            :
                            ""
                }

            </div>
        </>
    );
};

export default AvailableCamps;