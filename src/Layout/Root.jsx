import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../shared/Header/NavBar";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";

const Root = () => {

    const location = useLocation();
    // console.log(location)
    const nosubHeader = location.pathname.includes('signin') || location.pathname.includes('signup') || location.pathname.includes('availablecamp')


    return (
        <div>
            {nosubHeader || <Header></Header>}
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;