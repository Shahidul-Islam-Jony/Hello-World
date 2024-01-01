import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Code from "../pages/Code/Code";


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
                        path:'code',
                        element:<Code></Code>
                    }
                ]
            }
        ]
    }
])

export default router;