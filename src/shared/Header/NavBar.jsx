import { Link, NavLink, useLocation } from "react-router-dom";
import logo from '../../assets/images/icon/Logo-removebg.png'
// import './navbar.css'
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

    // const navOptions = <>
    //     <nav className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
    //         <NavLink to="/">Home</NavLink>
    //         <NavLink to="/healthCheck">Health Check</NavLink>
    //         {
    //             user?.email ?
    //                 <>
    //                     <NavLink to="/available-camps">Available Camps</NavLink>
    //                     <NavLink to="/dashboard">Dashboard</NavLink>
    //                 </> : ''
    //         }
    //         <NavLink to="/contact">Contact Us</NavLink>
    //     </nav>
    // </>

    const navOptions = <>
        {/* className={`flex justify-start items-center gap-2 rounded p-[11px] transition-colors
                                   ${ifActive('/dashboard')
                                    ? 'bg-primaryColor text-white'
                                    : 'text-textSmallGray'
                                }`} */}
        {/* className={`${ifActive('/dashboard')
                                    ? 'text-'
                                    : 'text-black'
                                }`} */}
        <li><Link to="/"
            className={`${ifActive('/')
                ? 'text-black font-semibold'
                : 'text-primaryDark'
                }`}> Home</Link></li>
        {/* ${ifActive('/dashboard') ? 'text-white' : 'text-textSmallGray'} */}
        <li><Link to="/healthCheck">Health Check</Link></li>
        {
            user?.email ?
                <>
                    <li><Link to="/available-camps">Camps</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
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

            <div className="fixed top-0 z-50 w-full bg-primarySemiDark/70 backdrop-blur-md">
                <nav className="max-w-[1300px] mx-auto">
                    <div className="navbar">
                        <div className="navbar-start gap-3">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#000"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content rounded-md z-1 mt-5 w-52 p-2 bg-primarySemiDark/70 backdrop-blur-md flex justify-center items-center gap-4">
                                    {navOptions}
                                </ul>
                            </div>
                            <figure className="w-10">
                                <Link to="/">
                                    <img
                                        src={logo}
                                        alt="logo" />
                                </Link>
                            </figure>
                        </div>
                        <div className="navbar-end">
                            <ul className="menu menu-horizontal px-1 hidden lg:flex">
                                {/* <li>
                                    <details>
                                        <summary>Parent</summary>
                                        <ul className="p-2">
                                            <li><a>Submenu 1</a></li>
                                            <li><a>Submenu 2</a></li>
                                        </ul>
                                    </details>
                                </li> */}
                                {navOptions}
                            </ul>

                            {/* user func */}
                            {
                                user ?
                                    <div className="avatar">
                                        <div className="w-8 rounded-full">
                                            <img src={user.photoURL ? user.photoURL : ``} />
                                        </div>
                                    </div>
                                    :
                                    <>
                                        {/* signup btn */}
                                        <button className="navBtn ml-2">
                                            Sign up
                                            <div className="arrow-wrapper">
                                                <div className="arrow"></div>
                                            </div>
                                        </button>
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