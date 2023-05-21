/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import { Navigate,useLocation } from "react-router-dom";
import { AuthContext } from './../Providers/AuthProviders/AuthProviders';
const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user} = useContext(AuthContext)
    if(user){
        return children;
    }
    return <>
        <Navigate state={{from:location}} to="/login" replace ></Navigate>
    </>
};

export default PrivateRoute;