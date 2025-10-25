import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin";
import { useForm } from "react-hook-form"
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxioslocalhost from "../../hooks/useAxioslocalhost";
import { BsArrowLeftSquareFill , BsPerson } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { TbLockPassword } from "react-icons/tb";

const SignUp = () => {

    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const axiosLocalhost = useAxioslocalhost()
    const { updateUserProfile, signUpUser } = useAuth();
    const navigate = useNavigate();

    // image hosting 
    // const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    // const image_hostion_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

    const onSubmit = async (data) => {
        reset();

        // signup authentication
        signUpUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        console.log('user profile info updated')
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            photo: data.photo,
                            role: data.role,
                            phone: data.phone,
                            address: data.address,
                        }
                        console.log(userInfo)
                        axiosLocalhost.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user add')
                                    reset();
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "Your work has been saved",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/')
                                }
                            })
                    })
                    .catch(error => console.log(error))
            })
    }

    return (
        <>
            <Helmet>
                <title>Amelia | Signup</title>
            </Helmet>

            {/* old version */}
            {/* <div className="overflow-hidden" >
                <div className='container mx-auto flex flex-col justify-center items-center drop-shadow-lg md:pt-12 lg:pt-20'>
                    <div className="bg-base-100 m-10 p-7 md:w-[700px]">
                        <div className="text-black my-5 font-bold text-2xl">
                            <h2>Please create your account</h2>
                        </div>
                        <div>
                            <div className="my-10">
                                <SocialLogin></SocialLogin>
                            </div>
                            <div className="my-10 text-center text-xl font-bold">
                                <p>OR</p>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <input type="name" {...register("name")} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Name" />
                            </div>
                            <div>
                                <input type="url" {...register("photo")} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Image" />
                            </div>
                            <select {...register("role")} className="select select-bordered w-full my-5">
                                <option disabled selected>Select Your Role</option>
                                <option>Admin</option>
                                <option>Healthcare Professionals</option>
                                <option>Participant</option>
                            </select>
                            <div>
                                <input type="number" {...register("phone")} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Phone Number" />
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="email" {...register("email", { required: true })} name="email" className="block py-2 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300   focus:outline-none focus:border-blue-600 peer" placeholder="Email" />
                                {errors.email && <span>This field is required</span>}
                            </div>
                            <div className="relative z-0 w-full mb-7 group">
                                <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })}
                                placeholder="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                                {errors.password?.type === 'required' && <p>Password is required</p>}
                                {errors.password?.type === 'minLength' && <p>Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p>Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p>Password must have one Uppercase one lower case, one number and one special character.</p>}
                            </div>
                            <div>
                                <textarea type="number" {...register("address")} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Address" />
                            </div>
                            <div className="flex gap-2 md:gap-5 lg:gap-10 items-center my-10">
                                <div className="relative z-0 group">
                                    <button type="submit" className="text-white md:w-full bg-gradient-to-r from-blue-500 to-indigo-800  font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-cent">SIGN UP</button>
                                </div>
                                <div className="relative z-0 group">
                                    <Link to={'/signin'}>
                                        <button className="text-white md:w-full  bg-gradient-to-r from-blue-500 to-indigo-800 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center">SIGN IN</button>
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div> */}

            {/* new version */}
            <div className="py-20 px-5 my-16">
                <div className="max-w-xl mx-auto p-5 overflow-hidden flex flex-col bg-white border border-borderColour shadow-lg rounded-xl py-10 px-12 space-y-4">
                    <div className="flex justify-between items-center mb-5 py-2">
                        <h5 className="text-textDark text-2xl font-medium">Join Our Health Campaign</h5>
                        <div title="Signin">
                            <Link to={'/signin'}>
                                <BsArrowLeftSquareFill className="text-2xl" />
                            </Link>
                        </div>
                    </div>
                    <div className="flex-auto">

                        <form role="form" onSubmit={handleSubmit(onSubmit)} className='space-y-4'>

                            <div className="relative flex items-center">
                                <BsPerson className="absolute left-3 text-grayText text-lg" />
                                <input
                                    type="name" name="name" placeholder="Name"
                                    {...register("name")}
                                    className="text-sm ease-soft block w-full rounded-lg border border-solid border-borderColour py-2 pl-10 pr-3 font-medium text-textSmallGray transition-all focus:border-borderColour focus:bg-mainTheme focus:text-grayText focus:outline-none"
                                />
                            </div>
                            <div className="relative flex items-center">
                                <TfiEmail className="absolute left-3 text-grayText text-lg" />
                                <input
                                    type="email" name="email" placeholder="Email"
                                    {...register("email", { required: true })}
                                    className="text-sm ease-soft block w-full rounded-lg border border-solid border-borderColour py-2 pl-10 pr-3 font-medium text-textSmallGray transition-all focus:border-borderColour focus:bg-mainTheme focus:text-grayText focus:outline-none"
                                />
                            </div>
                            <div className="flex flex-col">
                                <div className="relative flex items-center">
                                    <TbLockPassword className="absolute left-3 text-grayText text-lg" />
                                    <input
                                        type="password" name="password" placeholder="Password"
                                        {...register("password", {
                                            required: true,
                                            minLength: 6,
                                            maxLength: 20,
                                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                        })}
                                        className="text-sm ease-soft block w-full rounded-lg border border-solid border-borderColour py-2 pl-10 pr-3 font-medium text-textSmallGray transition-all focus:border-borderColour focus:bg-mainTheme focus:text-grayText focus:outline-none"
                                    />
                                </div>
                                <div className="text-grayText text-sm mt-2">
                                    {errors.password?.type === 'required' && <p>Password is required</p>}
                                    {errors.password?.type === 'minLength' && <p>Password must be 6 characters</p>}
                                    {errors.password?.type === 'maxLength' && <p>Password must be less than 20 characters</p>}
                                </div>
                            </div>

                            <div className=''>
                                <button type="submit" className='w-full border px-4 py-2 rounded-lg text-md font-medium text-white border-btnColor bg-btnColor'>Sign up</button>
                            </div>

                            <div className="text-center">
                                <p className="font-medium text-sm">or</p>
                            </div>
                            <div className="flex-auto">
                                <SocialLogin />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;