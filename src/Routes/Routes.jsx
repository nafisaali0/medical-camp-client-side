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
import UpdateCamp from './../page/Dashboard/UpdateCamp/UpdateCamp';
import DetailCamp from './../page/Home/DetailCamp/DetailCamp';
import AvailableCamps from './../page/AvailableCamps/AvailableCamps';
import RegisteredCamps from './../page/Dashboard/RegisteredCamps/RegisteredCamps';
import ManageRegisterCamps from './../page/Dashboard/ManageRegisterCamps/ManageRegisterCamps';
import Payment from "../page/Dashboard/Payment/Payment";
import ParticipantPaymentHistory from './../page/Dashboard/ParticipantPaymentHistory/ParticipantPaymentHistory';
import FeedbackAndRatings from './../page/Dashboard/FeedbackAndRatings/FeedbackAndRatings';
import CampRegistration from "../page/CampRegistration/CampRegistration";
import HomeDashboard from "../page/Dashboard/HomeDashboard/HomeDashboard";
import CreateCamp from "../page/Dashboard/Admin/CreateCamp/CreateCamp";
import EditCamp from "../page/Dashboard/Admin/EditCamp/EditCamp";
import CampHub from "../page/Dashboard/Admin/Manage/CampHub/CampHub";
import AllUsers from "../page/Dashboard/Admin/Manage/AllUsers/AllUsers";
// import Loader from './../components/Loader';
// import ProfessionalProfile from './../page/Dashboard/ProfessionalProfile/ProfessionalProfile';
// import DefaultProfile from './../page/Dashboard/DefaultProfile/DefaultProfile';
import EnrollCamps from './../page/Dashboard/Admin/Manage/EnrollCamps/EnrollCamps';

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
            //     path: "loader",
            //     element: <Loader />,
            // },
            {
                path: "camp-details/:campId",
                element: <PrivateRoutes><DetailCamp></DetailCamp></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://medical-camp-server-seven.vercel.app/camp/${params.campId}`)
            },
            {
                path: "available-camps",
                element: <PrivateRoutes><AvailableCamps></AvailableCamps></PrivateRoutes>,
            },
            {
                path: "camp-registration/:campId",
                element: <PrivateRoutes><CampRegistration></CampRegistration></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://medical-camp-server-seven.vercel.app/camp/${params.campId}`)
            },
        ],
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [

            {
                path: "/dashboard",
                element: <PrivateRoutes><HomeDashboard /></PrivateRoutes>,
            },

            // participant routes
            {
                path: "registered-camps",
                element: <PrivateRoutes><RegisteredCamps /></PrivateRoutes>,
            },
            {
                path: "payment/:id",
                element: <PrivateRoutes><Payment /></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://medical-camp-server-seven.vercel.app/registerCamps/${params.id}`)
            },
            {
                path: "payment-history",
                element: <PrivateRoutes><ParticipantPaymentHistory /></PrivateRoutes>,
            },
            {
                path: "feedback-and-ratings",
                element: <PrivateRoutes><FeedbackAndRatings /></PrivateRoutes>,
            },

            // addmin routes
            {
                path: "add-a-camp",
                element: <PrivateRoutes><AddCamps /></PrivateRoutes>,
            },
            {
                path: "create-camp",
                element: <PrivateRoutes><CreateCamp /></PrivateRoutes>,
            },
            {
                path: "edit-camp",
                element: <PrivateRoutes><EditCamp /></PrivateRoutes>,
                // loader: ({ params }) => fetch(`https://medical-camp-server-seven.vercel.app/camp/${params.campId}`)
            },
            {
                path: "manage-camp-hub",
                element: <PrivateRoutes><CampHub /></PrivateRoutes>,
            },
            {
                path: "manage-Users",
                element: <PrivateRoutes><AllUsers /></PrivateRoutes>,
            },
            {
                path: "manage-enroll-camps",
                element: <PrivateRoutes><EnrollCamps /></PrivateRoutes>,
            },
            {
                path: "manage-camps",
                element: <PrivateRoutes><ManageCamps /></PrivateRoutes>,
            },
            {
                path: "manage-registered-camps",
                element: <PrivateRoutes><ManageRegisterCamps /></PrivateRoutes>,
                loader: () => fetch('https://medical-camp-server-seven.vercel.app/registerCamps')
            },
            {
                path: "update-camp/:campId",
                element: <PrivateRoutes><UpdateCamp /></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://medical-camp-server-seven.vercel.app/camp/${params.campId}`)
            },

        ]
    }
]);