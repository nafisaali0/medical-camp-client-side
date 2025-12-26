// import TodayCamp from "../TodayCamp/TodayCamp"
// import { ImBasecamp } from "react-icons/im"
// import { SiVirustotal } from "react-icons/si"
import { TbHealthRecognition } from "react-icons/tb"
import moment from "moment";
import dashboard from "../../../../assets/images/Dashboard/dashboard_1-removebg.png"
import { SiVirustotal } from "react-icons/si";
import { ImBasecamp } from "react-icons/im";
import Greetings from "../../../../components/Greetings";
import useUserEnrollCamp from './../../../../hooks/useUserEnrollCamp';

const ParticipentLeftSide = ({ currentUser }) => {

    const time = moment().format("LT");
    const [userEnrollCamp] = useUserEnrollCamp()
    return (
        <>
            <div>

                <div className="bg-white p-4 rounded-xl border border-borderColour flex justify-between">

                    <div className="flex justify-between flex-col flex-1">
                        <div>
                            <h1 className="text-textDark text-xl font-bold mb-1">
                                <Greetings />
                                {currentUser?.name}</h1>
                            <div className="flex items-center gap-1">
                                <h1 className="text-textDark text-sm font-medium">Have a Wonderful, Healthy Day!</h1>
                                <TbHealthRecognition className="text-[16px]" />
                                {/* <MdOutlineHealthAndSafety className="text-[16px]" /> */}
                            </div>
                        </div>

                        <div>
                            <p className="text-5xl font-normal text-textDark mt-10">
                                {time}
                            </p>
                        </div>
                    </div>

                    <div
                        className="hidden md:flex w-1/2 h-[180px] -mt-10 justify-end overflow-hidden"
                        style={{
                            backgroundImage: `url(${dashboard})`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "left",
                            backgroundSize: "cover",
                        }}>
                    </div>
                </div>

                <div className="flex justify-between p-4 mt-7 bg-white rounded-xl border border-borderColour">

                    <div className="flex items-center gap-1">
                        <ImBasecamp className="text-[16px] md:text-[22px]" />
                        <h1 className="text-textDark text-xm md:text-lg font-medium">Your Camps</h1>
                    </div>

                    <div>
                        <button className="flex items-center gap-1 px-2 py-2 text-xm font-normal text-white bg-btnColor rounded-xl cursor-pointer">
                            <span>
                                <SiVirustotal className="text-[16px]" />
                            </span>
                            Total : {userEnrollCamp?.length}
                        </button>
                    </div>

                </div>

            </div>
        </>
    )
}

export default ParticipentLeftSide
