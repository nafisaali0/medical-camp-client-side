import { PiUsersThreeLight } from "react-icons/pi"
import useAllUsers from "../../../../../hooks/useAllUsers";
import { VscSaveAs } from "react-icons/vsc";
import { LuView } from "react-icons/lu";
import { AiOutlineUserDelete } from "react-icons/ai";


const AllUsers = () => {

    const [allUsers] = useAllUsers();

    return (
        <>
            <div className="space-y-5 overflow-hidden">

                <div className="bg-white p-4 rounded-xl border border-borderColour">
                    <div className="flex items-center gap-2">
                        <PiUsersThreeLight className="text-[22px]" />
                        <h1 className="text-textDark text-lg font-medium">Manage Users</h1>
                    </div>
                </div>

                <div className="bg-white px-4 py-10 rounded-xl border border-borderColour">
                    <div className="overflow-x-auto w-[290px] md:w-full shadow-sm">

                        <table className="rounded-xl shadow w-[280px] md:w-full">

                            <tr className="bg-btnColor border-borderColour text-lg font-medium text-white">

                                <th className="px-4 py-3 text-center rounded-tl-xl">No</th>
                                <th className="px-4 py-3 text-center">Name</th>
                                <th className="px-4 py-3 text-center">Email</th>
                                <th className="px-4 py-3 text-center">Role</th>
                                <th className="px-4 py-3 text-center rounded-tr-xl">Action</th>

                            </tr>

                            <tbody>

                                {
                                    allUsers?.map((userInfo, index) =>
                                        <>
                                            <tr className="text-center text-sm font-medium text-textDark border-b border-b-borderColour hover:bg-base-200 cursor-pointer">

                                                <td className="px-4 py-3">{index + 1}</td>
                                                <td className="px-4 py-3">
                                                    <div className="flex items-center gap-3 justify-center">
                                                        <div className="avatar">
                                                            <div className="w-10 rounded-full">
                                                                <img
                                                                    src={userInfo.photo}
                                                                    alt="User Avatar"
                                                                />
                                                            </div>
                                                        </div>
                                                        <span className="">{userInfo.name}</span>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <div className="w-[100px] lg:w-full truncate whitespace-nowrap overflow-hidden" title={userInfo.email}>
                                                        <span>{userInfo.email}</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <select defaultValue={userInfo.role} className="select  select-sm focus:border-0 focus:outline-none">
                                                            <option disabled={true}>{userInfo.role}</option>
                                                            <option>Participent</option>
                                                            <option>Admin</option>
                                                        </select>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <div className="flex items-center gap-2 justify-center text-lg">
                                                        <div>
                                                            <LuView className="cursor-pointer" />
                                                        </div>
                                                        <div>
                                                            <VscSaveAs className="cursor-pointer" />
                                                        </div>
                                                        <div>
                                                            <AiOutlineUserDelete className="cursor-pointer" />
                                                        </div>
                                                    </div>
                                                </td>

                                            </tr>
                                        </>

                                    )}

                            </tbody>
                        </table>

                    </div>
                </div>
                
            </div>
        </>
    )
}

export default AllUsers

