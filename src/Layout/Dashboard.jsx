import { Outlet } from 'react-router-dom';
import NavDashboard from './../page/Dashboard/NavDashboard/NavDashboard';
import { useState } from 'react';

const Dashboard = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className="flex relative w-full min-h-screen dashboard-bg overflow-x-hidden">

                {/* Grid lines background */}
                <div className="fixed inset-0 -z-20 bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>

                <div
                    className={`w-16 lg:w-60 fixed left-0 top-0 h-screen bg-textDark rounded-[0%_6rem_0%_0%]
                    ${isOpen ? "w-52 z-50" : "w-16"} `}>

                    <NavDashboard
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                    ></NavDashboard>

                </div>

                <div className="flex-1 w-full ml-16 lg:ml-60 px-3 py-10 lg:px-8 md:px-5 lg:mb-5">

                    <Outlet></Outlet>

                </div>
            </div>
        </>

    );
};

export default Dashboard;