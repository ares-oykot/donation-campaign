import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Details from "../Components/Details/Details";
import Error from "../Pages/Error/Error";
import Statistics from "../Pages/Statistics/Statistics";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/donation",
                element: <Donation></Donation>,
                loader: () => fetch('/fakeData.json')
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>
            },
            {
                path: "/details/:id",
                element: <Details></Details>,
                loader: () => fetch('/fakeData.json')
            }
            
        ]
    }
])

export default router;