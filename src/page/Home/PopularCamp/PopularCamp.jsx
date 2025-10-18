// import { useEffect, useState } from "react";
// import useCamp from "../../../hooks/useCamp";
// import useRegisteredCamp from "../../../hooks/useRegisteredCamp";
import useAllRegisteredCamp from "../../../hooks/useAllRegisteredCamp";
import { Link } from "react-router-dom";
import { IoMdTime } from "react-icons/io";
import { GoPeople } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { TbCoinTaka } from "react-icons/tb";

const PopularCamp = () => {

    
    const [allregisteredCamp] = useAllRegisteredCamp();
    // console.log(allregisteredCamp)


    // const [camp] = useCamp()
    // console.log(camp)
    // const [registeredCamp] = useRegisteredCamp();
    // console.log(registeredCamp)
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
                <div className="mb-10">
                    <h1 className="text-4xl text-textDark font-bold text-center">Enrolled Camps</h1>
                </div>

                {/* testing */}
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
                    {
                        allregisteredCamp?.map((enrolledCamp, index) =>
                            <>
                                <div key={index}>
                                    <div className="card h-96 rounded-t-xl bg-white shadow-lg hover:shadow-xl">
                                        <figure>
                                            <img
                                                src={enrolledCamp.image}
                                                className="w-full h-52 object-cover"
                                            />
                                        </figure>

                                        <div className="w-full z-10 md:max-w-[300px] md:mx-auto md:absolute md:top-20 md:left-10 p-4 -mb-14 md:rounded-lg bg-gradient-to-r from-[#404f68] via-[#87A8D0] to-[#B9CEEB]">
                                            <h2 className="text-center text-lg font-bold text-white">
                                                {enrolledCamp.campName}
                                            </h2>
                                        </div>

                                        <div className="card-body pt-10 md:pt-0 p-3 m-0 md:-mt-3 rounded-t-3xl rounded-b-3xl bg-white border-2 border-white">
                                            <div className="flex flex-col items-start gap-4 mt-6 md:mt-12">
                                                <div className="w-full space-y-3">
                                                    <div className="flex gap-2 items-start">
                                                        <IoMdTime className="text-[25px] text-btnColor" />
                                                        <h1 className="text-sm font-normal text-textDark">
                                                            <span className="font-bold">Date & Time: </span>
                                                            {enrolledCamp.date}

                                                            |

                                                            {enrolledCamp.time}
                                                        </h1>
                                                    </div>

                                                    <div className="flex items-start gap-2">
                                                        <GoPeople className="text-[25px] text-btnColor" />
                                                        <h1 className="text-sm font-normal text-textDark">
                                                            <span className="font-bold">Target Audience: </span>
                                                            Adult
                                                        </h1>
                                                    </div>

                                                    <div className="flex items-start gap-2">
                                                        <IoLocationOutline className="text-[25px] text-btnColor" />
                                                        <h1 className="text-sm font-normal text-textDark">
                                                            <span className="font-bold">Venue: </span>
                                                            {enrolledCamp.venue}
                                                        </h1>
                                                    </div>

                                                    <div className="flex items-start gap-2">
                                                        <TbCoinTaka className="text-[25px] text-btnColor" />
                                                        <h1 className="text-sm font-normal text-textDark">
                                                            <span className="font-bold">Price: </span>
                                                            {enrolledCamp.campFees}
                                                        </h1>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card-actions justify-center my-3">
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
                            </>
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default PopularCamp;