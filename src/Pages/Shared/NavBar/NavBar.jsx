/* eslint-disable react/no-unknown-property */
import "./NavBar.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink} from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './../../../Providers/AuthProviders/AuthProviders';

const NavBar = () => {
    
    const {user,logOut} = useContext(AuthContext);
    const dName = user?.displayName || "Abu Bakar";
    const photo = user?.photoURL || "https://loremflickr.com/320/240";
    // const photo = user.dis 

    const handleLogOut = () =>{
        logOut()
        .then(
            toast("You are successfully logout!", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        })
        )
        .catch(error=>{
            console.log(error?.message);
        })
    }
    
    return (
<div className="navbar bg-base-100">
    <div className="navbar-start">
        <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/allToys">All Toys</NavLink></li>
        <li><NavLink to="/myToys">My Toys</NavLink></li>
        <li><NavLink to="/addAToy">Add A Toy</NavLink></li>
        <li><NavLink to="/blogs">Blogs</NavLink></li>
        </ul>
        </div>
        <img src="toys.png" className="h-10 w-10" alt="" />
        <NavLink className="btn btn-ghost normal-case text-xl">ToyQuest</NavLink>
    </div>
    <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/allToys">All Toys</NavLink></li>
        <button>
            {user ?
            <li><NavLink to="/myToys">My Toys</NavLink></li>
            
            : ""}
        </button>
        <button>
            {user ?
            <li><NavLink to="/addAToy">Add A Toy</NavLink></li>
            : ""}
        </button>
       
        <li><NavLink to="/blogs">Blogs</NavLink></li>
        </ul>
    </div>
    <div className="navbar-end">
        
        
        <button>
           {
            user ? <>
        <button title={dName} className="avatar">
            <span className="w-6 h-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={photo} />
            </span>
        </button>
        <button onClick={handleLogOut} className="ml-4">
            LogOut
        </button>
        </> : <NavLink className="py-3 px-4 ml-2 rounded-lg" to="/login" >Login</NavLink>
           }
        </button>
    </div>
    <ToastContainer />
</div>
    );
};

export default NavBar;