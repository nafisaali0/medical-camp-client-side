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
        ],
    },
    {
        path: 'dashboard',
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
            // user
            

            // addmin routes
            {
                path: "add-a-camp",
                element: <AddCamps></AddCamps>,
            },
            {
                path: "manage-camps",
                element:<ManageCamps></ManageCamps>,
            },

            //doctor 

        ]
    }
]);