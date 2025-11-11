import { CiCalendarDate } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineUpdate } from "react-icons/md";

const AdminRightSide = ({ currentUser }) => {

    return (
        <>
            <div className="flex-1 w-full">
                <div className="bg-white p-4 rounded-xl shadow-lg mt-8 relative">
                    <div className="flex flex-col justify-center items-center text-center">
                        <div className="-mt-12 flex justify-center items-center">
                            <figure>
                                <img
                                    src={currentUser?.photo}
                                    alt=""
                                    className="w-full h-56 xl:w-56 rounded-xl" />
                            </figure>
                        </div>
                        <div className="absolute -top-5 right-14 md:right-56 xl:right-20">
                            <button className="bg-white/10 rounded-xl p-2">
                                <FaRegEdit
                                    className="text-[18px] text-white"
                                    title="Change Image" />
                            </button>
                        </div>
                        <div className="mt-5">
                            <h1 className="text-lg font-medium text-textDark">{currentUser?.name}</h1>
                            <h1 className="text-sm font-normal text-grayText">{currentUser?.email}</h1>
                            <h1 className="text-sm font-normal text-grayText">{currentUser?.role}</h1>
                        </div>
                    </div>
                </div>

                <div className="w-full p-4 space-y-1 bg-white rounded-xl shadow-lg mt-7">
                    <div className="bg-white p-4 rounded-xl space-y-5">
                        <div className="flex justify-between items-center">
                            <h1 className="text-textDark text-lg font-medium">Profile Details</h1>
                            <button className="flex items-center gap-1 px-2 py-2 text-xm font-normal text-white bg-btnColor rounded-xl cursor-pointer">
                                <span>
                                    <MdOutlineUpdate className="text-[18px]" />
                                </span>
                                Update
                            </button>
                        </div>
                        <div className="space-y-2">
                            <h1 className="text-xm font-normal text-grayText">Phone Number</h1>
                            <input
                                type="number"
                                className="w-full p-2 text-xm outline-none rounded-lg border border-borderColour bg-borderColour/20 placeholder:text-grayText"
                                required
                                placeholder="Phone Number"
                                // // defaultValue={userPhoneNumber}
                                // {...register("userPhoneNumber")}
                                title="Phone Number"
                            />
                        </div>
                        <div className="space-y-2">
                            <h1 className="text-xm font-normal text-grayText">Gender</h1>
                            <input
                                type="text"
                                className="w-full p-2 text-xm outline-none rounded-lg border border-borderColour bg-borderColour/20 placeholder:text-grayText"
                                required
                                placeholder="Gender"
                                // // defaultValue={userGender}
                                // {...register("userGender")}
                                title="Gender"
                            />
                        </div>
                        <div className="space-y-2">
                            <h1 className="text-xm font-normal text-grayText">Age</h1>
                            <input
                                type="text"
                                className="w-full p-2 text-xm outline-none rounded-lg border border-borderColour bg-borderColour/20 placeholder:text-grayText"
                                required
                                placeholder="Age"
                                // // defaultValue={userAge}
                                // {...register("userAge")}
                                title="Age"
                            />
                        </div>
                        <div className="space-y-2">
                            <h1 className="text-xm font-normal text-grayText">Address</h1>
                            <textarea
                                placeholder="Address"
                                // // defaultValue={userAddress}
                                // {...register("userAddress")}
                                className="w-full h-24 p-2 text-xm font-normal outline-none rounded-lg border border-borderColour bg-borderColour/20 placeholder:text-grayText"
                                required
                            ></textarea>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <CiCalendarDate className="text-lg text-textDark"/>
                                <h1 className="text-lg font-medium text-textDark">Join</h1>
                            </div>
                            <div>
                                <h1 className="text-lg font-medium text-grayText">6 October 2020</h1>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AdminRightSide
