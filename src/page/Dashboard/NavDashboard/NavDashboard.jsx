import { Link, useLocation } from "react-router-dom";
import logo from '../../../assets/images/logo/logo_footer.png'
import { RxDashboard } from "react-icons/rx";
// import { PiUserSquareThin } from "react-icons/pi";
// import { SlSettings } from "react-icons/sl";
import useUsers from "../../../hooks/useUsers";
import { HiBars2, } from "react-icons/hi2";
import React from "react";

const NavDashboard = ({ isOpen, setIsOpen }) => {

    const location = useLocation();
    const ifActive = (path) => location.pathname === path;
    const [users] = useUsers();
    // const currentUser = users?.length > 0 ? users[0] : {};

    return (
        <>
            <div className="flex flex-col h-screen relative">

                {/* Logo */}
                <div className="flex gap-3 justify-start items-center cursor-pointer px-3 mt-10">

                    <div
                        onClick={() => {
                            if (window.innerWidth <= 768) { // 768px or less = mobile
                                setIsOpen(!isOpen);
                            }
                        }}>
                        <HiBars2 className="text-3xl text-white" />
                    </div>
                    <Link to={'/'}>
                        <figure>
                            <img className={`md:flex w-[60px] ${isOpen ? "flex" : "hidden"}`} src={logo} alt="" />
                        </figure>
                    </Link>

                </div>
                
                <div className={`absolute top-48 w-60 h-screen sidenavBlur rounded-[0%_9rem_0%_0%] 
                    ${isOpen ? "w-52" : ""}`}></div>

                <nav className="mt-36 flex-1 pr-3">
                    <ul className="space-y-1">
                        {
                            users?.map((eachUser) => (
                                <React.Fragment key={eachUser.id}>
                                    {eachUser?.role === "Admin" && (
                                        <>
                                            <Link
                                                to="/dashboard"
                                                className={`flex justify-start items-center gap-2 rounded p-[11px] text-white 
                                                    ${ifActive('/dashboard')
                                                        ? 'sideNavLink'
                                                        : ''
                                                    }`}>
                                                <RxDashboard />
                                                <span
                                                    className={`md:flex md:text-md font-medium 
                                                    ${isOpen ? "flex text-xs" : "hidden"}`}>
                                                    Dashboard
                                                </span>
                                            </Link>
                                            <Link
                                                to="/dashboard/organizer-profile"
                                                className={`flex justify-start items-center gap-2 rounded p-[11px] text-white ${ifActive('/dashboard/organizer-profile')
                                                    ? 'sideNavLink'
                                                    : ''
                                                    }`}
                                            >
                                                <RxDashboard />
                                                <span
                                                    className={`md:flex md:text-md font-medium
                                                    ${isOpen ? "flex text-xs" : "hidden"}`}
                                                >
                                                    Profile
                                                </span>
                                            </Link>
                                            <Link
                                                to="/dashboard/add-a-camp"
                                                className={`flex justify-start items-center gap-2 rounded p-[11px] text-white ${ifActive('/dashboard/add-a-camp')
                                                    ? 'sideNavLink' : ''}`}>
                                                <RxDashboard />
                                                <span
                                                    className={`md:flex md:text-md font-medium ${isOpen ? "flex text-xs" : "hidden"}`}>
                                                    Create Camp
                                                </span>
                                            </Link>
                                            <div className="flex justify-start items-center gap-2 rounded p-[11px] text-white">
                                                <RxDashboard />
                                                <div className={`dropdown dropdown-start md:w-full ${isOpen ? "w-full" : ""}`}>
                                                    <div tabIndex={0} role="button" className={`md:flex md:text-md font-medium 
                                                    ${isOpen ? "flex text-xs" : "hidden"}`}>Manage</div>
                                                    <div tabIndex="-1" className="dropdown-content mt-3">
                                                        <Link
                                                            to="/dashboard/manage-camps"
                                                            className={`flex justify-start items-center gap-2 rounded p-[11px] text-white ${ifActive('/dashboard/manage-camps') ? 'sideNavDropdown' : ''}`}>
                                                            <RxDashboard />
                                                            <span
                                                                className={`md:flex md:text-md font-medium ${isOpen ? "flex text-xs" : "hidden"}`}>
                                                                All Camp
                                                            </span>
                                                        </Link>
                                                        <Link
                                                            to="/dashboard/manage-registered-camps"
                                                            className={`flex justify-start items-center gap-2 rounded p-[11px] text-white ${ifActive('/dashboard/manage-registered-camps')
                                                                ? 'sideNavDropdown'
                                                                : ''}`}>
                                                            <RxDashboard />
                                                            <span
                                                                className={`md:flex md:text-md font-medium ${isOpen ? "flex text-xs" : "hidden"}`}>
                                                                Register Camps
                                                            </span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                    {eachUser?.role === "Participant" && (
                                        <>
                                            <Link
                                                to="/dashboard"
                                                className={`flex justify-start items-center gap-2 rounded p-[11px] text-white 
                                                    ${ifActive('/dashboard')
                                                        ? 'sideNavLink'
                                                        : ''
                                                    }`}>
                                                <RxDashboard />
                                                <span
                                                    className={`md:flex md:text-md font-medium
                                                    ${isOpen ? "flex text-xs" : "hidden"}`}
                                                >
                                                    Dashboard
                                                </span>
                                            </Link>
                                            <Link
                                                to="/dashboard/participant-profile"
                                                className={`flex justify-start items-center gap-2 rounded p-[11px] text-white ${ifActive('/dashboard/participant-profile')
                                                    ? 'sideNavLink'
                                                    : ''
                                                    }`}
                                            >
                                                <RxDashboard />
                                                <span
                                                    className={`md:flex md:text-md font-medium
                                                    ${isOpen ? "flextext-xs" : "hidden"}`}>
                                                    Profile
                                                </span>
                                            </Link>
                                            <Link
                                                to="/dashboard/registered-camps"
                                                className={`flex justify-start items-center gap-2 rounded p-[11px] text-white ${ifActive('/dashboard/registered-camps')
                                                    ? 'sideNavLink'
                                                    : ''
                                                    }`}
                                            >
                                                <RxDashboard />
                                                <span
                                                    className={`md:flex md:text-md font-medium
                                                     ${isOpen ? "flextext-xs" : "hidden"}`}>
                                                    Registered Camps
                                                </span>
                                            </Link>
                                            <Link
                                                to="/dashboard/payment-history"
                                                className={`flex justify-start items-center gap-2 rounded p-[11px] text-white ${ifActive('/dashboard/payment-history')
                                                    ? 'sideNavLink'
                                                    : ''
                                                    }`}>
                                                <RxDashboard />
                                                <span
                                                    className={`md:flex md:text-md font-medium ${isOpen ? "flex text-xs" : "hidden"}`}
                                                >
                                                    Payment History
                                                </span>
                                            </Link>
                                            <Link
                                                to="/dashboard/feedback-and-ratings"
                                                className={`flex justify-start items-center gap-2 rounded p-[11px] text-white ${ifActive('/dashboard/feedback-and-ratings')
                                                    ? 'sideNavLink'
                                                    : ''
                                                    }`}
                                            >
                                                <RxDashboard
                                                    className={`${ifActive('/dashboard/feedback-and-ratings') ? 'text-white' : ''}`}
                                                />
                                                <span
                                                    className={`md:flex md:text-md font-medium 
                                                    ${isOpen ? "flex text-xs" : "hidden"}`}
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
                {/* <div className="flex md:justify-between items-center leading-4 border-t border-borderColour p-2 py-5">
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
                                className="menu dropdown-content mb-5 z-1 w-52 p-2 rounded-md shadow font-medium text-center border-2 border-borderColour bg-mainTheme text-black backdrop-blur-sm">
                                <div className="py-2 px-4 md:text-md font-medium border-b hover:text-primaryHover hover:border-borderColour cursor-pointer border-borderColour last:border-b-0">Logout</div>
                            </ul>
                        </div>
                    </div>
                </div> */}

                <div className="flex flex-col justify-start items-start space-y-2">
                    <Link
                        to="/dashboard"
                        className="flex w-full justify-start items-center gap-2 rounded p-[11px] text-white sideNavBottom">
                        <RxDashboard />
                        <span
                            className={`md:flex md:text-md font-medium
                            ${isOpen ? "flex text-xs" : "hidden"}`}
                        >
                            Settings
                        </span>
                    </Link>
                    <div className="flex w-full justify-start items-center gap-2 rounded p-[11px] text-white sideNavBottom">
                        <RxDashboard />
                        <span
                            className={`md:flex md:text-md font-medium ${isOpen ? "flex text-xs" : "hidden"}`}
                        >
                            LogOut
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavDashboard
