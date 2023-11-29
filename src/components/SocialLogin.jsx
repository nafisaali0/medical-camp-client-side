import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const SocialLogin = () => {

    const { googleLogIn } = useAuth()
    const handleGoogle = () => {
        googleLogIn()
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Signin successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
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