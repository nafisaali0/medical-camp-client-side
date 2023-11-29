import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/images/icon/Logo-removebg.png'
import './navbar.css'
import useAuth from "../../hooks/useAuth";
const NavBar = () => {
    const { user, logOut } = useAuth();

    const handleLogOut = () => {
        logOut(user)
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const navOptions = <>
        <nav className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/availablecamps">Available Camps</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
        </nav>
    </>

    return (
        <>
            {/* <div className=" drop-shadow-lg  bg-base-100"> */}
            <div className="navbar container mx-auto text-black">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>

                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 bg-white">
                            {navOptions}
                        </ul>

                    </div>
                    <img className="w-16" src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className="dropdown dropdown-end text-[#474f85] font-bold font-roboto">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-20 lg:w-36 border-black border-2 rounded-full">
                                        <img src={user.photoURL ? user.photoURL : ``} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li><a>{user.email}</a></li>
                                    <li><a>{user.displayName}</a></li>
                                    <Link className="ml-3" to={'/signup'}><a>Add Another Account</a></Link>
                                    <li onClick={handleLogOut}><a>Logout</a></li>
                                </ul>
                            </div>
                            :
                            <>
                                <Link to={'/donate'}>
                                    <button className="bg-gradient-to-r from-blue-500 to-indigo-800 px-3 py-1 md:px-6 lg:py-2 md:py-1  text-white font-semibold rounded-lg md:text-xl text-sm">Donate</button>
                                </Link>
                            </>
                    }
                </div>
            </div>
            {/* </div > */}
        </>
    );
};

export default NavBar;