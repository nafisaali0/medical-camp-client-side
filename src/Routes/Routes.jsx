import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../page/Home/Home/Home";
import ErrorPage from './../page/ErrorPage/ErrorPage';
import Signin from './../page/Signin/Signin';
import SignUp from "../page/SignUp/SignUp";
import PrivateRoutes from './PrivateRoutes';
import Dashboard from "../Layout/Dashboard";
import DetailsCamp from '../page/DetailsCamp/DetailsCamp';
import AvailableCamps from './../page/AvailableCamps/AvailableCamps';
import Payment from "../page/Dashboard/Payment/Payment";
import ParticipantPaymentHistory from './../page/Dashboard/ParticipantPaymentHistory/ParticipantPaymentHistory';
import FeedbackAndRatings from './../page/Dashboard/FeedbackAndRatings/FeedbackAndRatings';
import CreateCamp from "../page/Dashboard/Admin/CreateCamp/CreateCamp";
import EditCamp from "../page/Dashboard/Admin/EditCamp/EditCamp";
import CampHub from "../page/Dashboard/Admin/Manage/CampHub/CampHub";
import AllUsers from "../page/Dashboard/Admin/Manage/AllUsers/AllUsers"
import EnrollCamps from './../page/Dashboard/Admin/Manage/EnrollCamps/EnrollCamps';
import MyCamps from "../page/Dashboard/Participant/MyCamps/MyCamps";
import HomeDashboard from "../page/Dashboard/HomeDashboard/HomeDashboard/HomeDashboard";
import CampEnrollment from "../page/CampEnrollment/CampEnrollment";

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
                path: "available-camps",
                element: <PrivateRoutes><AvailableCamps></AvailableCamps></PrivateRoutes>,
            },
            {
                path: "camp-details/:campId",
                element: <PrivateRoutes><DetailsCamp/></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://medical-camp-server-seven.vercel.app/camp/${params.campId}`)
            },
            // --old
            {
                path: "camp-enrollment/:campId",
                element: <PrivateRoutes><CampEnrollment /></PrivateRoutes>,
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
                path: "my-camps",
                element: <PrivateRoutes><MyCamps /></PrivateRoutes>,
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
                path: "create-camp",
                element: <PrivateRoutes><CreateCamp /></PrivateRoutes>,
            },
            {
                path: "edit-camp/:campId",
                element: <PrivateRoutes><EditCamp /></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://medical-camp-server-seven.vercel.app/camp/${params.campId}`)
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

        ]
    }
]);