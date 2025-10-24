import heroBG from '../../../assets/images/background/bg_hero-removebg.png'
import { Link } from "react-router-dom";

const Banner = () => {

    return (
        <>
            <section
                id='home'
                className="relative h-screen flex items-center justify-center md:items-start md:justify-start p-2 md:p-5 bg-custom-gradient">

                {/* Grid lines background */}
                <div className="absolute inset-0 -z-20 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>

                <div className='max-w-[1300px] mx-auto lg:my-16 lg:pt-10'>
                    <div className="flex flex-col md:flex-row items-center justify-between">

                        <div className='md:flex-1 w-full md:w-1/2'>
                            <div className='flex flex-col items-center md:items-start text-center md:text-start'>
                                <h1 className="text-6xl lg:text-7xl font-bold text-textDark">
                                    Our Medical Mission for a Healthier
                                </h1>
                                <p className="text-md text-black font-semibold my-5 md:my-7 md:max-w-xl">
                                    Join us on a journey of compassion, making a meaningful impact in healthcare for a brighter future.
                                </p>
                            </div>
                            <div className="flex justify-center items-center md:items-start md:justify-start mt-3 md:mt-0">
                                <Link to={"/available-camps"}>
                                    <button className="navBtn">
                                        See Camps
                                        <div className="arrow-wrapper">
                                            <div className="arrow"></div>
                                        </div>
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <div
                            className="hidden md:flex flex-1 w-1/2 h-[550px] relative overflow-hidden"
                            style={{
                                backgroundImage: `url(${heroBG})`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center left",
                                backgroundSize: "contain",
                            }}
                        ></div>

                    </div>

                </div>
            </section>
        </>
    );
};
export default Banner;