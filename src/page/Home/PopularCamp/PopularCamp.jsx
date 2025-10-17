// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCamp from "../../../hooks/useCamp";
import useRegisteredCamp from "../../../hooks/useRegisteredCamp";
import { IoMdTime } from "react-icons/io";
import { GoPeople } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { TbCoinTaka } from "react-icons/tb";

const PopularCamp = () => {

    const [camp] = useCamp()
    console.log(camp)
    const [registeredCamp] = useRegisteredCamp();
    console.log(registeredCamp)
    // const [camps, setCamps] = useState([])
    // const [sortOrder, setSortOrder] = useState('asc'); // Default sorting order is ascending

    // const calculateTotalParticipation = (campId) => {
    //     const participantsForCamp = registeredCamp.filter(registration => registration.campId === campId);
    //     // console.log(participantsForCamp.length)
    //     return participantsForCamp.length;
    // }

    // useEffect(() => {
    //     // Sort the camp data based on the number of participants and sorting order
    //     const sortedCamp = [...camp].sort((a, b) => {
    //         const participantsA = registeredCamp.filter(registration => registration.campId === a._id).length;
    //         const participantsB = registeredCamp.filter(registration => registration.campId === b._id).length;

    //         return sortOrder === 'asc' ? participantsA - participantsB : participantsB - participantsA;
    //     });

    //     setCamps(sortedCamp);
    // }, [camp, registeredCamp, sortOrder]);

    // const handleSort = () => {
    //     // Toggle sorting order
    //     const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    //     setSortOrder(newSortOrder);
    // };

    return (
        <>
            {/* <div className="container mx-auto my-10 p-3">
                <div className="flex justify-between items-center mt-10 my-24">
                    <div>
                        <HomeTitle
                            title={"Popular Camp"}>
                        </HomeTitle>
                    </div>
                    <div>
                        <details className="dropdown ">
                            <summary className="m-1 btn">Sort By Participant</summary>
                            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                <li onClick={handleSort}><a>Sort By high to low</a></li>
                                <li onClick={handleSort}><a>Sort By low to high</a></li>
                            </ul>
                        </details>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 m-3">
                    {
                        camps.slice(0, 6).map(eachCamp =>
                            <>
                                <div className="card card-compact bg-base-100 shadow-xl">
                                    <figure><img className="w-[500px] h-[300px]" src={eachCamp.image} alt="Shoes" /></figure>
                                    <div className="card-body p-5 overflow-hidden">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h2 className="card-title">{eachCamp.campName}</h2>
                                            </div>
                                            <div>
                                                <h2 className="card-title">{eachCamp.campFees} $</h2>
                                            </div>
                                        </div>
                                        <div className="text-xl font-semibold text-left">
                                            <h1>Services: <span className="text-lg font-normal">{eachCamp.services}</span>  </h1>
                                            <h1 className="my-5">healthcareProfessionals: <span className="text-lg font-normal">{eachCamp.healthcareProfessionals}</span></h1>
                                            <h1 className="my-5">Target Audience: <span className="text-lg font-normal">{eachCamp.targetAudience}</span></h1>
                                            <h1>Participent: <span className="text-lg font-normal">{calculateTotalParticipation(eachCamp._id)}</span></h1>
                                        </div>
                                        <div className="flex justify-between items-center text-xl font-semibold text-left my-5">
                                            <h1>{eachCamp.date}</h1>
                                            <h1>{eachCamp.time}</h1>
                                        </div>
                                        <div className="text-xl font-semibold text-left">
                                            <h1>Vanue: {eachCamp.venue}</h1>
                                        </div>
                                    </div>
                                    <div className="my-5 p-5">
                                        <Link to={`/camp-details/${eachCamp._id}`}>
                                            <button className="btn text-white bg-gradient-to-r from-blue-500 to-indigo-800">See Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>
                <div className="my-5 p-5 flex justify-center items-center">
                    <Link to={'/available-camps'}>
                        <button className="btn text-white bg-gradient-to-r from-blue-500 to-indigo-800">See All Camp</button>
                    </Link>
                </div>
            </div> */}

            <div>
                <div className="mb-5">
                    <h1 className="text-4xl text-textDark font-bold text-center">Enrolled Camps</h1>
                </div>
                <div>
                    <div className="card bg-[#ffff] max-w-xl shadow-lg">
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="camp" />
                        </figure>
                        <div className="bg-btnColor bg-transparent p-5 -mt-5">
                            <h2 className="text-3xl font-bold text-[#ffff]">Community Immunization Drive</h2>
                        </div>
                        <div className="card-body">
                            <div className="flex gap-2 justify-center item-center">
                                <div>
                                    <div className="flex gap-2 justify-center items-center">
                                        <div>
                                            <IoMdTime className="text-[20px] text-btnColor" />
                                        </div>
                                        <div>
                                            <h1 className="text-sm font-normal text-textDark">
                                                <span className="font-bold">Date & Time: </span>
                                                Sat, Nov 16, 2025, 9:00 AM – 12:11 PM
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 justify-center items-center">
                                        <div>
                                            <GoPeople className="text-[20px] text-btnColor" />
                                        </div>
                                        <div>
                                            <h1 className="text-sm font-normal text-textDark">
                                                <span className="font-bold">Target Audience: </span>
                                                Children Ages 0–5 & Parents
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex gap-2 items-center">
                                        <div>
                                            <IoLocationOutline className="text-[20px] text-btnColor" />
                                        </div>
                                        <div>
                                            <h1 className="text-sm font-normal text-textDark">
                                                <span className="font-bold">Vanue: </span>
                                                Community Health Clinic, Room 3B
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <div>
                                            <TbCoinTaka className="text-[20px] text-btnColor" />
                                        </div>
                                        <div>
                                            <h1 className="text-sm font-normal text-textDark">
                                                <span className="font-bold">Price: </span>
                                                Free (Sponsored Event)
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-actions justify-center mt-5">
                                <Link to={"/available-camps"}>
                                    <button className="navBtn ml-2">
                                        See Details
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

export default PopularCamp;