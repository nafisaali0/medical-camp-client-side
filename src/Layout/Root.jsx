import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../shared/Header/NavBar";
import Footer from "../shared/Footer/Footer";

const Root = () => {

    // const location = useLocation();
    // const nosubHeader = location.pathname.includes('signin') || location.pathname.includes('signup') || location.pathname.includes('availablecamp')


    return (
        <>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Root;