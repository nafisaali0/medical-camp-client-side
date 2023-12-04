import useFeedback from "../../../hooks/useFeedback";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'



const Testimonials = () => {
    const [feedbacks] = useFeedback();
    return (
        <>
            <div className="container mx-auto overflow-hidden my-20  flex items-center justify-center">
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
            </div>
        </>
    );
};

export default Testimonials;