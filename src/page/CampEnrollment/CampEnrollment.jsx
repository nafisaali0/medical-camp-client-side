import Payment from "./Payment";
import { Link, useLoaderData } from "react-router-dom";


const CampEnrollment = () => {

    const { _id, campImage, campFee, campName, campDate, campVenue, campTime, campAge, campCategory, } = useLoaderData();

    return (
        <>
            <div className="py-20 px-5 my-10 lg:my-16">
                <div className="max-w-[1300px] mx-auto p-5 overflow-hidden">
                    <div className="flex flex-col lg:flex-row gap-5 lg:justify-between">
                        <div>
                            <div className="w-auto lg:w-[900px] p-5 border border-borderColour rounded-xl shadow-lg hover:shadow-xl">

                                <div>
                                    <h1 className="mb-10 text-2xl md:text-3xl font-bold text-gradient">
                                        Take Your Step Toward Better Health
                                    </h1>
                                </div>

                                <Payment
                                    enrollCampId={_id}
                                    enrollCampName={campName}
                                    enrollCampCategory={campCategory}
                                    enrollCampFee={campFee}
                                    enrollCampDate={campDate}
                                    enrollCampVenue={campVenue}
                                    enrollCampTime={campTime}
                                    enrollCampAge={campAge}
                                    enrollCampImage={campImage}>
                                </Payment>

                            </div>
                        </div>
                        {/* right side */}
                        <div className="flex-1 w-auto">
                            <div
                                key={_id}
                                className="card bg-primarylight/60 shadow-lg hover:shadow-xl">

                                <figure>
                                    <img
                                        src={campImage}
                                        className="w-full h-52 object-cover rounded-t-xl"
                                        alt="camp" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title text-sm">{campName}</h2>
                                    <h2>
                                        <span className="font-semibold">Price: </span>
                                        ৳ {campFee}
                                    </h2>
                                    <div className="card-actions justify-center mt-5">
                                        <Link to={`/camp-details/${_id}`}>
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
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default CampEnrollment
