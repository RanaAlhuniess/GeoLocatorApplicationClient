import {createBrowserRouter} from "react-router-dom";
import NotFound from "./views/NotFound.view";
import HomeView from "./views/home.view";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeView/>
    },
    {
        path: "*",
        element: <NotFound/>
    }
])

export default router;