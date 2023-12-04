import { Helmet } from 'react-helmet-async';
import Banner from './../Banner/Banner';
import PopularCamp from '../PopularCamp/PopularCamp';
import Footer from '../../../shared/Footer/Footer';
import BrandSlider from '../BrandSlider/BrandSlider';
import About from '../About/About';
import Testimonials from '../Testimonials/Testimonials';



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Amelia | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularCamp></PopularCamp>
            <Testimonials></Testimonials>
            <About></About>
            <BrandSlider></BrandSlider>
            <Footer></Footer>
        </div>
    );
};

export default Home;