import { Link } from 'react-router-dom';
import banner1 from '../../../assets/images/newBanner/image1.avif'
import banner2 from '../../../assets/images/newBanner/image1.jpg'
import banner3 from '../../../assets/images/newBanner/image9.jpg'
import banner4 from '../../../assets/images/newBanner/image8.jpg'
import banner5 from '../../../assets/images/newBanner/image5.jpg'
// slider
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Banner = () => {

    // const bannerImages = [banner1, banner2, banner3, banner4, banner5];

    return (
        <div className='container mx-auto'>
            <AutoplaySlider
                play={true}
                organicArrows={true}
                infinite={true}
                cancelOnInteraction={false}
                interval={3000}
                bullets={true}
                animation="cubeAnimation"
            >
                <div data-src={banner1} className='w-full h-full absolute bg-gradient-to-tr from-[#151515] to-[rgba(21, 24, 24, 0.00)]'>
                    <div className="absolute flex flex-col gap-5 transform -translate-y-1/2 left-12 md:left-52 top-2/4">
                        <div className='text-white w-full md:w-3/4'>
                            <h1 className='text-2xl lg:text-5xl md:text-3xl font-bold'>Healing Together: Join Our Medical Mission for a Healthier Tomorrow</h1>
                            <p className='text-lg md:text-xl lg:mt-10 mt-5'>
                                Join us on a journey of compassion, making a meaningful impact in healthcare for a brighter future.
                            </p>
                        </div>
                        <div className='flex gap-10'>
                            <Link to={'/'}>
                                <button className="btn bg-gradient-to-r from-blue-500 to-indigo-800  border-none text-xl text-white">Explore</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div data-src={banner2} className='w-full h-full absolute bg-gradient-to-tr from-[#151515] to-[rgba(21, 24, 24, 0.00)]'>
                    <div className="absolute flex flex-col gap-5 transform -translate-y-1/2 left-12 md:left-52 top-2/4">
                        <div className='text-white w-full md:w-3/4'>
                            <h1 className='text-2xl lg:text-5xl md:text-3xl font-bold'>Empowering Wellness: Unite with Us in Our Medical Outreach Campaign</h1>
                            <p className='text-lg md:text-xl lg:mt-10 mt-5'>
                                Unite for wellness and be a force for positive change in our community through our impactful medical outreach.
                            </p>
                        </div>
                        <div className='flex gap-10'>
                            <Link to={'/'}>
                                <button className="btn bg-gradient-to-r from-blue-500 to-indigo-800 border-none text-xl text-white">Explore</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div data-src={banner3} className='w-full h-full absolute bg-gradient-to-tr from-[#151515] to-[rgba(21, 24, 24, 0.00)]'>
                    <div className="absolute flex flex-col gap-5 transform -translate-y-1/2 left-12 md:left-52 top-2/4">
                        <div className='text-white w-full md:w-3/4'>
                            <h1 className='text-2xl lg:text-5xl md:text-3xl font-bold'>Champions of Care: A Call to Action in our Medical Community</h1>
                            <p className='text-lg md:text-xl lg:mt-10 mt-5'>
                                Answer the call to become a champion of care, uniting our community to elevate healthcare standards.
                            </p>
                        </div>
                        <div className='flex gap-10'>
                            <Link to={'/'}>
                                <button className="btn bg-gradient-to-r from-blue-500 to-indigo-800 border-none text-xl text-white">Explore</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div data-src={banner4} className='w-full h-full absolute bg-gradient-to-tr from-[#151515] to-[rgba(21, 24, 24, 0.00)]'>
                    <div className="absolute flex flex-col gap-5 transform -translate-y-1/2 left-12 md:left-52 top-2/4">
                        <div className='text-white w-full md:w-3/4'>
                            <h1 className='text-2xl lg:text-5xl md:text-3xl font-bold'>Health Heroes Unite: Making a Difference in Medical Advocacy</h1>
                            <p className='text-lg md:text-xl lg:mt-10 mt-5'>
                                Be a health hero, making a real difference through your support in our impactful medical advocacy campaign.
                            </p>
                        </div>
                        <div className='flex gap-10'>
                            <Link to={'/'}>
                                <button className="btn bg-gradient-to-r from-blue-500 to-indigo-800 border-none text-xl text-white">Explore</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div data-src={banner5} className='w-full h-full absolute bg-gradient-to-tr from-[#151515] to-[rgba(21, 24, 24, 0.00)]'>
                    <div className="absolute flex flex-col gap-5 transform -translate-y-1/2 left-12 md:left-52 top-2/4">
                        <div className='text-white w-full md:w-3/4'>
                            <h1 className='text-2xl lg:text-5xl md:text-3xl font-bold'>Hope in Action: Transforming Lives through Medical Outreach</h1>
                            <p className='text-lg md:text-xl lg:mt-10 mt-5'>
                                Witness hope in action as we transform lives through accessible healthcare, fostering a brighter tomorrow.
                            </p>
                        </div>
                        <div className='flex gap-10'>
                            <Link to={'/'}>
                                <button className="btn bg-gradient-to-r from-blue-500 to-indigo-800 border-none text-xl text-white">Explore</button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* {bannerImages.map((banner, index) => (
                    <div key={index} data-src={banner} />
                ))} */}
            </AutoplaySlider>
        </div>
    );
};
//  {banner2}  animationStyles
export default Banner;