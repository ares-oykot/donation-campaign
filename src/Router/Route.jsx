import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import Details from "../Components/Details/Details";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/donation",
                element: <Donation></Donation>,
                loader: () => fetch('../../public/fakeData.json')
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>
            },
            {
                path: "/details/:id",
                element: <Details></Details>,
                loader: () => fetch('../../public/fakeData.json')
            }
            
        ]
    }
])

export default router;