import { NavLink, Outlet } from 'react-router-dom';
import logo from '../assets/images/icon/Logo-removebg.png'
const Dashboard = () => {
    // let isAdmin;
    // let isParticipant;
    // let isDoctor;
    return (
        <div className='bg-[#f3eee4]'>
            <div className="bg-white p-2 drop-shadow-md">
                <div className='flex items-center gap-4 ml-10'>
                    <div>
                        <img className="w-16" src={logo} alt="" />
                    </div>
                    <div>
                        <h2 className='text-3xl font-bold text-[#2b355c]'>Amelia Medical Camp</h2>
                    </div>
                </div>
            </div>
            <div className='flex gap-10'>
                <div className="bg-white w-2/12 min-h-screen p-3 drop-shadow-md rounded-t-md">
                    <div className=''>
                        {/* <ul className="flex flex-col gap-5 menu text-blue-900">
                            {
                                isAdmin && (
                                    <>
                                        <li>
                                            <NavLink to={"/dashboard/add-a-camp"}>
                                                Admin Home
                                            </NavLink>
                                        </li>
                                    </>
                                )
                            }
                            {
                                isParticipant && (
                                    <>
                                        <li>
                                            <NavLink to={"/dashboard/userHome"}>
                                                User Home
                                            </NavLink>
                                        </li>

                                    </>
                                )
                            }
                            {
                                isDoctor && (
                                    <>

                                    </>
                                )
                            }
                        </ul> */}
                        <ul className='flex flex-col gap-5 menu font-bold text-lg'>
                            <li>
                                <NavLink to={"/dashboard/add-a-camp"}>
                                    Add Product
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/dashboard/manage-camps"}>
                                    Manage Camps
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex-1 drop-shadow-lg my-10">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;