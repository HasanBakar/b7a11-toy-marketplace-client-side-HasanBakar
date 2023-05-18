import {
  createBrowserRouter
} from "react-router-dom";
import MainLayout from './../Layouts/MainLayout/MainLayout';
import Home from './../Pages/Home/Home/Home';
import ErrorPage from './../Pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        }
    ]
  },
  {
    path:"*",
    element:<ErrorPage></ErrorPage>
  }
]);




export default router;