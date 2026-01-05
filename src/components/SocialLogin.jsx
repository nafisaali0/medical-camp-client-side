import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxioslocalhost from "../hooks/useAxioslocalhost";
import { FcGoogle } from "react-icons/fc";
import moment from "moment";
import { Bounce, Slide, toast } from "react-toastify";

const SocialLogin = () => {

    const axiosLocalhost = useAxioslocalhost();
    const navigate = useNavigate()
    const { googleLogIn } = useAuth()

    const handleGoogle = () => {

        googleLogIn()

            .then(result => {
                console.log(result.user);
                navigate('/')
                const userInfo = {
                    userName: result.user?.displayName,
                    email: result.user?.email,
                    userImage: result.user?.photoURL,
                    userRole: "Participant",
                    date: moment().format("MMM Do YY"),
                }
                return (
                    axiosLocalhost.post('/users', userInfo)
                )
            })
            .then(res => {
                if (res.data.insertedId) {
                    console.log('user create')
                    toast.success('Welcome back! You’re now singed in.', {
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
            })
            .catch(error => {
                console.log(error)
                toast.error('Unable to sign in with Google. Please try again.', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
            })


    }

    return (
        <>
            <button
                onClick={handleGoogle}
                className="flex flex-row justify-center items-center gap-2 w-full border border-borderColour rounded-lg py-2 px-3">
                <a>
                    <FcGoogle className="text-2xl" />
                </a>
                <span className='text-sm font-medium text-textDark'>Sign up with google</span>
            </button>
        </>
    );
};

export default SocialLogin;