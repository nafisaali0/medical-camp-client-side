import { Link } from "react-router-dom";
import icon1 from '../../assets/images/icon/facebook.svg'
import icon2 from '../../assets/images/icon/linkedin.svg'
import icon3 from '../../assets/images/icon/github1.svg'

const Header = () => {
    return (
        <>
            <div className="flex items-center h-14 bg-[#ece8d9]">
                <div className="navbar container mx-auto">
                    <div className="navbar-start">
                        <div className='flex gap-1 items-center flex-wrap justify-center md:justify-start'>
                            <a href=""><img className='w-[30px] h-[30px]' src={icon1} alt="" /></a>
                            <a href=""><img className='w-[30px] h-[30px]' src={icon2} alt="" /></a>
                            <a href=""><img className='w-[30px] h-[30px]' src={icon3} alt="" /></a>
                        </div>
                    </div>
                    <div className="navbar-end">
                        {/* {
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
                                        <li onClick={handleLogOut} ><a>Logout</a></li>
                                    </ul>
                                </div>
                                :
                                <>
                                    <div className="flex gap-2 md:gap-5 items-center">
                                        <Link to={'/signin'}>
                                            <button className="px-2 md:px-6 lg:py-2 md:py-1 border-black border-r-2 bg-white md:text-xl text-sm text-black font-semibold">Sign in</button>
                                        </Link>
                                        <Link to={'/signup'}>
                                            <button className="px-3 py-1 md:px-6 lg:py-2 md:py-1 border-black bg-black text-white md:text-xl text-sm rounded-full">Sign up</button>
                                        </Link>
                                    </div>
                                </>
                        } */}
                        <div className="flex gap-2 md:gap-5 items-center">
                            <Link to={'/signin'}>
                                <button className="px-2 lg:py-2 md:py-1 border-black border-r-2 md:text-xl text-sm text-black font-semibold">Sign in</button>
                            </Link>
                            <Link to={'/signup'}>
                                <button className="bg-gradient-to-r from-blue-500 to-indigo-800 px-3 py-1 md:px-6 lg:py-2 md:py-1  text-white font-semibold rounded-lg md:text-xl text-sm">Sign up</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;