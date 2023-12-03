import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxioslocalhost from "../hooks/useAxioslocalhost";

const SocialLogin = () => {
    
    const axiosLocalhost = useAxioslocalhost();
    const navigate = useNavigate()
    const { googleLogIn } = useAuth()
    const handleGoogle = () => {
        googleLogIn()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email,
                    photo: result.user?.photoURL
                }
                axiosLocalhost.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        Swal.fire(
                            'Login Successfully!'
                        ),
                        navigate('/')
                    })
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
        <div>
            <div>
                <button
                    onClick={handleGoogle}
                    className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-800 text-white"
                    type="submit"
                    data-ripple-light="true"
                >
                    Sign In With Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;