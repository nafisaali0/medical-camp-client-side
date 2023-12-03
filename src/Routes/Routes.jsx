import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../page/Home/Home/Home";
import ErrorPage from './../page/ErrorPage/ErrorPage';
import Signin from './../page/Signin/Signin';
import SignUp from "../page/SignUp/SignUp";
import PrivateRoutes from './PrivateRoutes';
import Dashboard from "../Layout/Dashboard";
import AddCamps from './../page/Dashboard/AddCamps/AddCamps';
import ManageCamps from "../page/Dashboard/ManageCamps/ManageCamps";
// import AdminRegister from './../page/Dashboard/AdminRegister/AdminRegister';
import HomeDashboard from './../page/Dashboard/HomeDashboard/HomeDashboard';
import UpdateCamp from './../page/Dashboard/UpdateCamp/UpdateCamp';
import DetailCamp from './../page/Home/DetailCamp/DetailCamp';
import AvailableCamps from './../page/AvailableCamps/AvailableCamps';
import RegisteredCamps from './../page/Dashboard/RegisteredCamps/RegisteredCamps';
import ManageRegisterCamps from './../page/Dashboard/ManageRegisterCamps/ManageRegisterCamps';
import OrganizerProfile from "../page/Dashboard/OrganizerProfile/OrganizerProfile";
// import UpdateProfile from './../page/Dashboard/UpdateProfile/UpdateProfile';
import ParticipantProfile from './../page/Dashboard/ParticipantProfile/ParticipantProfile';
import ProfessionalProfile from './../page/Dashboard/ProfessionalProfile/ProfessionalProfile';
import DefaultProfile from './../page/Dashboard/DefaultProfile/DefaultProfile';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "signin",
                element: <Signin></Signin>,
            },
            {
                path: "signup",
                element: <SignUp></SignUp>,
            },
            {
                path: "camp-details/:campId",
                element: <DetailCamp></DetailCamp>,
                loader: ({ params }) => fetch(`http://localhost:5000/camp/${params.campId}`)
            },
            {
                path: "available-camps",
                element: <AvailableCamps></AvailableCamps>,
            },
        ],
    },
    {
        path: 'dashboard',
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
            // participant routes
            {
                path: "home-dashbord",
                element: <HomeDashboard></HomeDashboard>,
            },
            {
                path: "participant-profile",
                element: <ParticipantProfile></ParticipantProfile>,
            },
            {
                path: "registered-camps",
                element: <RegisteredCamps></RegisteredCamps>,
            },
            // addmin routes
            {
                path: "organizer-profile",
                element: <OrganizerProfile></OrganizerProfile>,
            },
            {
                path: "add-a-camp",
                element: <AddCamps></AddCamps>,
            },
            {
                path: "manage-camps",
                element: <ManageCamps></ManageCamps>,
            },
            {
                path: "manage-registered-camps",
                element: <ManageRegisterCamps></ManageRegisterCamps>,
                loader: () => fetch('http://localhost:5000/registerCamps')
            },
            {
                path: "update-camp/:campId",
                element: <UpdateCamp></UpdateCamp>,
                loader: ({ params }) => fetch(`http://localhost:5000/camp/${params.campId}`)
            },

            //doctor 
            {
                path: "professional-profile",
                element: <ProfessionalProfile></ProfessionalProfile>,
            },
            //undefined or google user
            {
                path: "default-Profile",
                element: <DefaultProfile></DefaultProfile>,
            },


        ]
    }
]);