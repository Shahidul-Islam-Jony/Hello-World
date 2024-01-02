import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Code from "../pages/Code/Code";
import ResponsiveNav from "../pages/Navbar/ResponsiveNav/ResponsiveNav";
import TransparentLogin from "../pages/Login/TransparentLogin/TransparentLogin";


const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                children:[
                    {
                        path:'responsive-nav',
                        element:<ResponsiveNav></ResponsiveNav>
                    },
                    {
                        path:'code',
                        element:<Code></Code>
                    },
                    {
                        path:'transparent-login',
                        element:<TransparentLogin></TransparentLogin>
                    }
                ]
            }
        ]
    }
])

export default router;