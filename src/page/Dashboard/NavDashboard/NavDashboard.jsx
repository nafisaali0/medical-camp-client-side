import React from "react";
import { Link, useLocation } from "react-router-dom";
import useUsers from "../../../hooks/useUsers";
import logo from '../../../assets/images/logo/logo_footer.png'
import { MdManageAccounts, MdManageHistory, MdOutlineConfirmationNumber, MdOutlinePayment } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowDropdown } from "react-icons/io";
import { IoCreateOutline } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
import { HiBars2, } from "react-icons/hi2";
import { RxDashboard } from "react-icons/rx";
import { SiBasecamp } from "react-icons/si";
import { VscFeedback } from "react-icons/vsc";

const NavDashboard = ({ isOpen, setIsOpen }) => {

    const location = useLocation();
    const ifActive = (path) => location.pathname === path;
    const [users] = useUsers();

    return (
        <>
            <div className="flex flex-col h-screen relative">

                {/* Logo */}
                <div className="flex gap-6 justify-start items-center cursor-pointer px-3 mt-10">

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

                <div className={`absolute top-48 w-16 md:w-60 h-screen sidenavBlur rounded-[0%_6rem_0%_0%] 
                    ${isOpen ? "w-52" : "w-16"}`}></div>

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
                                                    ${ifActive('/dashboard') ? 'sideNavLink' : ''}`}>
                                                <RxDashboard className={`md:text-[20px] ${isOpen ? "text-[20px]" : "text-[20px]"}`} />
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
                                                    }`}>
                                                <MdManageAccounts className={`md:text-[22px] ${isOpen ? "text-[20px]" : "text-[25px]"}`} />
                                                <span
                                                    className={`md:flex md:text-md font-medium
                                                    ${isOpen ? "flex text-xs" : "hidden"}`}>

                                                    Profile

                                                </span>
                                            </Link>
                                            <Link
                                                to="/dashboard/add-a-camp"
                                                className={`flex justify-start items-center gap-2 rounded p-[11px] text-white ${ifActive('/dashboard/add-a-camp')
                                                    ? 'sideNavLink' : ''}`}>
                                                <IoCreateOutline className={`md:text-[22px] ${isOpen ? "text-[20px]" : "text-[25px]"}`} />
                                                <span
                                                    className={`md:flex md:text-md font-medium ${isOpen ? "flex text-xs" : "hidden"}`}>
                                                    Create Camp
                                                </span>
                                            </Link>
                                            <div className="flex justify-start items-center gap-2 rounded p-[11px] text-white">
                                                <MdManageHistory className={`md:text-[22px] ${isOpen ? "text-[20px]" : "text-[25px]"}`} />
                                                <div className={`dropdown dropdown-start md:w-full ${isOpen ? "w-full" : ""}`}>
                                                    <div tabIndex={0} role="button" className={`md:flex items-center gap-1 md:text-md font-medium ${isOpen ? "flex text-xs" : "hidden"}`}>
                                                        Manage
                                                        <span>
                                                            {/* <IoIosArrowDown className="text-[20px]" /> */}
                                                            <IoIosArrowDropdown className="text-[20px]" />
                                                        </span>
                                                    </div>
                                                    <div tabIndex="-1" className="dropdown-content mt-4">
                                                        <Link
                                                            to="/dashboard/manage-camps"
                                                            className={`flex justify-start items-center gap-2 rounded p-[11px] text-white ${ifActive('/dashboard/manage-camps') ? 'sideNavDropdown' : ''}`}>
                                                            <SiBasecamp className={`md:text-[20px] ${isOpen ? "text-[20px]" : "text-[25px]"}`} />
                                                            <span
                                                                className={`md:flex md:text-md font-medium ${isOpen ? "flex text-xs" : "hidden"}`}>
                                                                Camp Hub
                                                            </span>
                                                        </Link>
                                                        <Link
                                                            to="/dashboard/manage-registered-camps"
                                                            className={`flex justify-start items-center gap-2 rounded p-[11px] text-white ${ifActive('/dashboard/manage-registered-camps')
                                                                ? 'sideNavDropdown'
                                                                : ''}`}>
                                                            <MdOutlineConfirmationNumber className={`md:text-[22px] ${isOpen ? "text-[20px]" : "text-[25px]"}`} />
                                                            <span
                                                                className={`md:flex md:text-md font-medium ${isOpen ? "flex text-xs" : "hidden"}`}>
                                                                Enrollments
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
                                                <RxDashboard className={`md:text-[20px] ${isOpen ? "text-[20px]" : "text-[20px]"}`} />
                                                <span
                                                    className={`md:flex md:text-md font-medium
                                                    ${isOpen ? "flex text-xs" : "hidden"}`}>
                                                    Dashboard
                                                </span>
                                            </Link>
                                            <Link
                                                to="/dashboard/participant-profile"
                                                className={`flex justify-start items-center gap-2 rounded p-[11px] text-white ${ifActive('/dashboard/participant-profile')
                                                    ? 'sideNavLink'
                                                    : ''
                                                    }`}>
                                                <MdManageAccounts className={`md:text-[22px] ${isOpen ? "text-[20px]" : "text-[25px]"}`} />
                                                <span
                                                    className={`md:flex md:text-md font-medium
                                                    ${isOpen ? "flex text-xs" : "hidden"}`}>
                                                    Profile
                                                </span>
                                            </Link>
                                            <Link
                                                to="/dashboard/registered-camps"
                                                className={`flex justify-start items-center gap-2 rounded p-[11px] text-white ${ifActive('/dashboard/registered-camps')
                                                    ? 'sideNavLink'
                                                    : ''
                                                    }`}>
                                                <SiBasecamp className={`md:text-[20px] ${isOpen ? "text-[20px]" : "text-[25px]"}`} />
                                                <span
                                                    className={`md:flex md:text-md font-medium
                                                    ${isOpen ? "flex text-xs" : "hidden"}`}>
                                                    My Camps
                                                </span>
                                            </Link>
                                            <Link
                                                to="/dashboard/payment-history"
                                                className={`flex justify-start items-center gap-2 rounded p-[11px] text-white ${ifActive('/dashboard/payment-history')
                                                    ? 'sideNavLink'
                                                    : ''}`}>
                                                <MdOutlinePayment className={`md:text-[22px] ${isOpen ? "text-[20px]" : "text-[25px]"}`} />
                                                <span
                                                    className={`md:flex md:text-md font-medium ${isOpen ? "flex text-xs" : "hidden"}`}>
                                                    Payment
                                                </span>
                                            </Link>
                                            <Link
                                                to="/dashboard/feedback-and-ratings"
                                                className={`flex justify-start items-center gap-2 rounded p-[11px] text-white ${ifActive('/dashboard/feedback-and-ratings')
                                                    ? 'sideNavLink' : ''}`}>
                                                <VscFeedback
                                                    className={`md:text-[22px] ${isOpen ? "text-[20px]" : "text-[25px]"}`} />
                                                <span
                                                    className={`md:flex md:text-md font-medium 
                                                    ${isOpen ? "flex text-xs" : "hidden"}`}>
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

                <div className="flex flex-col justify-start items-start mb-5">
                    <div className="flex w-full justify-start items-center gap-2 rounded p-[11px] text-white sideNavBottom">
                        <BiLogOut className={`md:text-[22px] ${isOpen ? "text-[20px]" : "text-[25px]"}`} />
                        <span
                            className={`md:flex md:text-md font-medium ${isOpen ? "flex text-xs" : "hidden"}`}>
                            LogOut
                        </span>
                    </div>
                </div>

                {/* <div className="flex flex-col justify-start items-start space-y-2">
                    <Link
                        to="/dashboard"
                        className="flex w-full justify-start items-center gap-2 rounded p-[11px] text-white sideNavBottom">
                        <IoSettingsOutline className={`md:text-[25px] ${isOpen ? "text-[20px]" : "text-[25px]"}`} />
                        <span
                            className={`md:flex md:text-md font-medium
                            ${isOpen ? "flex text-xs" : "hidden"}`}
                        >
                            Settings
                        </span>
                    </Link>
                    <div className="flex w-full justify-start items-center gap-2 rounded p-[11px] text-white sideNavBottom">
                        <BiLogOut className={`md:text-[25px] ${isOpen ? "text-[20px]" : "text-[25px]"}`}/>
                        <span
                            className={`md:flex md:text-md font-medium ${isOpen ? "flex text-xs" : "hidden"}`}
                        >
                            LogOut
                        </span>
                    </div>
                </div> */}

            </div>
        </>
    )
}

export default NavDashboard
