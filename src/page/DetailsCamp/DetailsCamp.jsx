import { Link, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { IoLocationOutline } from 'react-icons/io5';
import { IoMdTime } from "react-icons/io";
import { GoPeople } from "react-icons/go";
import { CiCalendarDate } from "react-icons/ci";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { useState, useEffect } from 'react';
import useCamp from './../../hooks/useCamp';
import useUsers from "../../hooks/useUsers";
import useUserEnrollCamp from "../../hooks/useUserEnrollCamp";
import { Bounce, toast } from "react-toastify";

const DetailCamp = () => {

    const { _id, campImage, campFee, campProfessionals, campName, campAge, campDate, campTime, campVenue, campServices, campDetails, campCategory } = useLoaderData();
    const [camp] = useCamp();
    const [userEnrollCamp] = useUserEnrollCamp();
    const [sameCategoryCamp, setSameCategoryCamp] = useState();
    const [users] = useUsers();
    const currentUser = users?.length > 0 ? users[0] : {};
    const [isButtonDisabled, setButtonDisabled] = useState(false);
    const checkSameBlog = userEnrollCamp?.some(readBlog => readBlog?.enrollCampId === _id)

    const handleClick = (e) => {

        if (currentUser?.userRole === "Admin") {
            e.preventDefault();
            setButtonDisabled(true);
            toast.error('Admin cannot enroll in the camp.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        } else if (currentUser?.userRole === "Participant" && checkSameBlog === true) {
            e.preventDefault();
            setButtonDisabled(true);
            toast.error('You are already enrolled in this camp.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        } else {
            setButtonDisabled(true);
        }

    };

    useEffect(() => {

        if (!camp) return;
        const sameCamps = camp.filter((item) => item?.campCategory === campCategory && item?._id !== _id);
        setSameCategoryCamp(sameCamps);

    }, [camp, campCategory, _id]);

    return (
        <>
            {/* <Helmet>
                <title>Amelia | Camp Details</title>
            </Helmet> */}

            <div className="py-20 px-5 my-16">

                <div className="max-w-[1300px] mx-auto overflow-hidden">

                    <div data-aos="fade-down" className="p-10 space-y-25 rounded-xl shadow-lg border border-borderColour">
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
                                                Category: </span>
                                            {campCategory}
                                        </p>
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

                                    {/* <Link to={`/camp-enrollment/${_id}`}>
                                        <button className="primaryBtn">
                                            Enroll Now
                                            <div className="arrow-wrapper">
                                                <div className="arrow"></div>
                                            </div>
                                        </button>
                                    </Link> */}
                                    <Link
                                        onClick={handleClick}
                                        className={`button ${isButtonDisabled ? "disabled" : ""}`}
                                        to={`/camp-enrollment/${_id}`}>
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

                    <div data-aos="fade-up" className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 mt-20">

                        {
                            sameCategoryCamp?.map((eachCamp, index) =>

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

                                                <Link
                                                    to={`/camp-details/${eachCamp?._id}`}>
                                                    <button
                                                        className="primaryBtn"
                                                    >
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

                    </div >

                </div>
            </div >
        </>
    );
};

export default DetailCamp;