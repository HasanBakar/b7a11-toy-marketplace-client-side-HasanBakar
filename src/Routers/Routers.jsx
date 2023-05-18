import {
  createBrowserRouter
} from "react-router-dom";
import MainLayout from './../Layouts/MainLayout/MainLayout';
import Home from './../Pages/Home/Home/Home';
import ErrorPage from './../Pages/ErrorPage/ErrorPage';
import AllToys from './../Pages/AllToys/AllToys';
import MyToys from './../Pages/MyToys/MyToys';
import AddAToy from './../Pages/AddAToy/AddAToy';
import Blogs from './../Pages/Blogs/Blogs';
import Login from './../Pages/Login/Login';
import Register from './../Pages/Register/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/allToys",
            element:<AllToys></AllToys>
        },
        {
            path:"/myToys",
            element:<MyToys></MyToys>
        },
        {
            path:"/addAToy",
            element:<AddAToy></AddAToy>
        },
        {
            path:"/blogs",
            element:<Blogs></Blogs>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>
        }
    ]
  },
  {
    path:"*",
    element:<ErrorPage></ErrorPage>
  }
]);




export default router;