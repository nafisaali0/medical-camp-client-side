import { LuUpload } from "react-icons/lu"
import { MdOutlineUpdate } from "react-icons/md"
import { SiBasecamp } from "react-icons/si"

const EditCamp = () => {
    return (
        <>
            <form>

                <div className="bg-white p-4 rounded-xl border border-borderColour">
                    <div className="flex justify-between">

                        <div className="flex items-center gap-2">
                            <SiBasecamp className="text-[22px]" />
                            <h1 className="text-textDark text-lg font-medium">Update Camp</h1>
                        </div>

                        <div>
                            <button className="flex items-center gap-2 px-3 py-2 text-xm lg:text-lg font-normal text-white bg-btnColor rounded-xl cursor-pointer">
                                <span>
                                    <MdOutlineUpdate className="text-[16px] lg:text-[20px]" />
                                </span>
                                Update
                            </button>
                        </div>

                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-4 mt-5">

                    {/* left side */}
                    <div className="w-auto lg:w-[700px] space-y-5">

                        {/* part one */}
                        <div className="bg-white p-4 rounded-xl border border-borderColour space-y-5">
                            <div>
                                <h1 className="text-textDark text-lg font-medium">Generel Information</h1>
                            </div>
                            <div className="space-y-2">
                                <h1 className="text-xm font-normal text-grayText">Camp Name</h1>
                                <input
                                    type="text"
                                    className="w-full p-2 text-xm outline-none rounded-lg border border-borderColour bg-borderColour/20 placeholder:text-grayText"
                                    required
                                    placeholder="Camp Name"
                                    title="Health Checkup"
                                />
                            </div>
                            <div className="space-y-2">
                                <h1 className="text-xm font-normal text-grayText">Services</h1>
                                <input
                                    type="text"
                                    className="w-full p-2 text-xm outline-none rounded-lg border border-borderColour bg-borderColour/20 placeholder:text-grayText"
                                    required
                                    placeholder="Check up on pressure/diabetes"
                                    title="Services"
                                />
                            </div>
                            <div className="space-y-2">
                                <h1 className="text-xm font-normal text-grayText">Healthcare Professionals</h1>
                                <input
                                    type="text"
                                    className="w-full p-2 text-xm outline-none rounded-lg border border-borderColour bg-borderColour/20 placeholder:text-grayText"
                                    required
                                    placeholder="Dr. Wasfia Rahman"
                                    title="Healthcare Professionals Name"
                                />
                            </div>
                            <div className="space-y-2">
                                <h1 className="text-xm font-normal text-grayText">Category</h1>
                                <input
                                    type="category"
                                    className="w-full p-2 text-xm outline-none rounded-lg border border-borderColour bg-borderColour/20 placeholder:text-grayText"
                                    required
                                    placeholder="Heart/Cancer"
                                    title="Category"
                                />
                            </div>
                            <div className="space-y-2">
                                <h1 className="text-xm font-normal text-grayText">Description</h1>
                                <textarea
                                    placeholder="Event Details"
                                    className="w-full h-24 p-2 text-xm font-normal outline-none rounded-lg border border-borderColour bg-borderColour/20 placeholder:text-grayText"
                                    required
                                ></textarea>
                            </div>
                        </div>

                        {/* part two */}
                        <div className="w-full bg-white p-4 rounded-xl border border-borderColour space-y-5">

                            <div>
                                <h1 className="text-textDark text-lg font-medium">Event Details</h1>
                            </div>

                            <div className="flex items-center gap-2">

                                <div className="space-y-2 w-full">
                                    <h1 className="text-xm font-normal text-grayText">Date</h1>
                                    <input
                                        type="date"
                                        className="w-full p-2 text-xm outline-none rounded-lg border border-borderColour bg-borderColour/20 placeholder:text-grayText"
                                        required
                                        placeholder="Date"
                                        title="Date"
                                    />
                                </div>
                                <div className="space-y-2 w-full">
                                    <h1 className="text-xm font-normal text-grayText">Time</h1>
                                    <input
                                        type="time"
                                        className="w-full p-2 text-xm outline-none rounded-lg border border-borderColour bg-borderColour/20 placeholder:text-grayText"
                                        required
                                        placeholder="Time"
                                        title="Time"
                                    />
                                </div>
                                <div className="space-y-2 w-full">
                                    <h1 className="text-xm font-normal text-grayText">Venue</h1>
                                    <input
                                        type="location"
                                        className="w-full p-2 text-xm outline-none rounded-lg border border-borderColour bg-borderColour/20 placeholder:text-grayText placeholder:text-xs"
                                        required
                                        placeholder="ParkHoliday,Gulshan,Dhaka"
                                        title="Venue"
                                    />
                                </div>

                            </div>
                        </div>

                    </div>

                    {/* right side */}
                    <div className="w-auto flex-1 space-y-5">

                        {/* part one */}
                        <div className="p-4 w-full bg-white rounded-xl">
                            <div>
                                <h1 className="text-textDark text-lg font-medium">Camp Media</h1>
                            </div>
                            <div className="mt-5">
                                <h1 className="text-xm font-normal text-grayText mb-2">Image</h1>
                                <div className="w-full h-60 border-2 border-dashed border-borderColour">

                                </div>
                                <div className="mt-5">
                                    <button className="flex items-center gap-2 px-3 py-2 text-xm font-normal text-white bg-btnColor rounded-xl cursor-pointer">
                                        <span>
                                            <LuUpload className="text-[16px]" />
                                        </span>
                                        Change Image
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* part two */}
                        <div className="w-full bg-white p-4 rounded-xl border border-borderColour space-y-5">

                            <div>
                                <h1 className="text-textDark text-lg font-medium">Target Group</h1>
                            </div>

                            <div className="flex items-center gap-2">

                                <div className="space-y-2 w-full">
                                    <h1 className="text-xm font-normal text-grayText">Age</h1>
                                    <input
                                        type="age"
                                        className="w-full p-2 text-xm outline-none rounded-lg border border-borderColour bg-borderColour/20 placeholder:text-grayText placeholder:text-xs"
                                        required
                                        placeholder="25-40/Adult/Child/Older"
                                        title="Age"
                                    />
                                </div>
                                <div className="space-y-2 w-full">
                                    <h1 className="text-xm font-normal text-grayText">Gender</h1>
                                    <input
                                        type="gender"
                                        className="w-full p-2 text-xm outline-none rounded-lg border border-borderColour bg-borderColour/20 placeholder:text-grayText"
                                        placeholder="Male/Female"
                                        title="Gender"
                                    />
                                </div>

                            </div>
                        </div>

                        {/* part three */}
                        <div className="w-full bg-white p-4 rounded-xl border border-borderColour space-y-5">

                            <div>
                                <h1 className="text-textDark text-lg font-medium">Event Price</h1>
                            </div>

                            <div>
                                <div className="space-y-2">
                                    <h1 className="text-xm font-normal text-grayText">Enrollment Fee</h1>
                                    <input
                                        type="fee"
                                        className="w-full p-2 text-xm outline-none rounded-lg border border-borderColour bg-borderColour/20 placeholder:text-grayText"
                                        required
                                        placeholder="200 BDT"
                                        title="Enrollment Fee"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </form>
        </>
    )
}

export default EditCamp
