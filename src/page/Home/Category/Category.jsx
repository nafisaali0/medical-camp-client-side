import '@smastrom/react-rating/style.css';
import { FreeMode, Pagination } from 'swiper/modules';
import useCamp from "../../../hooks/useCamp";
import Loader from "../../../components/Loader";
import { useEffect, useState } from "react";
// import swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import "./categoryStyle.css"
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const Category = () => {

    const [camp] = useCamp();
    const [uniqueCategory, setUniqueCategory] = useState();

    useEffect(() => {

        if (!camp) return <Loader />;
        const uniqueCategories = camp.filter((obj, index, category) =>
            index === category.findIndex((t) => (
                t.campCategory === obj.campCategory
            ))

        );
        setUniqueCategory(uniqueCategories);

    }, [camp]);

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
                        className="mySwipe"
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
                        {
                            uniqueCategory?.map((uniqueCat, index) =>
                                <>
                                    <SwiperSlide>
                                        <div className='flex justify-center items-center'>

                                            <div key={index} className="flex flex-col items-center w-fit h-fit">

                                                <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full bg-primarylight flex items-center justify-center overflow-hidden">
                                                    <img
                                                        src={uniqueCat?.campCategoryImage}
                                                        alt="Heart Category"
                                                        className="w-4/4 h-4/4 object-contain"
                                                    />
                                                </div>
                                                <h1
                                                    className="mt-4 text-lg font-semibold text-textDark text-center cursor-pointer">
                                                    {uniqueCat?.campCategory}
                                                </h1>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                </>

                            )}
                    </Swiper>
                </div>
            </div >
        </>
    )
}

export default Category
