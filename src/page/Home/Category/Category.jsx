import heartCat from "../../../assets/images/Category/image1-removebg.png"
import '@smastrom/react-rating/style.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import "./categoryStyle.css"
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import useCamp from "../../../hooks/useCamp";

const Category = () => {

    const [camp] = useCamp();
    // console.log(camp)

    const uniqueCategory = camp.filter((obj, index, category) =>
        index === category.findIndex((t) => (
            t.campCategory === obj.campCategory
        ))
    );
    console.log(uniqueCategory)
    return (
        <>
            <div className="max-w-[800px] mx-auto">
                <div className="mb-10 text-textDark">
                    <h1 className="text-3xl font-bold text-center">Category</h1>
                </div>

                <div>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={5}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper"
                        breakpoints={{
                            375: {
                                slidesPerView: 1,
                                spaceBetween: 10
                            },
                            425: {
                                slidesPerView: 2,
                            },
                            640: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <div className="flex flex-col items-center w-fit h-fit">

                                <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full bg-primarylight flex items-center justify-center overflow-hidden">
                                    <img
                                        src={heartCat}
                                        alt="Heart Category"
                                        className="w-4/4 h-4/4 object-contain"
                                    />
                                </div>

                                <h1 className="mt-4 text-lg font-semibold text-textDark text-center">
                                    Heart
                                </h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col items-center w-fit h-fit">

                                <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full bg-primarylight flex items-center justify-center overflow-hidden">
                                    <img
                                        src={heartCat}
                                        alt="Heart Category"
                                        className="w-4/4 h-4/4 object-contain"
                                    />
                                </div>

                                <h1 className="mt-4 text-lg font-semibold text-textDark text-center">
                                    Heart
                                </h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col items-center w-fit h-fit">

                                <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full bg-primarylight flex items-center justify-center overflow-hidden">
                                    <img
                                        src={heartCat}
                                        alt="Heart Category"
                                        className="w-4/4 h-4/4 object-contain"
                                    />
                                </div>

                                <h1 className="mt-4 text-lg font-semibold text-textDark text-center">
                                    Heart
                                </h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col items-center  w-fit h-fit">

                                <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full bg-primarylight flex items-center justify-center overflow-hidden">
                                    <img
                                        src={heartCat}
                                        alt="Heart Category"
                                        className="w-4/4 h-4/4 object-contain"
                                    />
                                </div>

                                <h1 className="mt-4 text-lg font-semibold text-textDark text-center">
                                    Heart
                                </h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col items-center w-fit h-fit">

                                <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full bg-primarylight flex items-center justify-center overflow-hidden">
                                    <img
                                        src={heartCat}
                                        alt="Heart Category"
                                        className="w-4/4 h-4/4 object-contain"
                                    />
                                </div>

                                <h1 className="mt-4 text-lg font-semibold text-textDark text-center">
                                    Heart
                                </h1>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Category
