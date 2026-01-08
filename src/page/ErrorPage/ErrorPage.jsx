import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { FaAnglesLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";
import ShareHelmet from './../../components/ShareHelmet';

const ErrorPage = () => {

    const error = useRouteError();

    return (
        <>
            <ShareHelmet HelmetTitle="Error" />

            <div className="max-w-[1300px] mx-auto flex justify-center items-center flex-col">

                <div>
                    <DotLottieReact
                        src="https://lottie.host/c6a5d328-2f5b-418f-9cd0-aeffaec55c84/Y7yNBdMF4j.lottie"
                        loop
                        autoplay
                        style={{ width: 450, height: 450 }}
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