import Banner from './../Banner/Banner';
import PopularCamp from '../PopularCamp/PopularCamp';
import Testimonials from '../Testimonials/Testimonials';
import Category from '../Category/Category';
import Services from '../Services/Services';
import ShareHelmet from '../../../components/ShareHelmet';

const Home = () => {

    return (

        <div>

            <ShareHelmet HelmetTitle="Home" />

            <Banner />

            <div className="max-w-[1300px] mx-auto my-10 p-5 overflow-hidden space-y-20">
                <Services />
                <PopularCamp />
                <Testimonials />
                <Category />
            </div>

        </div>

    );
};

export default Home;