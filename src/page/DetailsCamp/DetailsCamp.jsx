// import { useForm } from "react-hook-form";
// import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";
// import useAuth from "../../../hooks/useAuth";
// import useAxioslocalhost from "../../../hooks/useAxioslocalhost";
// import Swal from "sweetalert2";
// import useCamp from './../../../hooks/useCamp';
// import useUsers from './../../../hooks/useUsers';
// import errorIcon from '../../../assets/images/icon/error.svg'
// import React from 'react';
// -------------------------------------------------------------
import { Link, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { IoLocationOutline } from 'react-icons/io5';
import { IoMdTime } from "react-icons/io";
import { GoPeople } from "react-icons/go";
import { CiCalendarDate } from "react-icons/ci";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const DetailCamp = () => {

    const { _id, campImage, campFee, campProfessionals, campName, campAge, campDate, campTime, campVenue, campServices, campDetails } = useLoaderData();

    return (
        <>
            <Helmet>
                <title>Amelia | Camp Details</title>
            </Helmet>

            <div className="py-20 px-5 my-16">

                <div className="max-w-[1300px] mx-auto p-10 overflow-hidden space-y-25 rounded-xl shadow-lg border border-borderColour">

                    <div className="flex flex-col xl:flex-row items-start justify-around gap-5">

                        <div className="relative xl:flex-1 w-full xl:h-[500px] xl:w-1/2 rounded-xl border-2 border-borderColour">
                            <figure>
                                <img src={campImage}
                                    alt="campsImage"
                                    className="w-full xl:h-[500px] object-center rounded-xl" />
                            </figure>
                            <div className="absolute inset-0 bg-black/30 rounded-xl"></div>
                        </div>

                        <div className="xl:flex-1 w-full xl:w-1/2">

                            <button className="flex items-center gap-1 px-4 py-1 mt-3 border border-borderColour rounded-full text-sm font-medium capitalize">
                                <span>
                                    <IoLocationOutline className="text-[25px] text-btnColor" />
                                </span>
                                {campVenue}
                            </button>

                            <div className="mt-3">
                                <h1 className="text-2xl xl:text-3xl text-textDark font-bold">{campName}</h1>
                            </div>

                            <div className="space-y-3 mt-10">

                                <p className="text-md text-textDark font-medium">
                                    {campDetails}
                                </p>

                                <div>

                                    <p className="text-md text-textDark font-medium">
                                        <span className="font-bold">
                                            HealthcareProfessionals: </span>
                                        {campProfessionals}
                                    </p>

                                    <p className="text-md text-textDark font-medium">
                                        <span className="font-bold">Services: </span>
                                        {campServices}
                                    </p>

                                </div>
                            </div>
                            {/* large screen */}
                            <div className="hidden lg:flex items-center gap-3 mt-5 p-5 rounded-lg border border-borderColour">

                                <p className="flex items-center justify-center gap-1 text-sm font-medium capitalize">
                                    <span>
                                        <GoPeople className="text-[25px] text-btnColor" />
                                    </span>
                                    {campAge}
                                </p>

                                <p className="flex items-center justify-center gap-1 text-sm font-medium">
                                    <span>
                                        <CiCalendarDate className="text-[25px] text-btnColor" />
                                    </span>
                                    {campDate}
                                </p>

                                <p className="flex items-center justify-center gap-1 text-sm font-medium">
                                    <span>
                                        <IoMdTime className="text-[25px] text-btnColor" />
                                    </span>
                                    {campTime}
                                </p>

                                <p className="flex items-center justify-center gap-1 text-sm font-medium">
                                    <span>
                                        <FaBangladeshiTakaSign className="text-[16px] text-btnColor" />
                                    </span>
                                    {campFee}
                                </p>

                            </div>

                            {/* mobile screen */}
                            <div className="block lg:hidden mt-5 p-5 rounded-lg border border-borderColour">
                                <div className="flex justify-around items-center">
                                    <p className="flex items-center justify-center gap-2 text-sm font-medium capitalize">
                                        <span>
                                            <GoPeople className="text-[25px] text-btnColor" />
                                        </span>
                                        {campAge}
                                    </p>

                                    <p className="flex items-center justify-center gap-2 text-sm font-medium">
                                        <span>
                                            <CiCalendarDate className="text-[25px] text-btnColor" />
                                        </span>
                                        {campDate}
                                    </p>
                                </div>

                                <div className="my-5 bg-borderColour border-t-2 border-t-borderColour"></div>

                                <div className="flex justify-around items-center">
                                    <p className="flex items-center justify-center gap-2 text-sm font-medium">
                                        <span>
                                            <IoMdTime className="text-[25px] text-btnColor" />
                                        </span>
                                        {campTime}
                                    </p>

                                    <p className="flex items-center justify-center gap-2 text-sm font-medium">
                                        <span>
                                            <FaBangladeshiTakaSign className="text-[16px] text-btnColor" />
                                        </span>
                                        {campFee}
                                    </p>
                                </div>

                            </div>

                            <div className="my-5">
                                {/*  to={`/camp-details/${enrolledCamp?.campId}`} */}
                                <Link to={`/camp-enrollment/${_id}`}>
                                    <button className="primaryBtn">
                                        Enroll Now
                                        <div className="arrow-wrapper">
                                            <div className="arrow"></div>
                                        </div>
                                    </button>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailCamp;