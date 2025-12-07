import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxioslocalhost from "../../hooks/useAxioslocalhost";
import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { FaLocationCrosshairs, FaPhone, FaUser } from "react-icons/fa6";
import { PiGenderIntersexBold } from "react-icons/pi";
import { GiAges } from "react-icons/gi";
import useUsers from "../../hooks/useUsers";
import Payment from "../Dashboard/Payment/Payment";


const CampEnrollment = () => {

    const { _id, campImage, campFee, campName, campDate, campVenue, campTime, campCategory, campAge } = useLoaderData();
    const { register, handleSubmit, reset } = useForm();
    const axiosLocalhost = useAxioslocalhost();
    const location = useLocation();
    const navigate = useNavigate();
    const [users] = useUsers();
    const currentUser = users?.length > 0 ? users[0] : {};

    // const onSubmit = async (data) => {

    //     if (currentUser) {

    //         const enrollmentItem = {
    //             // camp info
    //             campId: _id,
    //             campName: campName,
    //             campFee: campFee,
    //             campCategory: campCategory,
    //             campDate: campDate,
    //             campVenue: campVenue,
    //             campAge: campAge,
    //             campTime: campTime,
    //             campImage: campImage,

    //             // user info
    //             email: currentUser.email,
    //             userName: data.userName,
    //             userImage: data.userImage,
    //             userAge: data.userAge,
    //             userGender: data.userGender,
    //             userAddress: data.userAddress,

    //         }
    //         // console.log(enrollmentItem)
    //         const enrollCamp = await axiosLocalhost.post('/enrollCamp', enrollmentItem);
    //         if (enrollCamp.data.insertedId) {

    //             Swal.fire({
    //                 position: "top-end",
    //                 icon: "success",
    //                 title: "create camp successfully",
    //                 showConfirmButton: false,
    //                 timer: 1500
    //             });

    //             reset();
    //         }
    //     } else {
    //         Swal.fire({
    //             title: "You are not login",
    //             text: "Please login to enroll camp",
    //             icon: "warning",
    //             showCancelButton: true,
    //             confirmButtonColor: "#3085d6",
    //             cancelButtonColor: "#d33",
    //             confirmButtonText: "Go to login page"
    //         }).then((result) => {
    //             if (result.isConfirmed) {
    //                 navigate('/login', { state: { from: location } })
    //             }
    //         });
    //     }

    // }

    return (
        <>
            <div className="py-20 px-5 my-10 lg:my-16">
                <div className="max-w-[1300px] mx-auto p-5 overflow-hidden">
                    <div className="flex flex-col lg:flex-row gap-5 lg:justify-between">
                        <div>
                            <div className="w-auto lg:w-[900px] p-5 border border-borderColour rounded-xl shadow-lg hover:shadow-xl">

                                <div>
                                    <h1 className="mb-10 text-2xl md:text-3xl font-bold text-gradient">
                                        Take Your Step Toward Better Health
                                    </h1>
                                </div>

                                <div
                                    role="form"
                                    // onSubmit={handleSubmit(onSubmit)}
                                    className="space-y-4">

                                    <div className="flex flex-col lg:flex-row gap-2 mb-5">
                                        <div className="flex-1 w-full space-y-4">

                                            <div className="relative flex items-center  w-full">
                                                <FaUser className="absolute left-3 text-grayText text-lg" />
                                                <input
                                                    type="name" name="name" placeholder="Name"
                                                    defaultValue={currentUser?.userName}
                                                    {...register("userName")}
                                                    className="text-sm ease-soft block w-full rounded-lg border border-solid border-borderColour py-2 pl-10 pr-3 font-medium text-textSmallGray transition-all focus:border-borderColour focus:bg-mainTheme focus:text-grayText focus:outline-none"
                                                />
                                            </div>
                                            <div className="relative flex items-center">
                                                <PiGenderIntersexBold className="absolute left-3 text-grayText text-lg" />
                                                <input
                                                    type="gender" name="gender" placeholder="Gender"
                                                    defaultValue={currentUser?.userGender}
                                                    {...register("userGender")}
                                                    className="text-sm ease-soft block w-full rounded-lg border border-solid border-borderColour py-2 pl-10 pr-3 font-medium text-textSmallGray transition-all focus:border-borderColour focus:bg-mainTheme focus:text-grayText focus:outline-none"
                                                />
                                            </div>
                                        </div>

                                        <div className="flex-1 w-full space-y-4">

                                            <div className="relative flex items-center">
                                                <GiAges className="absolute left-3 text-grayText text-lg" />
                                                <input
                                                    type="age" name="age" placeholder="Age"
                                                    defaultValue={currentUser?.userAge}
                                                    {...register("userAge")}
                                                    className="text-sm ease-soft block w-full rounded-lg border border-solid border-borderColour py-2 pl-10 pr-3 font-medium text-textSmallGray transition-all focus:border-borderColour focus:bg-mainTheme focus:text-grayText focus:outline-none"
                                                />
                                            </div>
                                            <div className="relative flex items-center">
                                                <FaPhone className="absolute left-3 text-grayText text-lg" />
                                                <input
                                                    type="number" name="number" placeholder="Phone Number"
                                                    defaultValue={currentUser?.userPhone}
                                                    {...register("userPhone")}
                                                    className="text-sm ease-soft block w-full rounded-lg border border-solid border-borderColour py-2 pl-10 pr-3 font-medium text-textSmallGray transition-all focus:border-borderColour focus:bg-mainTheme focus:text-grayText focus:outline-none"
                                                />
                                            </div>

                                        </div>
                                    </div>

                                    <div className="relative w-full">
                                        <FaLocationCrosshairs className="absolute left-3 top-3 text-grayText text-lg" />
                                        <textarea
                                            placeholder="Address"
                                            defaultValue={currentUser?.userAddress}
                                            {...register("userAddress")}
                                            className="textarea w-full py-2 pl-10 pr-3 font-medium border-borderColour"
                                        ></textarea>
                                    </div>
                                    <div>
                                        <h1 className="text-xl font-medium text-textDark">Payment</h1>

                                        <Payment
                                            enrollCampId={_id}
                                            enrollCampName={campName}
                                            enrollCampCategory={campCategory}
                                            enrollCampFee={campFee}>
                                        </Payment>
                                    </div>

                                    {/* <div className="flex justify-center items-center py-5">
                                        <button className="primaryBtn">
                                            Enrollment Complete
                                            <div className="arrow-wrapper">
                                                <div className="arrow"></div>
                                            </div>
                                        </button>
                                    </div> */}

                                </div>
                            </div>
                        </div>
                        {/* right side */}
                        <div className="flex-1 w-auto">
                            <div
                                key={_id}
                                className="card bg-primarylight/60 shadow-lg hover:shadow-xl">

                                <figure>
                                    <img
                                        src={campImage}
                                        className="w-full h-52 object-cover rounded-t-xl"
                                        alt="camp" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title text-sm">{campName}</h2>
                                    <h2>
                                        <span className="font-semibold">Price: </span>
                                        ৳ {campFee}
                                    </h2>
                                    <div className="card-actions justify-center mt-5">
                                        <Link to={`/camp-details/${_id}`}>
                                            <button className="primaryBtn">
                                                View Details
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
                </div>
            </div>
        </>
    )
}

export default CampEnrollment
