import { Link, useLocation } from "react-router-dom";
import logo from '../../assets/images/logo/logo2-removebg.png'
import useAuth from "../../hooks/useAuth";


const NavBar = () => {
    const { user, logOut } = useAuth();
    const location = useLocation()
    const ifActive = (path) => location.pathname === path;

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
        <li><Link to="/"
            className={`${ifActive('/')
                ? 'font-bold bg-primaryDark/80 hover:bg-primaryDark/50'
                : 'font-semibold  hover:bg-primaryDark/80'
                }`}>Home</Link></li>
        {/* <li><Link to="/healthCheck" className={`${ifActive('/healthCheck')
            ? 'text-black font-bold hover:bg-primaryDark/50'
            : 'font-semibold hover:bg-primaryDark/50'
            }`}>Health Check</Link></li> */}
        {
            user?.email ?
                <>
                    <li><Link to="/available-camps" className={`${ifActive('/available-camps')
                        ? 'font-bold bg-primaryDark/80 hover:bg-primaryDark/50'
                        : 'font-semibold hover:bg-primaryDark/80'
                        }`}>Camps</Link></li>
                    <li><Link to="/dashboard" className={`${ifActive('/dashboard')
                        ? 'font-bold bg-primaryDark/80 hover:bg-primaryDark/50'
                        : 'font-semibold hover:bg-primaryDark/80'
                        }`}>Dashboard</Link></li>
                </> : ''
        }
    </>
    const mobileNavOptions = <>
        <li className=""><Link to="/"
            className={`flex justify-center items-center py-2 ${ifActive('/')
                ? 'font-bold bg-primaryDark/80 hover:bg-primaryDark/50'
                : 'font-semibold hover:bg-primaryDark/80'
                }`}>Home</Link></li>
        {
            user?.email ?
                <>
                    <li><Link to="/available-camps" className={`py-2 flex justify-center items-center ${ifActive('/available-camps')
                        ? 'font-bold bg-primaryDark/80 hover:bg-primaryDark/50'
                        : 'font-semibold hover:bg-primaryDark/80'
                        }`}>Camps</Link></li>
                    <li><Link to="/dashboard" className={`py-2 flex justify-center items-center ${ifActive('/dashboard')
                        ? 'font-bold bg-primaryDark/80 hover:bg-primaryDark/50'
                        : 'font-semibold hover:bg-primaryDark/80'
                        }`}>Dashboard</Link></li>
                </> : ''
        }
    </>

    return (
        <>
            {/* <div className="navbar container mx-auto text-black">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>

                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 bg-white">
                            {navOptions}
                        </ul>

                    </div>
                    <Link to={"/"}>
                        <img className="w-16" src={logo} alt="" />
                    </Link>
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
            </div> */}

            <div className="fixed top-0 z-50 w-full bg-primarySemiDark/80 backdrop-blur-md">
                <nav className="max-w-[1300px] mx-auto">
                    <div className="navbar">
                        <div className="navbar-start gap-3">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#404f68"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content rounded-md z-1 mt-5 w-52 bg-primarySemiDark gap-2 text-textDark">
                                    {mobileNavOptions}
                                </ul>
                            </div>
                            <div className="w-[80px] h-[80px]">
                                <figure>
                                    <Link to="/">
                                        <img
                                            src={logo}
                                            alt="logo"
                                            className="" />
                                    </Link>
                                </figure>
                            </div>
                        </div>
                        <div className="navbar-end">
                            <ul className="menu menu-horizontal px-1 gap-3 hidden lg:flex text-textDark">
                                {navOptions}
                            </ul>

                            {/* user func */}
                            {
                                user ?
                                    // <div className="avatar">
                                    //     <div className="w-8 rounded-full">
                                    //         <img src={user.photoURL ? user.photoURL : ``} />
                                    //     </div>
                                    // </div>

                                    <div className="dropdown dropdown-end cursor-pointer ml-2">
                                        <div tabIndex={0} className="avatar">
                                            <div className="w-8 rounded-full">
                                                <img src={user.photoURL ? user.photoURL : ``} />
                                            </div>
                                        </div>
                                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-primarySemiDark backdrop-blur-md rounded-box w-52">
                                            <li className="hover:bg-primaryDark/50 hover:rounded-xl" onClick={handleLogOut}><a>Logout</a></li>
                                        </ul>
                                    </div>
                                    :
                                    <>
                                        {/* signup btn */}
                                        <Link to={"/signup"}>
                                            <button className="navBtn ml-2">
                                                Sign up
                                                <div className="arrow-wrapper">
                                                    <div className="arrow"></div>
                                                </div>
                                            </button>
                                        </Link>
                                    </>
                            }
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default NavBar;