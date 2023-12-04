import { Helmet } from 'react-helmet-async';
import Banner from './../Banner/Banner';
import PopularCamp from '../PopularCamp/PopularCamp';
import Footer from '../../../shared/Footer/Footer';
import BrandSlider from '../BrandSlider/BrandSlider';
import About from '../About/About';



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Amelia | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularCamp></PopularCamp>
            <About></About>
            <BrandSlider></BrandSlider>
            <Footer></Footer>
        </div>
    );
};

export default Home;