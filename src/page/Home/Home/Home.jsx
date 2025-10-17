import { Helmet } from 'react-helmet-async';
import Banner from './../Banner/Banner';
import PopularCamp from '../PopularCamp/PopularCamp';
// import BrandSlider from '../BrandSlider/BrandSlider';
// import Testimonials from '../Testimonials/Testimonials';



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Amelia | Home</title>
            </Helmet>
            <Banner></Banner>
            <div className="max-w-[1300px] mx-auto my-10 p-5">
                <PopularCamp></PopularCamp>
            </div>
            {/* <Testimonials></Testimonials> */}
            {/* <BrandSlider></BrandSlider> */}
        </div>
    );
};

export default Home;