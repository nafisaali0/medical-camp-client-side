// import useRegisteredCamp from "../../hooks/useRegisteredCamp";
import { Link } from "react-router-dom";
import useCamp from "../../hooks/useCamp";
import { Helmet } from "react-helmet-async";
import { CiCalendarDate } from "react-icons/ci";

const AvailableCamps = () => {

    const [camp] = useCamp()
    // const [registeredCamp] = useRegisteredCamp();
    // const calculateTotalParticipation = (campId) => {
    //     const participantsForCamp = registeredCamp.filter(registration => registration.campId === campId);
    //     return participantsForCamp.length;
    // }


    return (
        <>
            <Helmet>
                <title>Amelia | AvailableCamps</title>
            </Helmet>

            <div className="py-24 p-5">

                {/* button-1 */}
                <div className="max-w-[1300px] mx-auto overflow-hidden p-5 my-20">
                    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-5">
                        {
                            camp?.map((eachCamp, index) =>
                                <>
                                    <div
                                        key={index}
                                        className="card bg-primarylight/60 shadow-sm">
                                        <figure>
                                            <img
                                                src={eachCamp?.image}
                                                className="w-full h-52 object-cover rounded-t-xl"
                                                alt="camp" />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <h2 className="card-title text-sm">{eachCamp?.campName}</h2>
                                            <h2>
                                                <span className="font-semibold">Price: </span>
                                                ৳ {eachCamp?.campFees}
                                            </h2>
                                            <div className="card-actions justify-center mt-5">
                                                <Link to={`/camp-details/${eachCamp?._id}`}>
                                                    <button className="navBtn">
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
                {/* button-2 */}
                <div className="max-w-3xl mx-auto overflow-hidden">
                    <div className="flex flex-col gap-5">
                        {
                            camp.map((eachCamp, index) =>
                                <>
                                    <div
                                        key={index}
                                        className="card card-side bg-primarylight/60 shadow-xl">

                                        <figure>
                                            <img
                                                src={eachCamp?.image}
                                                className="h-72 w-72"
                                                alt="Movie" />
                                        </figure>

                                        <div className="card-body capitalize">
                                            <div className="flex gap-1 items-center text-sm font-medium">
                                                <span>
                                                    <CiCalendarDate className="text-[25px] text-btnColor" />
                                                </span>
                                                {eachCamp.date}
                                            </div>
                                            <h2 className="card-title">{eachCamp?.campName}</h2>
                                            <h2>
                                                <span className="font-semibold">Price: </span>
                                                ৳ {eachCamp.campFees}
                                            </h2>
                                            <h2>
                                                <span className="font-semibold">Target Audience: </span>
                                                {eachCamp.targetAudience}
                                            </h2>
                                            <div className="card-actions justify-start mt-5">
                                                <Link to={`/camp-details/${eachCamp._id}`}>
                                                    <button className="navBtn">
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
                </div>

            </div>
        </>
    );
};

export default AvailableCamps;