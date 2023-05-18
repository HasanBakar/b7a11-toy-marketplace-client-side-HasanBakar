/* eslint-disable react/no-unknown-property */
import "./NavBar.css";
import { NavLink } from "react-router-dom";
const NavBar = () => {
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
        <li><NavLink to="/myToys">My Toys</NavLink></li>
        <li><NavLink to="/addAToy">Add A Toy</NavLink></li>
        <li><NavLink to="/blogs">Blogs</NavLink></li>
        </ul>
    </div>
    <div className="navbar-end">
        <button>
            profile
        </button>
        <button>
            <NavLink className="py-3 px-4 rounded-lg" to="/login" >Login</NavLink>
        </button>
    </div>
</div>
    );
};

export default NavBar;