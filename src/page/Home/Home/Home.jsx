import { Helmet } from 'react-helmet-async';
import Banner from './../Banner/Banner';
import PopularCamp from '../PopularCamp/PopularCamp';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Amelia | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularCamp></PopularCamp>
        </div>
    );
};

export default Home;