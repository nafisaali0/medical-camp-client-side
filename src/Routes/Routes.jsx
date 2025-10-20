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
import HomeDashboard from './../page/Dashboard/HomeDashboard/HomeDashboard';
import UpdateCamp from './../page/Dashboard/UpdateCamp/UpdateCamp';
import DetailCamp from './../page/Home/DetailCamp/DetailCamp';
import AvailableCamps from './../page/AvailableCamps/AvailableCamps';
import RegisteredCamps from './../page/Dashboard/RegisteredCamps/RegisteredCamps';
import ManageRegisterCamps from './../page/Dashboard/ManageRegisterCamps/ManageRegisterCamps';
import OrganizerProfile from "../page/Dashboard/OrganizerProfile/OrganizerProfile";
import ParticipantProfile from './../page/Dashboard/ParticipantProfile/ParticipantProfile';
import ProfessionalProfile from './../page/Dashboard/ProfessionalProfile/ProfessionalProfile';
import DefaultProfile from './../page/Dashboard/DefaultProfile/DefaultProfile';
import Payment from "../page/Dashboard/Payment/Payment";
import ParticipantPaymentHistory from './../page/Dashboard/ParticipantPaymentHistory/ParticipantPaymentHistory';
import FeedbackAndRatings from './../page/Dashboard/FeedbackAndRatings/FeedbackAndRatings';
// import HealthCheck from './../page/HealthCheck/HealthCheck';
import BloodPressureCheck from './../page/BloodPressureCheck/BloodPressureCheck';




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
            // {
            //     path: "/healthCheck",
            //     element: <HealthCheck></HealthCheck>,
            // },
            {
                path: "/bloodPressureCheck",
                element: <PrivateRoutes><BloodPressureCheck></BloodPressureCheck></PrivateRoutes>,
            },
            {
                path: "camp-details/:campId",
                element: <PrivateRoutes><DetailCamp></DetailCamp></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://medical-camp-server-seven.vercel.app/camp/${params.campId}`)
            },
            {
                path: "available-camps",
                element: <PrivateRoutes><AvailableCamps></AvailableCamps></PrivateRoutes>,
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
            {
                path: "payment/:id",
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://medical-camp-server-seven.vercel.app/registerCamps/${params.id}`)
            },
            {
                path: "payment-history",
                element: <ParticipantPaymentHistory></ParticipantPaymentHistory>,
            },
            {
                path: "feedback-and-ratings",
                element: <FeedbackAndRatings></FeedbackAndRatings>,
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
                loader: () => fetch('https://medical-camp-server-seven.vercel.app/registerCamps')
            },
            {
                path: "update-camp/:campId",
                element: <UpdateCamp></UpdateCamp>,
                loader: ({ params }) => fetch(`https://medical-camp-server-seven.vercel.app/camp/${params.campId}`)
            },

            //doctor 
            {
                path: "professional-profile",
                element: <ProfessionalProfile></ProfessionalProfile>,
            },
            //undefined role or google user
            {
                path: "default-Profile",
                element: <DefaultProfile></DefaultProfile>,
            },

        ]
    }
]);