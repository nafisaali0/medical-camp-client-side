// import { useEffect, useState } from "react";
// import useCamp from "../../../hooks/useCamp";
// import useRegisteredCamp from "../../../hooks/useRegisteredCamp";
import { Link } from "react-router-dom";
import { IoMdTime } from "react-icons/io";
import { GoPeople } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import useAllEnrollCamp from "../../../hooks/useAllEnrollCamp";


const PopularCamp = () => {

    const [allEnrollCamp] = useAllEnrollCamp();

    return (
        <>
            <div>
                <div className="mb-10">
                    <h1 className="text-3xl text-textDark font-bold text-center">Popular Camps</h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
                    {
                        allEnrollCamp?.slice(0,3).map((enrolledCamp, index) =>
                            <>
                                <div key={index} className="card rounded-t-xl bg-white shadow-lg hover:shadow-xl">
                                    <div className="relative">
                                        <figure>
                                            <img
                                                src={enrolledCamp?.enrollCampImage}
                                                className="w-full h-52 object-cover rounded-t-xl"
                                            />
                                            <div className="absolute inset-0 bg-black/40 rounded-t-xl"></div>
                                        </figure>
                                    </div>
                                    <div className="w-full z-10 md:max-w-[300px] md:mx-auto md:absolute md:top-44 md:left-10 p-4 -mb-14 md:rounded-lg bg-gradient-to-r from-[#404f68] via-[#87A8D0]/70 to-[#B9CEEB]/60 backdrop-blur-sm">
                                        <h2 className="text-center text-lg font-bold text-white">
                                            {enrolledCamp?.enrollCampName}
                                        </h2>
                                    </div>
                                    <div className="card-body pt-10 md:pt-0 p-3 m-0 md:-mt-3 rounded-t-3xl rounded-b-3xl bg-white border-2 border-white">
                                        <div className="flex flex-col items-start gap-4 mt-7 md:mt-14">
                                            <div className="w-full space-y-3">
                                                <div className="flex gap-2 items-start">
                                                    <IoMdTime className="text-[25px] text-btnColor" />
                                                    <h1 className="text-sm font-normal text-textDark">
                                                        <span className="font-bold">Date & Time: </span>
                                                        {enrolledCamp?.enrollCampDate}

                                                        <span className="mx-1 text-textDark font-bold">|</span>

                                                        {enrolledCamp?.enrollCampTime}
                                                    </h1>
                                                </div>

                                                <div className="flex items-start gap-2">
                                                    <GoPeople className="text-[25px] text-btnColor" />
                                                    <h1 className="text-sm font-normal text-textDark">
                                                        <span className="font-bold">Target Audience: </span>
                                                        {enrolledCamp?.enrollCampAge}
                                                    </h1>
                                                </div>

                                                <div className="flex items-start gap-2">
                                                    <IoLocationOutline className="text-[25px] text-btnColor" />
                                                    <h1 className="text-sm font-normal text-textDark">
                                                        <span className="font-bold">Venue: </span>
                                                        {enrolledCamp?.enrollCampVenue}
                                                    </h1>
                                                </div>

                                                <div className="flex items-start gap-2">
                                                    <FaBangladeshiTakaSign className="text-[16px] text-btnColor" />
                                                    <h1 className="text-sm font-normal text-textDark">
                                                        <span className="font-bold">Price: </span>
                                                        {enrolledCamp?.price}
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card-actions justify-center my-3">
                                            <Link to={`/camp-details/${enrolledCamp?.enrollCampId}`}>
                                                <button className="primaryBtn ml-2">
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
            </div>
        </>
    );
};

export default PopularCamp;