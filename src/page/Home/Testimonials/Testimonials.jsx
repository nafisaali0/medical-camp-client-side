import useFeedback from "../../../hooks/useFeedback";
import logo from "../../../assets/images/logo/logo_nav.png"
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import "./testimoninalStyle.css"
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';



const Testimonials = () => {

    const [feedbacks] = useFeedback();

    return (
        <>
            <div>
                <div className="mb-10 text-textDark">
                    <h1 className="text-3xl font-bold text-center">What Participant Are Saying</h1>
                </div>
                <div>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper, swiper-slide-testimonial, swiper-slide-testimonial "
                        breakpoints={{
                            375: {
                                slidesPerView: 1,
                                spaceBetween: 10
                            },
                            425: {
                                slidesPerView: 1,
                            },
                            640: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {
                            feedbacks?.slice(0, 6)?.map((review, index) =>
                                <>
                                    <SwiperSlide key={index}>
                                        <div key={index} className="p-5 h-64 bg-white rounded-t-2xl rounded-xl shadow-lg hover:shadow-xl">
                                            <div className="flex justify-between items-start">
                                                <div className="flex gap-4 items-center">
                                                    <div className="avatar">
                                                        <div className="rounded-full">
                                                            <img src={review?.reviewerPhoto} />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div>
                                                            <h1 className="text-lg font-bold">
                                                                {review?.reviewerName}
                                                            </h1>
                                                        </div>
                                                        <div>
                                                            <span>
                                                                <Rating
                                                                    style={{ maxWidth: 80 }}
                                                                    value={review?.rating}
                                                                    readOnly
                                                                />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <figure>
                                                        <img src={logo}
                                                            alt="logo"
                                                        />
                                                    </figure>
                                                </div>
                                            </div>

                                            {
                                                review?.comment ?
                                                    <>
                                                        <div className="h-fit mt-5">
                                                            <p className="text-xs font-medium">
                                                                {review?.comment}
                                                            </p>
                                                        </div>
                                                    </>
                                                    :
                                                    ""
                                            }
                                        </div>
                                    </SwiperSlide>
                                </>
                            )}
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default Testimonials;