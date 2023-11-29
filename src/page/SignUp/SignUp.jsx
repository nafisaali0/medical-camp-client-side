import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin";
import { useForm } from "react-hook-form"
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const SignUp = () => {

    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const { updateUserProfile, signUpUser } = useAuth();
    const navigate = useNavigate();


    // image hosting 
    // const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    // const image_hostion_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

    const onSubmit = async (data) => {
        reset();
        console.log(data)

        // const imageFile = { image: data.image[0] }
        // const res = await axiosPublic.post(image_hostion_api, imageFile, {
        //     headers: {
        //         'Content-Type': 'multipart/form-data'
        //     }
        // });
        
        // signup authentication
        signUpUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        console.log('user profile info updated')
                        reset();
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "SignUp Successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/')
                    })
                    .catch(error => console.log(error))
            })
    }

    return (
        <>
            <Helmet>
                <title>Amelia || Signup</title>
            </Helmet>
            <div className="overflow-hidden" >
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
                                <input type="name" {...register("name")} name="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Name" />
                            </div>
                            <div>
                                <input type="url" {...register("photo", { required: true })} name="photo" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Photo" />
                                {errors.email && <span>Photo URL is required</span>}
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
                                })} placeholder="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                                {errors.password?.type === 'required' && <p>Password is required</p>}
                                {errors.password?.type === 'minLength' && <p>Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p>Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p>Password must have one Uppercase one lower case, one number and one special character.</p>}
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
            </div>
        </>
    );
};

export default SignUp;