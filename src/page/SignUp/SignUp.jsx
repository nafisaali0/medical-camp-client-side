import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin";
import { useForm } from "react-hook-form"
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import useAxioslocalhost from "../../hooks/useAxioslocalhost";
import { BsArrowLeftSquareFill, BsPerson } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { TbLockPassword } from "react-icons/tb";
import background from "../../assets/images/background/bg_form6.png"
import moment from "moment";
import { Slide, toast } from "react-toastify";

const SignUp = () => {

    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const axiosLocalhost = useAxioslocalhost()
    const { signUpUser } = useAuth();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        reset();
        const userInfo = {
            userName: data.name,
            email: data.email,
            userPassword: data.password,
            userRole: "Participant",
            date: moment().format("MMM Do YY"),
        };

        try {
            const result = signUpUser(data.email, data.password)
            console.log(result)

            const res = await axiosLocalhost.post('/users', userInfo);

            if (res.data.insertedId) {
                console.log('user create')
                reset();
                toast.success('Account created successfully!', {
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
            }
        } catch (errors) {
            console.log(errors);
        }
        // right code
        // signUpUser(data.name, data.password)
        //     .then(result => {
        //         console.log(result)
        //         const userInfo = {
        //             userName: data.name,
        //             userEmail: data.email,
        //             userPassword: data.password,
        //             userRole: "participent",
        //         }
        //         return (
        //             axiosLocalhost.post('/users', userInfo)

        //         )
        //     })
        //     .then(res => {
        //         if (res.data.insertedId) {
        //             console.log('user create')
        //             reset();
        //             Swal.fire({
        //                 position: "top-end",
        //                 icon: "success",
        //                 title: "Sign Up successfully",
        //                 showConfirmButton: false,
        //                 timer: 1500
        //             });
        //             navigate('/')
        //         }
        //     })
        //     .catch(errors => {
        //         console.log(errors)
        //     })
    }

    return (
        <>
            {/* <Helmet>
                <title>Amelia | Signup</title>
            </Helmet> */}

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

            </div>
        </>
    );
};

export default SignUp;