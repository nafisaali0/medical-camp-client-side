import { useEffect, useState } from "react";
import HomeTitle from "../../../components/HomeTitle";
import useCamp from "../../../hooks/useCamp";
import { Link } from "react-router-dom";

const PopularCamp = () => {

    const [camp] = useCamp()
    const [camps, setCamps] = useState([])
    const [sortOrder, setSortOrder] = useState('');

    useEffect(() => {
        const sortedCamp = [...camp].sort((a, b) => a.enroll - b.enroll);
        // loading()
        setCamps(sortedCamp);
    }, [camp]);
    // console.log(camps)

    const handleSort = () => {
        const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        setSortOrder(newSortOrder);

        const sortedCamp = [...camp].sort((a, b) => {
            if (newSortOrder === 'asc') {
                return a.enroll - b.enroll;
            } else {
                return b.enroll - a.enroll;
            }
        });

        setCamps(sortedCamp);
        // loading()
    };

    return (
        <>
            <div className="container mx-auto my-10 p-3">
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
                                <li onClick={handleSort}><a>Sort By low to high</a></li>
                                <li onClick={handleSort}><a>Sort By high to low</a></li>
                            </ul>
                        </details>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 m-3">
                    {
                        camps.map(eachCamp =>
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
                                            <h1>Participent: <span className="text-lg font-normal">{eachCamp.enroll}</span></h1>
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
                                        <Link to={`/detail-camp/${eachCamp._id}`}>
                                            <button className="btn text-white bg-gradient-to-r from-blue-500 to-indigo-800">See Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>
                <div className="my-5 p-5 flex justify-center items-center">
                    <Link to={'/available-Camps'}>
                        <button className="btn text-white bg-gradient-to-r from-blue-500 to-indigo-800">See All Camp</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default PopularCamp;