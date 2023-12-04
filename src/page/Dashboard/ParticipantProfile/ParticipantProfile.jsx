import { useForm } from "react-hook-form";
import DashboardTitle from "../../../components/DashboardTitle";
import useUsers from "../../../hooks/useUsers";
import useAxioslocalhost from "../../../hooks/useAxioslocalhost";
import Swal from "sweetalert2";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const ParticipantProfile = () => {
    const [users, refetch, loading] = useUsers();
    const { register, handleSubmit, reset } = useForm();
    const axiosLocalhost = useAxioslocalhost()
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [displayText, setDisplayText] = useState('');

    const handleClick = () => {
        // Disable the button
        setButtonDisabled(true);
        //display text in below each disabled input 
        setDisplayText('cannot change this value');
    };

    const onSubmit = async (id, data) => {

        // console.log(id)
        const userInfo = {
            role: data.role,
            phone: data.phone,
            age: data.age,
            gender: data.gender,
            interestMedical: data.interestMedical,
            address: data.address,
        }
        console.log(userInfo)
        const campRes = await axiosLocalhost.patch(`/users/${id}`, userInfo);
        console.log(campRes.data)
        if (campRes.data.modifiedCount > 0) {
            // show success popup
            reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name}'s profile updated.`,
                showConfirmButton: false,
                timer: 1500
            });
            loading();
            refetch();
        }
    }
    return (
        <>
            <Helmet>
                <title>Amelia | Participant Profile</title>
            </Helmet>
            <div>
                <DashboardTitle heading={"My Profile"}></DashboardTitle>
            </div>
            <div className="container mx-auto my-20">
                {
                    users.map((user) =>
                        <>
                            <div key={user?._id}>
                                <div className="flex items-center gap-16 my-10">
                                    <div className="avatar">
                                        <div className="w-36 rounded-full">
                                            <img src={user?.photo} />
                                        </div>
                                    </div>
                                    <div className="text-3xl font-bold">
                                        <h1 className="text-3xl font-bold">{user?.name}</h1>
                                        <h1 className="text-2xl font-semibold my-5">{user?.role}</h1>
                                    </div>
                                </div>
                                <div className="text-xl font-bold flex flex-wrap gap-10 my-10">
                                    <div>
                                        <h1>Phone Number : <span className="text-xl font-semibold">{user?.phone}</span></h1>
                                    </div>
                                    <div>
                                        <h1>Email: <span className="text-xl font-semibold">{user?.email}</span></h1>
                                    </div>
                                    <div>
                                        <h1>Address: <span className="text-xl font-semibold">{user?.address}</span></h1>
                                    </div>
                                </div>
                                <div className="text-xl font-bold flex flex-wrap gap-10 my-10">
                                    <div>
                                        <h1>Age: <span className="text-xl font-semibold">{user?.age}</span></h1>
                                    </div>
                                    <div>
                                        <h1>Gender: <span className="text-xl font-semibold">{user?.gender}</span></h1>
                                    </div>
                                    <div>
                                        <h1>Interests Medical Areas: <span className="text-xl font-semibold">{user?.interestMedical}</span></h1>
                                    </div>
                                </div>
                                <div className="my-10">
                                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                    <button className="btn text-white bg-gradient-to-r from-blue-500 to-indigo-800" onClick={() => document.getElementById('my_modal_4').showModal()}>Update</button>
                                    <dialog id="my_modal_4" className="modal">
                                        <div className="modal-box w-11/12 max-w-5xl">
                                            {/* write here */}
                                            {/*  onSubmit={handleSubmit(onSubmit)} */}
                                            <form onSubmit={(e) => handleSubmit((data) => onSubmit(user._id, data))(e)} className="max-w-sm mx-auto">
                                                <div className="mb-5">
                                                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
                                                    <input type="name" {...register("name")} defaultValue={user.name} onClick={handleClick} disabled={buttonDisabled} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Your Name"></input>
                                                    <p className="text-red">{displayText}</p>
                                                </div>
                                                <div className="mb-5">
                                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo</label>
                                                    <input type="url" {...register("photo")} placeholder="photo" defaultValue={user?.photo} onClick={handleClick} disabled={buttonDisabled} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"></input>
                                                    <p>{displayText}</p>
                                                </div>
                                                <div className="mb-5">
                                                    <select {...register("role")} defaultValue={user?.role} className="select select-bordered w-full my-5">
                                                        <option disabled selected>Select Your Role</option>
                                                        <option>Admin</option>
                                                        <option>Healthcare Professionals</option>
                                                        <option>Participant</option>
                                                    </select>
                                                </div>
                                                <div className="mb-5">
                                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                                                    <input type="number" {...register("phone")} defaultValue={user?.phone} placeholder="phone" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"></input>
                                                </div>
                                                <div className="mb-5">
                                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                                    <input type="text" {...register("email")} defaultValue={user?.email} placeholder="email" onClick={handleClick} disabled={buttonDisabled} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"></input>
                                                    <p>{displayText}</p>
                                                </div>
                                                <div className="mb-5">
                                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
                                                    <input type="number" {...register("age")} defaultValue={user?.age} placeholder="age" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"></input>
                                                </div>
                                                <div className="mb-5">
                                                    <select {...register("gender")} defaultValue={user?.gender} className="select select-bordered w-full my-5">
                                                        <option disabled selected>Select Your Gender</option>
                                                        <option>Male</option>
                                                        <option>Female</option>
                                                    </select>
                                                </div>
                                                <div className="mb-5">
                                                    <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Interest Medical Area</label>
                                                    <textarea type="text" {...register("interestMedical")} defaultValue={user?.interestMedical} placeholder="Interest Medical Areas" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"></textarea>
                                                </div>
                                                <div className="mb-5">
                                                    <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                                                    <textarea type="text" {...register("address")} defaultValue={user?.address} placeholder="Write Your Addrees" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"></textarea>
                                                </div>
                                                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Confirm Update</button>
                                            </form>
                                            <div className="modal-action">
                                                <form method="dialog">
                                                    {/* if there is a button, it will close the modal */}
                                                    <button className="btn">Close</button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>
                                </div>
                                <div>
                                    <p>After update profile do refresh</p>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
        </>
    );
};

export default ParticipantProfile;