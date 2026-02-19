import { createBrowserRouter } from "react-router";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import HomeLayout from "../Layouts/HomeLayout/HomeLayout";
import Home from "../Pages/ErrorPage/Home";

const router = createBrowserRouter([
    {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            path:'/',
            element:<Home></Home>,
        },
        
    ]
  },
])
export default router;