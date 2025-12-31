// import BrandSlider from '../BrandSlider/BrandSlider';
import { Helmet } from 'react-helmet-async';
import Banner from './../Banner/Banner';
import PopularCamp from '../PopularCamp/PopularCamp';
import Testimonials from '../Testimonials/Testimonials';
import Category from '../Category/Category';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Amelia | Home</title>
            </Helmet>
            <Banner></Banner>
            <div className="max-w-[1300px] mx-auto my-10 p-5 overflow-hidden space-y-20">
                <PopularCamp></PopularCamp>
                <Services></Services>
                <Testimonials></Testimonials>
                <Category></Category>
            </div>
        </div>
    );
};

export default Home;