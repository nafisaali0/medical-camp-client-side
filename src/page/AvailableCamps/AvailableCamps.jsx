import { Link } from "react-router-dom";
import useCamp from "../../hooks/useCamp";
import useRegisteredCamp from "../../hooks/useRegisteredCamp";
import { Helmet } from "react-helmet-async";

const AvailableCamps = () => {

    const [camp] = useCamp()
    const [registeredCamp] = useRegisteredCamp();
    // console.log(camp)
    const calculateTotalParticipation = (campId) => {
        const participantsForCamp = registeredCamp.filter(registration => registration.campId === campId);
        return participantsForCamp.length;
    }


    return (
        <>
            <Helmet>
                <title>Amelia | AvailableCamps</title>
            </Helmet>
            <div className="overflow-hidden bg-[#f0f2f5] p-3">
                <div className="container mx-auto my-10">
                    <div className="grid grid-cols-1 gap-5">
                        {
                            camp.map(eachCamp =>
                                <>
                                    <div className="flex flex-col lg:gap-6 bg-[#e4e6eb] border border-gray-200 rounded-lg shadow lg:flex-row lg:w-full hover:bg-gray-100">
                                        <img className="object-cover w-full rounded-t-lg h-96 lg:w-[500px] lg:h-[440px] lg:rounded-l-lg" src={eachCamp.image} alt="" />
                                        <div className="flex flex-col p-4">
                                            <div className="text-xl font-semibold text-left">
                                                <h5 className="mb-2 text-2xl font-bold  text-black">{eachCamp.campName}</h5>
                                                <h1>Services: <span className="text-lg font-normal">{eachCamp.services}</span>  </h1>
                                                <h1 className="my-5">healthcareProfessionals: <span className="text-lg font-normal">{eachCamp.healthcareProfessionals}</span></h1>
                                                <h1 className="my-5">Target Audience: <span className="text-lg font-normal">{eachCamp.targetAudience}</span></h1>
                                            </div>
                                            <div className="flex items-center gap-5 text-xl font-semibold">
                                                <h1>Participent: <span className="text-lg font-normal">{calculateTotalParticipation(eachCamp._id)}</span></h1>
                                                <h1>Camp Fees: <span className="text-lg font-normal">{eachCamp.campFees} $</span></h1>
                                            </div>
                                            <div className="flex flex-wrap items-center gap-3 text-xl font-semibold text-left my-5">
                                                <h1>Date :{eachCamp.date}</h1>
                                                <h1>Time :{eachCamp.time}</h1>
                                                <h1>Vanue: {eachCamp.venue}</h1>
                                            </div>
                                            <div className='flex gap-5 mt-3'>
                                                <Link to={`/camp-details/${eachCamp._id}`}>
                                                    <button className="btn text-white bg-gradient-to-r from-blue-500 to-indigo-800">See Details</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default AvailableCamps;