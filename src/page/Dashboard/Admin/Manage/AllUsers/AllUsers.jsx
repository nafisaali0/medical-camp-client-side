import { PiUsersThreeLight } from "react-icons/pi"


const AllUsers = () => {
    return (
        <>
            <div className="space-y-5">
                <div className="bg-white p-4 rounded-xl border border-borderColour">
                    <div className="flex items-center gap-2">
                        <PiUsersThreeLight className="text-[22px]" />
                        <h1 className="text-textDark text-lg font-medium">Manage Users</h1>
                    </div>
                </div>

                <div className="bg-white px-4 py-10 rounded-xl border border-borderColour">
            
                    <div className="overflow-x-auto w-96 md:w-full">
                        <table className="rounded-xl shadow w-96 md:w-full">
                                <tr className="bg-btnColor border-borderColour text-lg font-medium text-white">
                                    <th className="px-4 py-3 text-center rounded-tl-xl">No</th>
                                    <th className="px-4 py-3 text-center">Name</th>
                                    <th className="px-4 py-3 text-center">Email</th>
                                    <th className="px-4 py-3 text-center">Role</th>
                                    <th className="px-4 py-3 text-center rounded-tr-xl">Action</th>
                                </tr>
                            <tbody>
                                <tr className="text-center text-sm font-medium text-textDark border-b border-b-borderColour hover:bg-base-200 cursor-pointer">
                                    <td className="px-4 py-3">1</td>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center gap-3 justify-center">
                                            <div className="avatar">
                                                <div className="w-10 rounded-full">
                                                    <img
                                                        src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
                                                        alt="User Avatar"
                                                    />
                                                </div>
                                            </div>
                                            <span className="">Anom</span>
                                        </div>
                                    </td>

                                    <td className="px-4 py-3">anom@example.com</td>
                                    <td className="px-4 py-3">Admin</td>
                                    <td className="px-4 py-3">
                                        <button className="px-3 py-1">
                                            Save
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AllUsers

