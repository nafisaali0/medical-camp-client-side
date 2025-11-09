// import { MdOutlineHealthAndSafety } from "react-icons/md"
import useUsers from "../../../../hooks/useUsers";
import { TbHealthRecognition } from "react-icons/tb";
import moment from "moment";
import dashboard from "../../../../assets/images/Dashboard/dashboard_1-removebg.png"


const AdminDasboard = () => {

    const [users] = useUsers();
    const currentUser = users?.length > 0 ? users[0] : {};
    const time = moment().format("LT");

    return (
        <>
            <div className="flex flex-col xl:flex-row gap-5 xl:justify-between">
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

                    {/* Name
                    Total Camp
                    Registration
                    Total Users
                    today camp */}
                </div>
                <div className="flex-1 w-auto">
                    User Profile
                    Edit User Profile
                </div>

            </div>
        </>
    )
}

export default AdminDasboard
