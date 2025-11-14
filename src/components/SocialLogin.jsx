import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxioslocalhost from "../hooks/useAxioslocalhost";
import { FcGoogle } from "react-icons/fc";
import moment from "moment";

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
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Sign Up successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/')
                }
            })
            .catch(error => {
                console.log(error)
                return (
                    Swal.fire({
                        position: "top-end",
                        icon: 'error',
                        title: 'Try Again',
                        text: 'Can Not signin With Google',
                        footer: { error }
                    })
                )
            })

    }

    return (
        <>
            <button
                onClick={handleGoogle}
                className="flex flex-row justify-center items-center gap-2 w-full border border-borderColour rounded-lg py-2 px-3">
                <a>
                    <FcGoogle className="text-2xl" />
                    {/* style={{ width: '20px', height: '20px' }} */}
                </a>
                <span className='text-sm font-medium text-textDark'>Sign up with google</span>
            </button>
        </>
    );
};

export default SocialLogin;