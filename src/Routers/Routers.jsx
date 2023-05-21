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
import PrivateRoute from './PrivateRoute';
import ViewDetails from './../Pages/Shared/ViewDetails/ViewDetails';

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
            element:<AllToys></AllToys>,
            loader: () => fetch("http://localhost:5000/allToys")
        },
        {
            path:"/allToys/:id",
            element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/allToys/${params.id}`)
        },
        {
            path:"/myToys",
            element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
            path:"/addAToy",
            element:<PrivateRoute><AddAToy></AddAToy></PrivateRoute>
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