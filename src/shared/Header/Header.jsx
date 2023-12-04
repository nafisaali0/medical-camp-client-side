import { Link } from "react-router-dom";
import icon1 from '../../assets/images/icon/facebook.svg'
import icon2 from '../../assets/images/icon/linkedin.svg'
import useAuth from './../../hooks/useAuth';

const Header = () => {
    const { user } = useAuth()
    return (
        <>
            <div className="flex items-center h-14 bg-[#ece8d9]">
                <div className="navbar container mx-auto">
                    <div className="navbar-start">
                        <div className='flex gap-1 items-center flex-wrap justify-center md:justify-start'>
                            <a href=""><img className='w-[30px] h-[30px]' src={icon1} alt="" /></a>
                            <a href=""><img className='w-[30px] h-[30px]' src={icon2} alt="" /></a>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <div className="flex gap-2 md:gap-5 items-center">
                            {
                                user ?
                                    <Link to={'/signup'}>
                                        <button className="bg-gradient-to-r from-blue-500 to-indigo-800 px-3 py-1 md:px-6 lg:py-2 md:py-1  text-white font-semibold rounded-lg md:text-xl text-sm">Sign up</button>
                                    </Link>
                                    :
                                    <>
                                        <Link to={'/signin'}>
                                            <button className="px-4 lg:py-2 md:py-1 border-black border-r-2 md:text-xl text-sm text-black font-semibold">Sign in</button>
                                        </Link>
                                        <Link to={'/signup'}>
                                            <button className="bg-gradient-to-r from-blue-500 to-indigo-800 px-3 py-1 md:px-6 lg:py-2 md:py-1  text-white font-semibold rounded-lg md:text-xl text-sm">Sign up</button>
                                        </Link>
                                    </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;