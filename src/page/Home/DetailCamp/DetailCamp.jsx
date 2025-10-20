// import { useForm } from "react-hook-form";
// import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";
// import useAuth from "../../../hooks/useAuth";
// import useAxioslocalhost from "../../../hooks/useAxioslocalhost";
// import Swal from "sweetalert2";
// import useCamp from './../../../hooks/useCamp';
// import useUsers from './../../../hooks/useUsers';
// import errorIcon from '../../../assets/images/icon/error.svg'
// import React from 'react';
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const DetailCamp = () => {

    // const { register, handleSubmit } = useForm();
    // const { user } = useAuth();
    // const [users] = useUsers();
    // const axiosLocalhost = useAxioslocalhost();
    // const [loading, refetch] = useCamp();
    // const location = useLocation();
    // const navigate = useNavigate();
    const { _id, image, campFees, campName, targetAudience, date, time, venue, services, shortDescription, longDescription } = useLoaderData();

    // const onSubmit = (data) => {
    //     // console.log(data, user?.email)

    //     if (user && user.email) {
    //         // send cart item to the database
    //         const campItem = {
    //             campId: _id,
    //             email: user.email,
    //             campName: campName,
    //             campFees: campFees,
    //             date: date,
    //             time: time,
    //             venue: venue,
    //             services: services,
    //             image: image,
    //             // register form
    //             name: data.name,
    //             age: data.age,
    //             gender: data.gender,
    //             address: data.address,
    //         }
    //         console.log(campItem)
    //         axiosLocalhost.post('/registerCamps', campItem)
    //             .then(res => {
    //                 console.log(res.data)
    //                 if (res.data.insertedId) {
    //                     Swal.fire({
    //                         position: "top-end",
    //                         icon: "success",
    //                         title: `Your ${campName} has been added to the register camp`,
    //                         showConfirmButton: false,
    //                         timer: 1600
    //                     });
    //                     // refetch the cart to update the cart items count
    //                     loading()
    //                     refetch()
    //                 }
    //             })
    //     } else {
    //         Swal.fire({
    //             title: "You are not login",
    //             text: "Please login to add to the cart",
    //             icon: "warning",
    //             showCancelButton: true,
    //             confirmButtonColor: "#3085d6",
    //             cancelButtonColor: "#d33",
    //             confirmButtonText: "Go to login page"
    //         }).then((result) => {
    //             if (result.isConfirmed) {
    //                 //send the user to the login page 
    //                 navigate('/login', { state: { from: location } })
    //             }
    //         });
    //     }

    // }

    return (
        <>
            <div>
                <Helmet>
                    <title>Amelia | Camp Details Page</title>
                </Helmet>
                {/* <div className="max-w-5xl mx-auto overflow-hidden my-10 p-3">
                    <div>
                        <div className="text-4xl font-bold">
                            <h1>{campName}</h1>
                        </div>

                        <div className="flex justify-between items-center border-b-2 border-[#e7e7e9] drop-shadow-sm">
                            <div className="flex gap-3 flex-wrap items-center my-5">
                                <span className='px-3 py-2 bg-[#5b608b] text-xs text-white font-semibold rounded-lg'>{date}</span>
                                <span className='px-3 py-2 bg-[#5b608b] text-xs text-white font-semibold rounded-lg'>Venue: {venue}</span>
                                <span className='px-3 py-2 bg-[#5b608b] text-xs text-white font-semibold rounded-lg'>Target Audience: {targetAudience}</span>
                            </div>
                            <div className="flex gap-5 my-5">
                                {
                                    users.map((eachUser) => (
                                        <React.Fragment key={eachUser.id}>
                                            {
                                                eachUser?.role === "Participant" ? (
                                                    <>
                                                        <button className="btn text-white bg-gradient-to-r from-blue-500 to-indigo-800" onClick={() => document.getElementById('my_modal_4').showModal()}>Join Camp</button>
                                                        <dialog id="my_modal_4" className="modal">
                                                            <div className="modal-box w-11/12 max-w-5xl">
                                                                <div className="text-left text-3xl font-bold my-5">
                                                                    <h1>Your Information</h1>
                                                                </div>
                                                                <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto">
                                                                    <div className="mb-5">
                                                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your Name</label>
                                                                        <input type="name" {...register("name")} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Your Name" required></input>
                                                                    </div>
                                                                    <div className="mb-5">
                                                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
                                                                        <input type="age" {...register("age")} placeholder="Age" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required></input>
                                                                    </div>
                                                                    <div className="mb-5">
                                                                        <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                                                                        <input type="text" {...register("gender")} placeholder="Gender" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required></input>
                                                                    </div>
                                                                    <div className="mb-5">
                                                                        <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                                                                        <textarea type="text" {...register("address")} placeholder="Write Your Addrees" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required></textarea>
                                                                    </div>
                                                                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Confirm Register</button>
                                                                </form>
                                                                <div className="my-5">
                                                                    <p className="text-lg font-bold">Camp Fees : <span className="text-lg font-semibold">{campFees} $</span></p>
                                                                    <p className="text-lg font-bold">If any query contact with this number : <span className="text-lg font-semibold">01345678909</span></p>
                                                                </div>
                                                                <div className="modal-action">
                                                                    <form method="dialog">
                                                                        <button className="btn">Close</button>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </dialog>
                                                    </>

                                                ) :
                                                    <>
                                                        <>
                                                            <button disabled className="btn text-white bg-gradient-to-r from-blue-500 to-indigo-800" onClick={() => document.getElementById('my_modal_4').showModal()}>Join Camp</button>
                                                            <dialog id="my_modal_4" className="modal">
                                                                <div className="modal-box w-11/12 max-w-5xl">
                                                                    <div className="text-left text-3xl font-bold my-5">
                                                                        <h1>Your Information</h1>
                                                                    </div>
                                                                    <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto">
                                                                        <div className="mb-5">
                                                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your Name</label>
                                                                            <input type="name" {...register("name")} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Your Name" required></input>
                                                                        </div>
                                                                        <div className="mb-5">
                                                                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
                                                                            <input type="age" {...register("age")} placeholder="Age" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required></input>
                                                                        </div>
                                                                        <div className="mb-5">
                                                                            <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                                                                            <input type="text" {...register("gender")} placeholder="Gender" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required></input>
                                                                        </div>
                                                                        <div className="mb-5">
                                                                            <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                                                                            <textarea type="text" {...register("address")} placeholder="Write Your Addrees" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required></textarea>
                                                                        </div>
                                                                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Confirm Register</button>
                                                                    </form>
                                                                    <div className="my-5">
                                                                        <p className="text-lg font-bold">Camp Fees : <span className="text-lg font-semibold">{campFees} $</span></p>
                                                                        <p className="text-lg font-bold">If any query contact with this number : <span className="text-lg font-semibold">01345678909</span></p>
                                                                    </div>
                                                                    <div className="modal-action">
                                                                        <form method="dialog">
                                                                            <button className="btn">Close</button>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </dialog>
                                                            <img onClick={() => document.getElementById('my_modal_3').showModal()} className="w-5 h-5 cursor-pointer" src={errorIcon} alt="" />
                                                            <dialog id="my_modal_3" className="modal">
                                                                <div className="modal-box">
                                                                    <form method="dialog">
                                                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                                    </form>
                                                                    <div className="text-xl font-semibold">
                                                                        <p>Admin and HeathCare Professional not allowed to register</p>
                                                                        <p>
                                                                            If you have not role then edit your profile Go to this link:
                                                                            <Link to={"/dashboard/default-Profile"}>Update Profile</Link>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </dialog>
                                                        </>
                                                    </>
                                            }
                                        </React.Fragment>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="my-5">
                            <img className="w-full h-full" src={image} alt="blog_image" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold">Introduction</h1>
                            <p className="text-lg my-5">{shortDescription}</p>
                            <h1 className="text-3xl font-bold">Details</h1>
                            <p className="text-lg my-5">{longDescription}</p>
                        </div>
                    </div>
                </div> */}

                <div className="py-24">
                    <div className="max-w-4xl mx-auto my-10 p-5 overflow-hidden space-y-20 bg-primarylight ">
                        details
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailCamp;