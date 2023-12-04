import useCamp from "../../../hooks/useCamp";
import updateIcon from '../../../assets/images/icon/edit.svg'
import deleteIcon from '../../../assets/images/icon/delete.svg'
import Swal from "sweetalert2";
import useAxioslocalhost from "../../../hooks/useAxioslocalhost";
import { Link } from "react-router-dom";
import DashboardTitle from "../../../components/DashboardTitle";
import { Helmet } from "react-helmet-async";

const ManageCamps = () => {

    const [camp, refetch, loading] = useCamp();
    const axiosLocalhost = useAxioslocalhost()



    const handleDelete = id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete it this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosLocalhost.delete(`/camp/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your camp has been deleted.',
                                'success'
                            )
                            loading()
                            refetch();
                        }
                    })
            }
        })

    }
    return (
        <>
            <Helmet>
                <title>Amelia | Manage Camps</title>
            </Helmet>
            <div>
                <DashboardTitle
                    heading={"See All Camp Information"}>
                </DashboardTitle>
            </div>
            <div className="w-9/12 mx-auto bg-base-100 p-5 my-10">
                <div className="flex justify-between my-1">
                    <h2 className="text-3xl">Total Items: {camp.length}</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead className="bg-black text-white">
                            <tr>
                                <th>No</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Fees</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                camp.map((item, index) =>
                                    <tr key={index}>
                                        <th>
                                            {index + 1}
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {item.campName}
                                        </td>
                                        <td>{item.date}</td>
                                        <td>{item.campFees} $</td>
                                        <th>
                                            <Link to={`/dashboard/update-camp/${item._id}`}>
                                                <img
                                                    src={updateIcon}
                                                    className="w-6 h-6 cursor-pointer" alt="" />
                                            </Link>
                                        </th>
                                        <th>
                                            <img src={deleteIcon} onClick={() => handleDelete(item._id)} className="w-6 h-6 cursor-pointer" alt="" />
                                        </th>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ManageCamps;