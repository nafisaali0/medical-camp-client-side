import { Helmet } from 'react-helmet-async';
import Banner from './../Banner/Banner';
import PopularCamp from '../PopularCamp/PopularCamp';
import Testimonials from '../Testimonials/Testimonials';
// import BrandSlider from '../BrandSlider/BrandSlider';



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Amelia | Home</title>
            </Helmet>
            <Banner></Banner>
            <div className="max-w-[1300px] mx-auto my-10 p-5 overflow-hidden space-y-20">
                <PopularCamp></PopularCamp>
                <Testimonials></Testimonials>
            </div>
            {/* <BrandSlider></BrandSlider> */}
        </div>
    );
};

export default Home;