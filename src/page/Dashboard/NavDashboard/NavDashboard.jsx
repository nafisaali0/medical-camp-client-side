import { Link, useLocation } from "react-router-dom";
import logo from '../../../assets/images/logo/logo_nav.png'
import { RxDashboard } from "react-icons/rx";
// import { PiUserSquareThin } from "react-icons/pi";
// import { SlSettings } from "react-icons/sl";
import useUsers from "../../../hooks/useUsers";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import React from "react";

const NavDashboard = ({ isOpen, setIsOpen }) => {

    const location = useLocation();
    const ifActive = (path) => location.pathname === path;
    const [users] = useUsers();
    const currentUser = users?.length > 0 ? users[0] : {};

    return (
        <>
            <div className="flex flex-col h-screen">
                {/* Logo */}
                <div className="flex gap-2 justify-start items-center cursor-pointer p-3 border-b border-borderColour">
                    <figure
                        onClick={() => {
                            if (window.innerWidth <= 768) { // 768px or less = mobile
                                setIsOpen(!isOpen);
                            }
                        }}
                    >
                        <img className="w-[37px]" src={logo} alt="" />
                    </figure>
                    <Link to={'/'}>
                        <h1 className={`md:flex text-[26px] font-semibold text-black ${isOpen ? "flex" : "hidden"}`}>Amelia</h1>
                    </Link>
                </div>

                {/* Middle navigation */}
                <nav className="mt-20 flex-1 p-3">
                    <ul className="space-y-3">
                        {
                            users?.map((eachUser) => (
                                <React.Fragment key={eachUser.id}>
                                    {eachUser?.role === "Admin" && (
                                        <>
                                            <Link
                                                to="/dashboard/home-dashbord"
                                                className={`flex justify-start items-center gap-2 rounded p-[11px] transition-colors ${ifActive('/dashboard/home-dashbord')
                                                    ? 'bg-btnColor text-white'
                                                    : 'text-textDark'
                                                    }`}
                                            >
                                                <RxDashboard
                                                    className={`${ifActive('/dashboard/home-dashbord') ? 'text-white' : 'text-textDark'}`}
                                                />
                                                <span
                                                    className={`md:flex text-md font-semibold 
                                                    ${ifActive('/dashboard/home-dashbord') ? 'text-white' : 'text-textDark'} ${isOpen ? "flex" : "hidden"}`}
                                                >
                                                    Dashboard
                                                </span>
                                            </Link>
                                            <Link
                                                to="/dashboard/organizer-profile"
                                                className={`flex justify-start items-center gap-2 rounded p-[11px] transition-colors ${ifActive('/dashboard/organizer-profile')
                                                    ? 'bg-btnColor text-white'
                                                    : 'text-textDark'
                                                    }`}
                                            >
                                                <RxDashboard
                                                    className={`${ifActive('/dashboard/organizer-profile') ? 'text-white' : 'text-textDark'}`}
                                                />
                                                <span
                                                    className={`md:flex text-md font-semibold
                                                    ${ifActive('/dashboard/organizer-profile') ? 'text-white' : 'text-textDark'} ${isOpen ? "flex" : "hidden"}`}
                                                >
                                                    Profile
                                                </span>
                                            </Link>
                                            <Link
                                                to="/dashboard/add-a-camp"
                                                className={`flex justify-start items-center gap-2 rounded p-[11px] transition-colors ${ifActive('/dashboard/add-a-camp')
                                                    ? 'bg-btnColor text-white'
                                                    : 'text-textDark'
                                                    }`}
                                            >
                                                <RxDashboard
                                                    className={`${ifActive('/dashboard/add-a-camp') ? 'text-white' : 'text-textDark'}`}
                                                />
                                                <span
                                                    className={`md:flex text-md font-semibold
                                                    ${ifActive('/dashboard/add-a-camp') ? 'text-white' : 'text-textDark'} ${isOpen ? "flex" : "hidden"}`}
                                                >
                                                    Create Camp
                                                </span>
                                            </Link>
                                            <Link
                                                to="/dashboard/manage-camps"
                                                className={`flex justify-start items-center gap-2 rounded p-[11px] transition-colors ${ifActive('/dashboard/manage-camps')
                                                    ? 'bg-btnColor text-white'
                                                    : 'text-textDark'
                                                    }`}
                                            >
                                                <RxDashboard
                                                    className={`${ifActive('/dashboard/manage-camps') ? 'text-white' : 'text-textDark'}`}
                                                />
                                                <span
                                                    className={`md:flex text-md font-semibold
                                                   ${ifActive('/dashboard/manage-camps') ? 'text-white' : 'text-textDark'} ${isOpen ? "flex" : "hidden"}`}
                                                >
                                                    Manage Camp
                                                </span>
                                            </Link>
                                            <Link
                                                to="/dashboard/manage-registered-camps"
                                                className={`flex justify-start items-center gap-2 rounded p-[11px] transition-colors ${ifActive('/dashboard/manage-registered-camps')
                                                    ? 'bg-btnColor text-white'
                                                    : 'text-textDark'
                                                    }`}
                                            >
                                                <RxDashboard
                                                    className={`${ifActive('/dashboard/manage-registered-camps') ? 'text-white' : 'text-textDark'}`}
                                                />
                                                <span
                                                    className={`md:flex text-md font-semibold
                                                 ${ifActive('/dashboard/manage-registered-camps') ? 'text-white' : 'text-textDark'} ${isOpen ? "flex" : "hidden"}`}
                                                >
                                                    Registration Camps
                                                </span>
                                            </Link>
                                        </>
                                    )}
                                    {eachUser?.role === "Participant" && (
                                        <>
                                            <Link
                                                to="/dashboard/home-dashbord"
                                                className={`flex justify-start items-center gap-2 rounded p-[11px] transition-colors ${ifActive('/dashboard/home-dashbord')
                                                    ? 'bg-btnColor text-white'
                                                    : 'text-textDark'
                                                    }`}
                                            >
                                                <RxDashboard
                                                    className={`${ifActive('/dashboard/home-dashbord') ? 'text-white' : 'text-textDark'}`}
                                                />
                                                <span
                                                    className={`md:flex text-md font-semibold
                                                    ${ifActive('/dashboard/home-dashbord') ? 'text-white' : 'text-textDark'} ${isOpen ? "flex" : "hidden"}`}
                                                >
                                                    Dashboard
                                                </span>
                                            </Link>
                                            <Link
                                                to="/dashboard/participant-profile"
                                                className={`flex justify-start items-center gap-2 rounded p-[11px] transition-colors ${ifActive('/dashboard/participant-profile')
                                                    ? 'bg-btnColor text-white'
                                                    : 'text-textDark'
                                                    }`}
                                            >
                                                <RxDashboard
                                                    className={`${ifActive('/dashboard/participant-profile') ? 'text-white' : 'text-textDark'}`}
                                                />
                                                <span
                                                    className={`md:flex text-md font-semibold
                                                    ${ifActive('/dashboard/participant-profile') ? 'text-white' : 'text-textDark'} ${isOpen ? "flex" : "hidden"}`}
                                                >
                                                    Profile
                                                </span>
                                            </Link>
                                            <Link
                                                to="/dashboard/registered-camps"
                                                className={`flex justify-start items-center gap-2 rounded p-[11px] transition-colors ${ifActive('/dashboard/registered-camps')
                                                    ? 'bg-btnColor text-white'
                                                    : 'text-textDark'
                                                    }`}
                                            >
                                                <RxDashboard
                                                    className={`${ifActive('/dashboard/registered-camps') ? 'text-white' : 'text-textDark'}`}
                                                />
                                                <span
                                                    className={`md:flex text-md font-semibold
                                                    ${ifActive('/dashboard/registered-camps') ? 'text-white' : 'text-textDark'} ${isOpen ? "flex" : "hidden"}`}
                                                >
                                                    Registered Camps
                                                </span>
                                            </Link>
                                            <Link
                                                to="/dashboard/payment-history"
                                                className={`flex justify-start items-center gap-2 rounded p-[11px] transition-colors ${ifActive('/dashboard/payment-history')
                                                    ? 'bg-btnColor text-white'
                                                    : 'text-textDark'
                                                    }`}
                                            >
                                                <RxDashboard
                                                    className={`${ifActive('/dashboard/payment-history') ? 'text-white' : 'text-textDark'}`}
                                                />
                                                <span
                                                    className={`md:flex text-md font-semibold
                                                    ${ifActive('/dashboard/payment-history') ? 'text-white' : 'text-textDark'} ${isOpen ? "flex" : "hidden"}`}
                                                >
                                                    Payment History
                                                </span>
                                            </Link>
                                            <Link
                                                to="/dashboard/feedback-and-ratings"
                                                className={`flex justify-start items-center gap-2 rounded p-[11px] transition-colors ${ifActive('/dashboard/feedback-and-ratings')
                                                    ? 'bg-btnColor text-white'
                                                    : 'text-textDark'
                                                    }`}
                                            >
                                                <RxDashboard
                                                    className={`${ifActive('/dashboard/feedback-and-ratings') ? 'text-white' : 'text-textDark'}`}
                                                />
                                                <span
                                                    className={`md:flex text-md font-semibold
                                                    ${ifActive('/dashboard/feedback-and-ratings') ? 'text-white' : 'text-textDark'}  
                                                    ${isOpen ? "flex" : "hidden"}`}
                                                >
                                                    Review
                                                </span>
                                            </Link>
                                        </>
                                    )}
                                </React.Fragment>
                            ))
                        }
                    </ul>
                </nav>

                {/* Bottom user section */}
                <div className="flex md:justify-between items-center leading-4 border-t border-borderColour p-2 py-5">
                    <div className="flex gap-2 items-center">
                        {
                            currentUser?.photo ?
                                <>
                                    <div className="avatar flex">
                                        <div className="w-9 rounded-full">
                                            <img src={currentUser?.photo} />
                                        </div>
                                    </div>
                                </>
                                :
                                <>
                                    <div className="w-10 h-10 rounded-full bg-bodyColor flex items-center justify-center">
                                        <span className="text-sm font-normal text-black">
                                            {currentUser?.name?.charAt(0).toUpperCase()}
                                        </span>
                                    </div>
                                </>
                        }
                        <div className={`md:flex flex-col max-w-[150px] ${isOpen ? "flex" : "hidden"}`}>
                            <h1 className="text-[14px] font-medium text-black truncate whitespace-nowrap overflow-hidden">{currentUser?.name}</h1>
                            <span
                                className="text-[12px] font-normal text-textSmallGray truncate whitespace-nowrap overflow-hidden"
                                title={currentUser?.email}
                            >
                                {currentUser?.email}
                            </span>
                        </div>
                    </div>
                    <div className={`md:flex ${isOpen ? "flex" : "hidden"}`}>
                        <div className="dropdown dropdown-top dropdown-end">
                            <HiOutlineEllipsisVertical
                                tabIndex={0}
                                role="button"
                                style={{ width: '20px', height: '20px' }} />
                            <ul
                                tabIndex={0}
                                className="menu dropdown-content mb-5 z-1 w-52 p-2 rounded-md shadow font-semibold text-center border-2 border-borderColour bg-mainTheme text-black backdrop-blur-sm">
                                <div className="py-2 px-4 text-md font-semibold border-b hover:text-primaryHover hover:border-borderColour cursor-pointer border-borderColour last:border-b-0">Logout</div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavDashboard
