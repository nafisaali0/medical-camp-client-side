import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../shared/Header/NavBar";
import Header from "../shared/Header/Header";

const Root = () => {
    
    const location = useLocation();
    // console.log(location)
    const nosubHeader = location.pathname.includes('signin') || location.pathname.includes('signup') ||  location.pathname.includes('availablecamp')


    return (
        <div>
            {nosubHeader || <Header></Header>}            
            <NavBar></NavBar>            
            <Outlet></Outlet>
        </div>
    );
};

export default Root;