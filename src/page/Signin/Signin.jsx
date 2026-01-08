import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin";
import { useForm } from "react-hook-form"
import useAuth from "../../hooks/useAuth";
import { TfiEmail } from "react-icons/tfi";
import { TbLockPassword } from "react-icons/tb";
import background from "../../assets/images/background/bg_form6.png"
import { Slide, toast } from "react-toastify";
import ShareHelmet from "../../components/ShareHelmet";

const Signin = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm();
    const { signInUser } = useAuth();
    const navigate = useNavigate();

    const onSubmit = (data) => {

        // signin authentication
        signInUser(data.email, data.password)

            .then(result => {

                const user = result.user;
                console.log(user);
                toast.success('You’re now singed in.', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: 1,
                    theme: "light",
                    transition: Slide,
                });

                navigate('/')

            })

    }

    return (
        <>

            <ShareHelmet HelmetTitle="Sign In" />

            <div
                className="w-full h-screen"
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}>

                <div className="py-20 px-5">

                    <div className="max-w-xl mx-auto p-5 overflow-hidden flex flex-col bg-white border border-borderColour shadow-lg rounded-xl py-10 px-12 space-y-4">
                        
                        <div className="mb-5">
                            <h5 className="text-textDark text-2xl font-medium">Welcome Back</h5>
                        </div>

                        <div className="flex-auto">

                            <form role="form" onSubmit={handleSubmit(onSubmit)} className='space-y-5'>

                                <div className="flex flex-col">

                                    <div className="relative flex items-center">
                                        <TfiEmail className="absolute left-3 text-grayText text-lg" />
                                        <input
                                            type="email" name="email" placeholder="Email"
                                            {...register("email", { required: true })}
                                            className="text-sm ease-soft block w-full rounded-lg border border-solid border-borderColour py-2 pl-10 pr-3 font-medium text-textSmallGray transition-all focus:border-borderColour focus:bg-mainTheme focus:text-grayText focus:outline-none"
                                        />
                                    </div>

                                    <div className="text-grayText text-sm mt-2">
                                        {errors?.email?.type === 'required' && <p>Email is required</p>}
                                    </div>

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
                                        {errors?.password?.type === 'required' && <p>Password is required</p>}
                                    </div>

                                </div>

                                <div>
                                    <button type="submit" className='w-full border px-4 py-2 rounded-lg text-md font-medium text-white border-btnColor bg-btnColor'>Sign In</button>
                                </div>

                                <div className="flex items-center justify-center gap-2 text-md font-medium">
                                    <p>New to Amelia?</p>
                                    <Link
                                        to={'/signup'}
                                        title="Signup">
                                        <p className="text-primaryDark">Create New Account</p>
                                    </Link>
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
            </div>
        </>
    );
};

export default Signin;