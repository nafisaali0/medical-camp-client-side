import { NavLink, Outlet } from 'react-router-dom';
import logo from '../assets/images/icon/Logo-removebg.png'
import useUsers from '../hooks/useUsers';
import React from 'react';
import useAuth from '../hooks/useAuth';

const Dashboard = () => {

    const [users] = useUsers();//this user from DB
    const { user } = useAuth();//this user from AuthProvider

    return (
        <>
            <div className='bg-[#f3eee4]'>
                <div className="bg-white p-2 drop-shadow-md">
                    <div className='flex justify-between mx-10'>
                        <div className='flex items-center gap-4'>
                            <img className="w-16" src={logo} alt="" />
                            <h2 className='text-3xl font-bold text-[#2b355c]'>Amelia Medical Camp</h2>
                        </div>
                        {/* search bar */}
                        <div className='w-2/5'>
                            <form>
                                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                    <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search" required />
                                    <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">Search</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
                <div className="flex gap-10">
                    <div className="w-80 min-h-screen bg-white p-3">
                        <div className='flex justify-around items-center my-4'>
                            <div className="avatar">
                                <div className="w-10 rounded">
                                    <img src={user?.photoURL} alt="Tailwind-CSS-Avatar-component" />
                                </div>
                            </div>
                            <div>
                                <button className='px-2 py-2 rounded-lg bg-blue-950 text-sm font-bold text-white'>Update Profile</button>
                            </div>
                        </div>
                        <ul className="flex flex-col gap-5 menu">
                            {
                                users?.map((eachUser) => (
                                    <React.Fragment key={eachUser.id}>
                                        {eachUser?.role === "Admin" && (
                                            <>
                                                <li>
                                                    <NavLink to={"/dashboard/home-dashbord"}>
                                                        Dashboard Home
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to={"/dashboard/add-a-camp"}>
                                                        Add Camp
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to={"/dashboard/manage-camps"}>
                                                        Manage Camps
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to={"/dashboard/manage-registered-camps"}>
                                                        Manage Registered Camps
                                                    </NavLink>
                                                </li>
                                            </>
                                        )}
                                        {eachUser?.role === "Participant" && (
                                            <>
                                                <li>
                                                    <NavLink to={"/dashboard/registered-camps"}>
                                                        Registered Camps
                                                    </NavLink>
                                                </li>
                                            </>
                                        )}
                                        {eachUser?.role === "Healthcare Professionals" && (
                                            <>
                                                <li>
                                                    <NavLink to={"/dashboard/home-dashbord"}>
                                                        Dashboard Home
                                                    </NavLink>
                                                </li>
                                            </>
                                        )}
                                    </React.Fragment>
                                ))
                            }
                            {/* shared */}
                            <div className="flex flex-col w-full">
                                <div className="divider"></div>
                            </div>
                            <li>
                                <NavLink to={"/"}>
                                    Home</NavLink>
                            </li>
                        </ul>
                    </div>
                    {/* dashbord content */}
                    <div className="flex-1 drop-shadow-lg my-10">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Dashboard;