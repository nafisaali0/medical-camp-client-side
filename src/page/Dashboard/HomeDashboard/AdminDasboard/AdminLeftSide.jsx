import moment from "moment";
import { TbHealthRecognition } from "react-icons/tb"
import dashboard from "../../../../assets/images/Dashboard/dashboard_1-removebg.png"
import { ImBasecamp } from "react-icons/im";
import { MdOutlineConfirmationNumber } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import TodayCamp from "../TodayCamp/TodayCamp";

const AdminLeftSide = ({ currentUser }) => {

  const time = moment().format("LT");

  return (
    <>
      <div className="w-auto xl:w-[800px]">

        <div className="bg-white p-4 rounded-xl border border-borderColour flex justify-between">

          <div className="flex justify-between flex-col flex-1">
            <div>
              <h1 className="text-textDark text-xl font-bold mb-1">Good Morning {currentUser?.name}</h1>
              <div className="flex items-center gap-1">
                <h1 className="text-textDark text-sm font-medium">Have a Wonderful, Healthy Day!</h1>
                <TbHealthRecognition className="text-[16px]" />
                {/* <MdOutlineHealthAndSafety className="text-[16px]" /> */}
              </div>
            </div>

            <div>
              <p className="text-5xl font-normal text-textDark">
                {time}
              </p>
            </div>
          </div>

          <div
            className="hidden md:flex w-1/2 h-[200px] -mt-10 justify-end overflow-hidden"
            style={{
              backgroundImage: `url(${dashboard})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left",
              backgroundSize: "cover",
            }}>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 mt-7">

          <div className="p-4 w-full bg-white rounded-xl">
            <h1 className="text-xl font-semibold text-textDark">Total Camp</h1>
            <div className="flex items-center gap-3 mt-3">
              <div className="bg-btnColor rounded-xl p-2">
                <ImBasecamp
                  className="text-[16px] text-white"
                  title="Change Image" />
              </div>
              <p className="text-lg font-semibold text-textDark">500</p>
            </div>
          </div>
          <div className="p-4 w-full bg-white rounded-xl">
            <h1 className="text-xl font-semibold text-textDark">Total Enroll Camp</h1>
            <div className="flex items-center gap-3 mt-3">
              <div className="bg-btnColor rounded-xl p-2">
                <MdOutlineConfirmationNumber
                  className="text-[16px] text-white"
                  title="Change Image" />
              </div>
              <p className="text-lg font-semibold text-textDark">500</p>
            </div>
          </div>
          <div className="p-4 w-full bg-white rounded-xl">
            <h1 className="text-xl font-semibold text-textDark">Total User</h1>
            <div className="flex items-center gap-3 mt-3">
              <div className="bg-btnColor rounded-xl p-2">
                <FaUsers
                  className="text-[16px] text-white"
                  title="Change Image" />
              </div>
              <p className="text-lg font-semibold text-textDark">500</p>
            </div>
          </div>

        </div>

        <TodayCamp />

      </div>
    </>
  )
}

export default AdminLeftSide
