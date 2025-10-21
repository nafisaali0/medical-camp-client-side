// import { useForm } from "react-hook-form";
// import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";
// import useAuth from "../../../hooks/useAuth";
// import useAxioslocalhost from "../../../hooks/useAxioslocalhost";
// import Swal from "sweetalert2";
// import useCamp from './../../../hooks/useCamp';
// import useUsers from './../../../hooks/useUsers';
// import errorIcon from '../../../assets/images/icon/error.svg'
// import React from 'react';
import { Link, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { IoLocationOutline } from 'react-icons/io5';
import { IoMdTime } from "react-icons/io";
import { GoPeople } from "react-icons/go";
import { TbCoinTaka } from "react-icons/tb";
import { CiCalendarDate } from "react-icons/ci";

const DetailCamp = () => {

    // const { register, handleSubmit } = useForm();
    // const { user } = useAuth();
    // const [users] = useUsers();
    // const axiosLocalhost = useAxioslocalhost();
    // const [loading, refetch] = useCamp();
    // const location = useLocation();
    // const navigate = useNavigate();
    const { image, campFees, healthcareProfessionals, campName, targetAudience, date, time, venue, services, shortDescription } = useLoaderData();

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
    //                         timer: 2500
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
            <Helmet>
                <title>Amelia | Camp Details</title>
            </Helmet>
            
            <div className="py-24 p-5">

                {/* old version */}
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

                {/* new version */}
                <div className="max-w-[1300px] mx-auto my-10 p-5 overflow-hidden space-y-25 rounded-xl shadow-lg">

                    <div className="flex flex-col lg:flex-row items-start justify-around gap-5">

                        <div className="relative lg:flex-1 w-full lg:w-1/2 rounded-xl border-2 border-borderColour">
                            <figure>
                                <img src={image}
                                    alt="campsImage"
                                    className="w-full object-cover rounded-xl" />
                            </figure>
                            <div className="absolute inset-0 bg-black/40 rounded-xl"></div>
                        </div>

                        <div className="lg:flex-1 w-full lg:w-1/2">

                            <button className="flex items-center gap-1 px-4 py-1 mt-3 border border-borderColour rounded-full text-sm font-medium capitalize">
                                <span>
                                    <IoLocationOutline className="text-[25px] text-btnColor" />
                                </span>
                                {venue}
                            </button>

                            <div className="mt-3">
                                <h1 className="text-2xl lg:text-3xl text-textDark font-bold">{campName}</h1>
                            </div>

                            <div className="space-y-3 mt-10">

                                <p className="text-md text-textDark font-medium">
                                    {shortDescription}
                                </p>

                                <div>

                                    <p className="text-md text-textDark font-medium">
                                        <span className="font-bold">
                                            HealthcareProfessionals: </span>
                                        {healthcareProfessionals}
                                    </p>

                                    <p className="text-md text-textDark font-medium">
                                        <span className="font-bold">Services: </span>
                                        {services}
                                    </p>

                                </div>
                            </div>
                            {/* large screen */}
                            <div className="hidden lg:flex items-center gap-3 mt-5 p-5 rounded-lg border border-borderColour">

                                <p className="flex items-center gap-1 text-sm font-medium capitalize">
                                    <span>
                                        <GoPeople className="text-[25px] text-btnColor" />
                                    </span>
                                    {targetAudience}
                                </p>

                                <p className="flex items-center gap-1 text-sm font-medium">
                                    <span>
                                        <CiCalendarDate className="text-[25px] text-btnColor" />
                                    </span>
                                    {date}
                                </p>

                                <p className="flex items-center gap-1 text-sm font-medium">
                                    <span>
                                        <IoMdTime className="text-[25px] text-btnColor" />
                                    </span>
                                    {time}
                                </p>

                                <p className="flex items-center gap-1 text-sm font-medium">
                                    <span>
                                        <TbCoinTaka className="text-[25px] text-btnColor" />
                                    </span>
                                    {campFees}
                                </p>

                            </div>

                            {/* mobile screen */}
                            <div className="block lg:hidden mt-5 p-5 rounded-lg border border-borderColour">
                                <div className="flex justify-around items-center">
                                    <p className="flex items-center gap-2 text-sm font-medium capitalize">
                                        <span>
                                            <GoPeople className="text-[25px] text-btnColor" />
                                        </span>
                                        {targetAudience}
                                    </p>

                                    <p className="flex items-center gap-2 text-sm font-medium">
                                        <span>
                                            <CiCalendarDate className="text-[25px] text-btnColor" />
                                        </span>
                                        {date}
                                    </p>
                                </div>

                                <div className="my-5 bg-borderColour border-t-2 border-t-borderColour"></div>

                                <div className="flex justify-around items-center">
                                    <p className="flex items-center gap-2 text-sm font-medium">
                                        <span>
                                            <IoMdTime className="text-[25px] text-btnColor" />
                                        </span>
                                        {time}
                                    </p>

                                    <p className="flex items-center gap-2 text-sm font-medium">
                                        <span>
                                            <TbCoinTaka className="text-[25px] text-btnColor" />
                                        </span>
                                        {campFees}
                                    </p>
                                </div>

                            </div>

                            <div className="my-5">
                                {/*  to={`/camp-details/${enrolledCamp?.campId}`} */}
                                <Link>
                                    <button className="navBtn">
                                        Register Camp
                                        <div className="arrow-wrapper">
                                            <div className="arrow"></div>
                                        </div>
                                    </button>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailCamp;