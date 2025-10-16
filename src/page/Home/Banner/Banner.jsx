import heroBG from '../../../assets/images/background/bg_hero-removebg.png'
import { Link } from "react-router-dom";

const Banner = () => {

    return (
        <>
            <section
                id='home'
                className="relative h-screen flex justify-center items-center p-5"
                style={{
                    backgroundImage: `linear-gradient(to bottom,
                    rgba(135, 168, 208, 0.7),
                    rgba(145, 175, 213, 0.6),
                    rgba(154, 182, 218, 0.5),
                    rgba(164, 189, 223, 0.4),
                    rgba(173, 196, 228, 0.35),
                    rgba(180, 202, 232, 0.3),
                    rgba(187, 208, 235, 0.3),
                    rgba(194, 214, 239, 0.3),
                    rgba(201, 219, 242, 0.35),
                    rgba(208, 225, 245, 0.4),
                    rgba(215, 230, 249, 0.45),
                    rgba(222, 236, 252, 0.5)
                ),
                url(${heroBG})    `,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed"
                }}
            >
                {/* Grid lines background */}
                <div className="absolute inset-0 -z-20 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>

                <div className="relative z-10 text-center max-w-3xl">
                    <h1 className="text-6xl md:text-8xl font-bold text-textDark">
                        Our Medical Mission for a Healthier
                    </h1>

                    <div className="flex justify-center items-center">
                        <p className="text-md text-black font-semibold my-5 lg:my-7 w-full md:w-1/2">
                            Join us on a journey of compassion, making a meaningful impact in healthcare for a brighter future.
                        </p>
                    </div>

                    <div className="flex justify-center items-center">
                        <Link to={"/available-camps"}>
                            <button className="navBtn ml-2">
                                See Camps
                                <div className="arrow-wrapper">
                                    <div className="arrow"></div>
                                </div>
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Banner;