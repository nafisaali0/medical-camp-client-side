import { Link, useLocation } from "react-router-dom";
import logo from '../../assets/images/logo/logo_nav.png'
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
        {
            user?.email ?
                <>
                    <li><Link to="available-camps" className={`${ifActive('/available-camps')
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
                            <figure className="transform scale-125 origin-left">
                                <Link to="/">
                                    <img
                                        src={logo}
                                        alt="logo"
                                        className="h-16 w-fit"
                                    />
                                </Link>
                            </figure>
                        </div>
                        <div className="navbar-end">
                            <ul className="menu menu-horizontal px-1 gap-3 hidden lg:flex text-textDark">
                                {navOptions}
                            </ul>

                            {/* user func */}
                            {
                                user ?

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
                                            <button className="primaryBtn ml-2">
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