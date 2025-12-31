import { Link } from "react-router-dom";
import { IoMdTime } from "react-icons/io";
import { GoPeople } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
// Import Swiper 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './popularCampStyle.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import useUniqueEnrollCamp from "../../../hooks/useUniqueEnrollCamp";
import ParticipentCount from "../../../components/ParticipentCount";

const PopularCamp = () => {

    const { popularCamp } = useUniqueEnrollCamp();

    return (
        <>
            <div>
                <div className="mb-10">
                    <h1 className="text-3xl text-textDark font-bold text-center">Popular Camps</h1>
                </div>

                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={
                        {
                            clickable: true,
                        }
                    }
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    {
                        popularCamp?.slice(0, 4).map((enrolledCamp) =>
                            <>
                                <SwiperSlide>

                                    <div className="relative rounded-3xl bg-white shadow-lg hover:shadow-xl">
                                        <div className="relative w-full h-[250px]">
                                            <figure>
                                                <img
                                                    src={enrolledCamp?.enrollCampImage}
                                                    className="rounded-t-3xl"
                                                />
                                            </figure>
                                        </div>

                                        <div className="w-full z-10 md:max-w-[300px] md:mx-auto md:absolute md:top-52 md:left-10 p-4 md:rounded-lg bg-gradient-to-r from-[#404f68] via-[#87A8D0]/60 to-[#B9CEEB]/60 backdrop-blur-sm">
                                            <h2 className="text-center text-lg font-bold text-white">
                                                {enrolledCamp?.enrollCampName}
                                            </h2>
                                        </div>
                                        <div className="pt-10 md:pt-0 p-3 m-0 md:-mt-3 rounded-t-3xl rounded-b-3xl bg-white border-2 border-white">
                                            <div className="flex flex-col items-start gap-4 mt-7 md:mt-14">
                                                <div className="w-full space-y-3">

                                                    <div className="flex items-start gap-2">
                                                        <GoPeople className="text-[25px] text-btnColor" />
                                                        <h1 className="text-sm font-normal text-textDark">
                                                            <span className="font-bold">Participent: </span>
                                                            <ParticipentCount
                                                                enrollCampId={enrolledCamp?.enrollCampId} />
                                                        </h1>
                                                    </div>

                                                    <div className="flex gap-2 items-start">
                                                        <IoMdTime className="text-[25px] text-btnColor" />
                                                        <h1 className="text-sm font-normal text-textDark">
                                                            <span className="font-bold">Date & Time: </span>
                                                            {enrolledCamp?.enrollCampDate}
                                                            <span className="mx-1 text-textDark font-bold">|</span>
                                                            {enrolledCamp?.enrollCampTime}
                                                        </h1>
                                                    </div>

                                                    <div className="flex items-start gap-2">
                                                        <GoPeople className="text-[25px] text-btnColor" />
                                                        <h1 className="text-sm font-normal text-textDark">
                                                            <span className="font-bold">Target Audience: </span>
                                                            {enrolledCamp?.enrollCampAge}
                                                        </h1>
                                                    </div>

                                                    <div className="flex items-start gap-2">
                                                        <IoLocationOutline className="text-[25px] text-btnColor" />
                                                        <h1 className="text-sm font-normal text-textDark">
                                                            <span className="font-bold">Venue: </span>
                                                            {enrolledCamp?.enrollCampVenue}
                                                        </h1>
                                                    </div>

                                                    <div className="flex items-start gap-2">
                                                        <FaBangladeshiTakaSign className="text-[16px] text-btnColor" />
                                                        <h1 className="text-sm font-normal text-textDark">
                                                            <span className="font-bold">Price: </span>
                                                            {enrolledCamp?.price}
                                                        </h1>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className="card-actions justify-center my-3">
                                                <Link to={`/camp-details/${enrolledCamp?.enrollCampId}`}>
                                                    <button className="primaryBtn ml-2">
                                                        View Details
                                                        <div className="arrow-wrapper">
                                                            <div className="arrow"></div>
                                                        </div>
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                </SwiperSlide>
                            </>
                        )
                    }
                </Swiper>
            </div>
        </>
    );
};

export default PopularCamp;