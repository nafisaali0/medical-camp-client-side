import { useForm } from "react-hook-form";
import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from './../../hooks/useAuth';
import useAxioslocalhost from './../../hooks/useAxioslocalhost';
import useCamp from "../../hooks/useCamp";
import { GiAges } from "react-icons/gi";
import { FaLocationCrosshairs, FaPhone, FaUser } from "react-icons/fa6";
import { PiGenderIntersexBold } from "react-icons/pi";

export default function CampRegistration() {

    const { _id, image, campFees, campName, date, time, venue, services } = useLoaderData();
    const { register, handleSubmit } = useForm();
    const { user } = useAuth();
    const axiosLocalhost = useAxioslocalhost();
    const [loading, refetch] = useCamp();
    const location = useLocation();
    const navigate = useNavigate();

    const onSubmit = (data) => {

        if (user && user.email) {
            // send cart item to the database
            const campItem = {
                campId: _id,
                email: user.email,
                campName: campName,
                campFees: campFees,
                date: date,
                time: time,
                venue: venue,
                services: services,
                image: image,
                // register form
                name: data.name,
                age: data.age,
                gender: data.gender,
                address: data.address,
            }
            console.log(campItem)
            axiosLocalhost.post('/registerCamps', campItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `Your ${campName} has been added to the register camp`,
                            showConfirmButton: false,
                            timer: 2500
                        });
                        // refetch the cart to update the cart items count
                        loading()
                        refetch()
                    }
                })
        } else {
            Swal.fire({
                title: "You are not login",
                text: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Go to login page"
            }).then((result) => {
                if (result.isConfirmed) {
                    //send the user to the login page 
                    navigate('/login', { state: { from: location } })
                }
            });
        }

    }

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

                                <form
                                    role="form"
                                    onSubmit={handleSubmit(onSubmit)}
                                    className="space-y-4">

                                    <div className="flex flex-col lg:flex-row gap-2 mb-5">
                                        <div className="flex-1 w-full space-y-4">

                                            <div className="relative flex items-center  w-full">
                                                <FaUser className="absolute left-3 text-grayText text-lg" />
                                                <input
                                                    type="name" name="name" placeholder="Name"
                                                    {...register("name")}
                                                    className="text-sm ease-soft block w-full rounded-lg border border-solid border-borderColour py-2 pl-10 pr-3 font-medium text-textSmallGray transition-all focus:border-borderColour focus:bg-mainTheme focus:text-grayText focus:outline-none"
                                                />
                                            </div>
                                            <div className="relative flex items-center">
                                                <PiGenderIntersexBold className="absolute left-3 text-grayText text-lg" />
                                                <input
                                                    type="gender" name="gender" placeholder="Gender"
                                                    {...register("gender")}
                                                    className="text-sm ease-soft block w-full rounded-lg border border-solid border-borderColour py-2 pl-10 pr-3 font-medium text-textSmallGray transition-all focus:border-borderColour focus:bg-mainTheme focus:text-grayText focus:outline-none"
                                                />
                                            </div>
                                        </div>

                                        <div className="flex-1 w-full space-y-4">

                                            <div className="relative flex items-center">
                                                <GiAges className="absolute left-3 text-grayText text-lg" />
                                                <input
                                                    type="age" name="age" placeholder="Age"
                                                    {...register("age")}
                                                    className="text-sm ease-soft block w-full rounded-lg border border-solid border-borderColour py-2 pl-10 pr-3 font-medium text-textSmallGray transition-all focus:border-borderColour focus:bg-mainTheme focus:text-grayText focus:outline-none"
                                                />
                                            </div>
                                            <div className="relative flex items-center">
                                                <FaPhone className="absolute left-3 text-grayText text-lg" />
                                                <input
                                                    type="number" name="number" placeholder="Phone Number"
                                                    {...register("phoneNumber")}
                                                    className="text-sm ease-soft block w-full rounded-lg border border-solid border-borderColour py-2 pl-10 pr-3 font-medium text-textSmallGray transition-all focus:border-borderColour focus:bg-mainTheme focus:text-grayText focus:outline-none"
                                                />
                                            </div>

                                        </div>
                                    </div>

                                    <div className="relative w-full">
                                        <FaLocationCrosshairs className="absolute left-3 top-3 text-grayText text-lg" />
                                        <textarea
                                            placeholder="Address"
                                            {...register("address")}
                                            className="textarea w-full py-2 pl-10 pr-3 font-medium border-borderColour"
                                        ></textarea>
                                    </div>
                                    <div>
                                        <h1 className="text-xl font-medium text-textDark">Payment</h1>
                                    </div>

                                    <div className="flex justify-center items-center py-5">
                                        <button className="primaryBtn">
                                            Complete Registration
                                            <div className="arrow-wrapper">
                                                <div className="arrow"></div>
                                            </div>
                                        </button>
                                    </div>

                                </form>
                            </div>
                        </div>
                        <div className="flex-1 w-auto">
                            <div
                                key={_id}
                                className="card bg-primarylight/60 shadow-lg hover:shadow-xl">

                                <figure>
                                    <img
                                        src={image}
                                        className="w-full h-52 object-cover rounded-t-xl"
                                        alt="camp" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title text-sm">{campName}</h2>
                                    <h2>
                                        <span className="font-semibold">Price: </span>
                                        ৳ {campFees}
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
