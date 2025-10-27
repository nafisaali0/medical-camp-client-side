import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Helmet } from "react-helmet-async";
import { FaAnglesLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    // console.error(error);
    return (
        <>
            <Helmet>
                <title>Amelia | ErrorPage</title>
            </Helmet>
            {/* <div className="container mx-auto flex flex-col justify-center items-center  mt-64 text-2xl font-bold">
                <h2>Error!</h2>
                <div className="text-center mt-6">
                    <p>{error.status}</p>
                    <p>{error.statusText}</p>
                </div>
                <Link to="/">
                    <button className="bg-gray-300 px-6 py-3 rounded-md mt-6">Go Back To Home</button>
                </Link>
            </div> */}

            <div className="max-w-[1300px] mx-auto flex justify-center items-center flex-col">
                <div>
                    <DotLottieReact
                        src="https://lottie.host/c6a5d328-2f5b-418f-9cd0-aeffaec55c84/Y7yNBdMF4j.lottie"
                        loop
                        autoplay
                        style={{ width: 450, height:450 }}
                    />
                    <div>
                        <div className="flex flex-col items-center mb-3">
                            <Link to="/">
                                <button className="px-3 py-1 flex justify-center items-center gap-2 text-white font-medium bg-btnColor rounded-lg">
                                    <span>
                                        <FaAnglesLeft />
                                    </span>
                                    Back
                                </button>
                            </Link>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <h2 className="text-xl font-bold">Whoops!</h2>
                            <div className="flex gap-2 items-center text-lg font-medium text-textDark">
                                <p>{error.status}</p>
                                <p>{error.statusText}</p>
                            </div>
                            <p className="text-sm font-medium text-textDark">Sorry! Page not found.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ErrorPage;