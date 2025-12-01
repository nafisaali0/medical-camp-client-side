import useAllUsers from "../../../../../hooks/useAllUsers";
import { VscSaveAs } from "react-icons/vsc";
import { AiOutlineUserDelete } from "react-icons/ai";
import { MdFormatListBulletedAdd } from "react-icons/md";
import UserDetails from "./UserDetails";
import { FaUsersViewfinder } from "react-icons/fa6";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import useAxioslocalhost from "../../../../../hooks/useAxioslocalhost";

const AllUsers = () => {

    const [allUsers] = useAllUsers();
    const { register, handleSubmit, reset } = useForm()
    const axiosLocalhost = useAxioslocalhost()

    const onSubmit = async ({ userId, userRole, userName }) => {

        if (userId, userRole) {

            const userInfo = {
                userRole: userRole,
            }
            // console.log(userInfo)
            const updateRole = await axiosLocalhost.patch(`/users/${userId}`, userInfo);
            // console.log(updateRole.data)
            reset();
            if (updateRole.data.modifiedCount > 0) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${userName} role change to ${userRole}.`,
                    showConfirmButton: false,
                    timer: 2000
                });
            }
        }
    };

    const handleDelete = userId => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete this user?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete the user!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosLocalhost.delete(`/users/${userId}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'The user has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })

    }

    return (
        <>
            <div className="space-y-5 overflow-hidden">

                <div className="bg-white p-4 rounded-xl border border-borderColour">
                    <div className="flex justify-between">

                        <div className="flex items-center gap-2">
                            <FaUsersViewfinder className="text-[22px]" />
                            <h1 className="text-textDark text-lg font-medium">Manage Users</h1>
                        </div>

                        <div>
                            <button className="flex items-center gap-2 px-3 py-2 text-xm lg:text-xm font-normal text-white bg-btnColor rounded-xl cursor-pointer">
                                <span>
                                    <MdFormatListBulletedAdd className="text-[16px] lg:text-[20px]" />
                                </span>
                                Total : {allUsers?.length}
                            </button>
                        </div>

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
                                                                    src={userInfo?.userImage}
                                                                    alt="User"
                                                                />
                                                            </div>
                                                        </div>
                                                        <span className="">{userInfo?.userName}</span>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <div className="w-[100px] lg:w-full truncate whitespace-nowrap overflow-hidden" title={userInfo.email}>
                                                        <span>{userInfo?.email}</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <form onSubmit={handleSubmit((data) =>
                                                        onSubmit({
                                                            userId: userInfo._id,
                                                            userName: userInfo.userName,
                                                            userRole: data[`userRole${userInfo._id}`]
                                                        })
                                                    )}>
                                                        <div className="flex items-center gap-1">

                                                            <div>

                                                                <select
                                                                    name="userRole"
                                                                    {...register(`userRole${userInfo._id}`)}
                                                                    defaultValue={userInfo?.userRole}
                                                                    className="select select-sm focus:border-0 focus:outline-none">
                                                                    <option>Participant</option>
                                                                    <option>Admin</option>
                                                                </select>

                                                            </div>
                                                            <div>
                                                                <button>
                                                                    <VscSaveAs title="Update" className="cursor-pointer text-[16px]" />
                                                                </button>
                                                            </div>

                                                        </div>
                                                    </form>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <div className="flex items-center gap-2 justify-center text-lg">
                                                        <div>
                                                            <UserDetails
                                                                userId={userInfo._id}
                                                                userInfo={userInfo} />
                                                        </div>
                                                        <div>
                                                            <AiOutlineUserDelete
                                                                onClick={() => handleDelete(userInfo?._id)}
                                                                title="Remove User"
                                                                className="cursor-pointer" />
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

