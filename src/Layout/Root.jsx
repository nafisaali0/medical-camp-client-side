import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../shared/Header/NavBar";
import Footer from "../shared/Footer/Footer";

const Root = () => {

    const location = useLocation();
    const noNavbar = location.pathname.includes('signin') || location.pathname.includes('signup')
    const noFooter = location.pathname.includes('signin') || location.pathname.includes('signup')

    return (
        <>
            {noNavbar || <NavBar></NavBar>}
            <Outlet></Outlet>
            {noFooter || <Footer></Footer>}
        </>
    );
};

export default Root;