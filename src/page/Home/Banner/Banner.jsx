// import { Link } from 'react-router-dom';
import heroBG from '../../../assets/images/background/bg-2.png'
// import banner2 from '../../../assets/images/newBanner/image1.jpg'
// import banner3 from '../../../assets/images/newBanner/image9.jpg'
// import banner4 from '../../../assets/images/newBanner/image8.jpg'
// import banner5 from '../../../assets/images/newBanner/image5.jpg'
// slider
// import AwesomeSlider from 'react-awesome-slider';
// import withAutoplay from 'react-awesome-slider/dist/autoplay';
// import 'react-awesome-slider/dist/styles.css';
// import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

import { Link } from "react-router-dom";

// const AutoplaySlider = withAutoplay(AwesomeSlider);

const Banner = () => {

    // const bannerImages = [banner1, banner2, banner3, banner4, banner5];

    return (
        // <div className='container mx-auto'>
        //     <AutoplaySlider
        //         play={true}
        //         organicArrows={true}
        //         infinite={true}
        //         cancelOnInteraction={false}
        //         interval={3000}
        //         bullets={true}
        //         animation="cubeAnimation"
        //     >
        //         <div data-src={banner1} className='w-full h-full absolute bg-gradient-to-tr from-[#151515] to-[rgba(21, 24, 24, 0.00)]'>
        //             <div className="absolute flex flex-col gap-5 transform -translate-y-1/2 left-12 md:left-52 top-2/4">
        //                 <div className='text-white w-full md:w-3/4'>
        //                     <h1 className='text-2xl lg:text-5xl md:text-3xl font-bold'>Healing Together: Join Our Medical Mission for a Healthier Tomorrow</h1>
        //                     <p className='text-lg md:text-xl lg:mt-10 mt-5'>
        //                         Join us on a journey of compassion, making a meaningful impact in healthcare for a brighter future.
        //                     </p>
        //                 </div>
        //                 <div className='flex gap-10'>
        //                     <Link to={'/'}>
        //                         <button className="btn bg-gradient-to-r from-blue-500 to-indigo-800  border-none text-xl text-white">Explore</button>
        //                     </Link>
        //                 </div>
        //             </div>
        //         </div>
        //         <div data-src={banner2} className='w-full h-full absolute bg-gradient-to-tr from-[#151515] to-[rgba(21, 24, 24, 0.00)]'>
        //             <div className="absolute flex flex-col gap-5 transform -translate-y-1/2 left-12 md:left-52 top-2/4">
        //                 <div className='text-white w-full md:w-3/4'>
        //                     <h1 className='text-2xl lg:text-5xl md:text-3xl font-bold'>Empowering Wellness: Unite with Us in Our Medical Outreach Campaign</h1>
        //                     <p className='text-lg md:text-xl lg:mt-10 mt-5'>
        //                         Unite for wellness and be a force for positive change in our community through our impactful medical outreach.
        //                     </p>
        //                 </div>
        //                 <div className='flex gap-10'>
        //                     <Link to={'/'}>
        //                         <button className="btn bg-gradient-to-r from-blue-500 to-indigo-800 border-none text-xl text-white">Explore</button>
        //                     </Link>
        //                 </div>
        //             </div>
        //         </div>
        //         <div data-src={banner3} className='w-full h-full absolute bg-gradient-to-tr from-[#151515] to-[rgba(21, 24, 24, 0.00)]'>
        //             <div className="absolute flex flex-col gap-5 transform -translate-y-1/2 left-12 md:left-52 top-2/4">
        //                 <div className='text-white w-full md:w-3/4'>
        //                     <h1 className='text-2xl lg:text-5xl md:text-3xl font-bold'>Champions of Care: A Call to Action in our Medical Community</h1>
        //                     <p className='text-lg md:text-xl lg:mt-10 mt-5'>
        //                         Answer the call to become a champion of care, uniting our community to elevate healthcare standards.
        //                     </p>
        //                 </div>
        //                 <div className='flex gap-10'>
        //                     <Link to={'/'}>
        //                         <button className="btn bg-gradient-to-r from-blue-500 to-indigo-800 border-none text-xl text-white">Explore</button>
        //                     </Link>
        //                 </div>
        //             </div>
        //         </div>
        //         <div data-src={banner4} className='w-full h-full absolute bg-gradient-to-tr from-[#151515] to-[rgba(21, 24, 24, 0.00)]'>
        //             <div className="absolute flex flex-col gap-5 transform -translate-y-1/2 left-12 md:left-52 top-2/4">
        //                 <div className='text-white w-full md:w-3/4'>
        //                     <h1 className='text-2xl lg:text-5xl md:text-3xl font-bold'>Health Heroes Unite: Making a Difference in Medical Advocacy</h1>
        //                     <p className='text-lg md:text-xl lg:mt-10 mt-5'>
        //                         Be a health hero, making a real difference through your support in our impactful medical advocacy campaign.
        //                     </p>
        //                 </div>
        //                 <div className='flex gap-10'>
        //                     <Link to={'/'}>
        //                         <button className="btn bg-gradient-to-r from-blue-500 to-indigo-800 border-none text-xl text-white">Explore</button>
        //                     </Link>
        //                 </div>
        //             </div>
        //         </div>
        //         <div data-src={banner5} className='w-full h-full absolute bg-gradient-to-tr from-[#151515] to-[rgba(21, 24, 24, 0.00)]'>
        //             <div className="absolute flex flex-col gap-5 transform -translate-y-1/2 left-12 md:left-52 top-2/4">
        //                 <div className='text-white w-full md:w-3/4'>
        //                     <h1 className='text-2xl lg:text-5xl md:text-3xl font-bold'>Hope in Action: Transforming Lives through Medical Outreach</h1>
        //                     <p className='text-lg md:text-xl lg:mt-10 mt-5'>
        //                         Witness hope in action as we transform lives through accessible healthcare, fostering a brighter tomorrow.
        //                     </p>
        //                 </div>
        //                 <div className='flex gap-10'>
        //                     <Link to={'/'}>
        //                         <button className="btn bg-gradient-to-r from-blue-500 to-indigo-800 border-none text-xl text-white">Explore</button>
        //                     </Link>
        //                 </div>
        //             </div>
        //         </div>

        //         {/* {bannerImages.map((banner, index) => (
        //             <div key={index} data-src={banner} />
        //         ))} */}
        //     </AutoplaySlider>
        // </div>
        // new
        <>
            {/* <section className="relative h-screen flex justify-center items-center p-5"
                style={{
                    backgroundImage: `
                    linear-gradient(
                         to bottom,
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
                url(${heroBG})
                 `,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed"
                }}
            >
                <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
                <div
                    className="relative z-10 text-center max-w-3xl">
                    <h1 className="text-8xl font-bold text-gradient">
                        Our Medical Mission for a Healthier
                    </h1>

                    <div className="flex justify-center items-center">
                        <p className='text-md text-black font-medium my-5 lg:my-7 w-1/2'>
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

            </section> */}

            {/* new */}
            <section
                className="relative h-screen flex justify-center items-center p-5"
                style={{
                    backgroundImage: `
      linear-gradient(
        to bottom,
       rgba(83, 128, 160, 0.9),
  rgba(95, 138, 175, 0.85),
  rgba(110, 150, 190, 0.8),
  rgba(125, 160, 200, 0.75),
  rgba(135, 170, 210, 0.7),
  rgba(145, 180, 220, 0.65),
  rgba(155, 190, 230, 0.6),
  rgba(165, 200, 240, 0.55),
  rgba(175, 210, 245, 0.5),
  rgba(185, 220, 250, 0.45),
  rgba(195, 230, 252, 0.4),
  rgba(205, 236, 255, 0.35)
      ),
      url(${heroBG})
    `,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed"
                }}
            >
                {/* Grid lines background */}
                <div className="absolute inset-0 -z-20 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>

                {/* 🔹 New Overlay Layer */}
                {/* <div className="absolute bg-black/40 -z-10"></div> */}
                {/* You can adjust opacity: bg-black/20 (lighter), bg-black/40 (darker) */}

                <div className="relative z-10 text-center max-w-3xl">
                    <h1 className="text-7xl font-bold text-black">
                        Our Medical Mission for a Healthier
                    </h1>

                    <div className="flex justify-center items-center">
                        <p className="text-md text-black font-medium my-5 lg:my-7 w-1/2">
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