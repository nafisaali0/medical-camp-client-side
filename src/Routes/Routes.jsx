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
import AdminRegister from './../page/Dashboard/AdminRegister/AdminRegister';
import HomeDashboard from './../page/Dashboard/HomeDashboard/HomeDashboard';
import UpdateCamp from './../page/Dashboard/UpdateCamp/UpdateCamp';
import DetailCamp from './../page/Home/DetailCamp/DetailCamp';
import AvailableCamps from './../page/AvailableCamps/AvailableCamps';


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
            // user
            {
                path: "home-dashbord",
                element: <HomeDashboard></HomeDashboard>,
            },

            // addmin routes
            {
                path: "add-a-camp",
                element: <AddCamps></AddCamps>,
            },
            {
                path: "manage-camps",
                element:<ManageCamps></ManageCamps>,
            },
            {
                path: "manage-registered-camps",
                element:<AdminRegister></AdminRegister>,
            },
            {
                path: "update-camp/:campId",
                element:<UpdateCamp></UpdateCamp>,
                loader: ({ params }) => fetch(`http://localhost:5000/camp/${params.campId}`)
            },

            //doctor 

        ]
    }
]);