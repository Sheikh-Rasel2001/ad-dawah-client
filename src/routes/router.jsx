import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Loading from "../component/Loading";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        hydrateFallbackElement: <Loading></Loading>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/projects',
                loader: () => fetch('projects.json'),
                element: <Projects></Projects>
            }
        ]
    } // main layout end here
])

export default router