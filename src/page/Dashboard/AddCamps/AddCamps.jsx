import DashboardTitle from "../../../components/DashboardTitle";

const AddCamps = () => {
    return (
        <>
            <div>
                <DashboardTitle
                    heading={"Add New Camp"}>
                </DashboardTitle>
            </div>
            <div className="flex flex-col w-full mt-28">
                <div className="divider"></div>
            </div>
            <div className="container mx-auto mt-10">
                <div className="my-10">
                    <h1 className="text-3xl font-bold">Base Information</h1>
                </div>
                <div>
                    <form>
                        <div className="flex justify-end items-end my-5">
                            <button className="text-blue-950 font-semibold border-4 border-blue-950 px-3 py-3 rounded-full">Publish Now</button>
                        </div>
                        <div className="flex flex-col lg:flex-row items-center gap-10">
                            <div className="flex flex-col gap-5 flex-1">
                                <input type="text" placeholder="Camp Name" className="input input-bordered w-full" />
                                <input type="text" placeholder="service" className="input input-bordered w-full" />
                                <div className="flex items-center gap-5">
                                    <div className="flex-1 w-1/2">
                                        <form>
                                            <div></div>
                                            {/* <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your country</label> */}
                                            <select placeholder="select target audience" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                                <option>Adults</option>
                                                <option>Children</option>
                                                <option>Toddller</option>
                                                <option>Older</option>
                                            </select>
                                        </form>
                                    </div>
                                    <div className="flex-1 w-1/2">
                                        <input type="text" placeholder="Vanu" className="input input-bordered w-full" />
                                    </div>
                                </div>
                                <textarea placeholder="Healthcare Professionals" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                                <input type="number" placeholder="Fees" className="input input-bordered w-full" />
                            </div>
                            {/* 2nd flex */}
                            <div className="flex flex-col gap-5 flex-1">
                                <input type="file" className="input input-bordered w-full" />
                                <div className="flex items-center gap-5">
                                    <div className="flex-1 w-1/2">
                                        <input type="date" placeholder="Date" className="input input-bordered w-full max-w-2xl" />
                                    </div>
                                    <div className="flex-1 w-1/2">
                                        <input type="text" placeholder="Time" className="input input-bordered w-full" />
                                    </div>
                                </div>
                                <input type="number" placeholder="Enroll Amount" className="input input-bordered w-full" />
                                <input type="text" placeholder="Short Description" className="input input-bordered w-full" />
                                <textarea placeholder="Details" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
};

export default AddCamps;