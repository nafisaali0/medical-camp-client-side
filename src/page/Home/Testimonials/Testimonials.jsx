// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import { Navigation } from 'swiper/modules';
import useFeedback from "../../../hooks/useFeedback";
import logo from "../../../assets/images/logo/logo_nav.png"
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import "./style.css"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';



const Testimonials = () => {

    const [feedbacks] = useFeedback();

    return (
        <>
            {/* <div className="container mx-auto overflow-hidden my-20  flex items-center justify-center">
                <div className="w-7/12">
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        {
                            feedbacks.map(review =>
                                <SwiperSlide
                                    key={review._id}>
                                    <div>
                                        <div className="flex flex-col items-center mx-22 my-10">
                                            <div className="flex items-center gap-5">
                                                <div className="avatar">
                                                    <div className="w-20 rounded-full">
                                                        <img src={review.reviewerPhoto} />
                                                    </div>
                                                </div>
                                                <div>
                                                    <h3>{review.reviewerName}</h3>
                                                </div>
                                            </div>
                                            <Rating
                                                style={{ maxWidth: 180 }}
                                                value={review.rating}
                                                readOnly
                                            />
                                        </div>
                                        <p>{review.comment}</p>
                                    </div>

                                </SwiperSlide>)
                        }
                    </Swiper>
                </div>
            </div> */}

            <div>
                <div className="mb-10 text-textDark">
                    <h1 className="text-3xl font-bold text-center">What Participant Are Saying</h1>
                </div>
                {/* <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5"> */}
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper"
                    >

                        {
                            feedbacks?.slice(0, 7).map((review, index) =>
                                <>
                                    <SwiperSlide key={index}>
                                        <div key={index} className="p-5 bg-white rounded-xl shadow-lg hover:shadow-xl">
                                            <div className="flex justify-between items-start">
                                                <div className="flex gap-4 items-center">
                                                    <div className="avatar">
                                                        <div className="w-16 rounded-full">
                                                            <img src={review.reviewerPhoto} />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div>
                                                            <h1 className="text-lg font-bold">
                                                                {review.reviewerName}
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
                                                            className="w-16 object-cover"
                                                        />
                                                    </figure>
                                                </div>
                                            </div>

                                            {
                                                review?.comment ?
                                                    <>
                                                        <div className="h-fit mt-5 p-5">
                                                            <p className="text-md font-medium">
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
            {/* </div> */}
        </>
    );
};

export default Testimonials;