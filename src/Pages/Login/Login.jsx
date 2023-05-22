import { NavLink,useNavigate,useLocation} from "react-router-dom";
import { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from './../../Providers/AuthProviders/AuthProviders';
const Login = () => {
    const road = useLocation();
    const [logError, setLogError] = useState("");
    const rightRoad = road?.state?.from?.pathname || "/";

    const navigate = useNavigate();
    const {logIn, setSellerName, setUser,googleSigIn} = useContext(AuthContext)
    const handleLogin = event =>{
        event.preventDefault();
        const form = event?.target;
        const email = form?.email?.value;
        const password = form?.password?.value;
        logIn(email, password)
        .then(result=>{
            setUser(result?.user);
            setSellerName(result?.user?.displayName);
            navigate(rightRoad,{replace:true});
            form?.reset();
            toast("You are successfully login with email and password!", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
        })
        .catch(error=>{
            setLogError(error.message);
             toast.error('Please check your email and password right or wrong!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        })
        // console.log(email, password);
    }
    const handleWithGoogle = () =>{
        googleSigIn()
        .then(result=>{
                const user = result?.user;
                setUser(user);
                setSellerName(user?.displayName)
                navigate(rightRoad,{replace:true});
                toast("You are successfully login with Google!", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        })
        })
        .catch(error =>{
            setLogError(error?.message);
        })
    }

    return (
      <div className="flex mt-4 justify-center items-center">
         <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800">
	<h1 className="text-2xl font-bold text-center">Please Login</h1>
    <p className="text-red-600 font-bold text-2xl">{logError}</p>
	<form onSubmit={handleLogin} className="space-y-6 ng-untouched ng-pristine ng-valid">
		<div className="space-y-1 text-sm">
			<label htmlFor="email" className="block text-gray-600">Email</label>
			<input type="text" name="email" id="gmail" placeholder="Your Email Address" className="w-full border px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-pink-600" />
		</div>
		<div className="space-y-1 text-sm">
			<label htmlFor="password" className="block text-gray-600">Password</label>
			<input type="password" name="password" id="password" placeholder="**********" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 border  focus:border-pink-600" />
		</div>
		<button type="submit" className="block w-full p-3 text-center rounded-sm text-gray-50 bg-pink-600">Login</button>
	</form>
	<div className="flex items-center pt-4 space-x-1">
		<div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
		<p className="px-3 text-sm text-gray-600">Login with google accounts</p>
		<div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
	</div>
	<div onClick={handleWithGoogle} className="flex justify-center space-x-4">
		<button aria-label="Log in with Google" className="p-3 rounded-sm">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-12 h-12 fill-gray-900">
				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
			</svg>
		</button>
            </div>
            <p className="text-xs font-semibold text-center sm:px-6  text-gray-600">Do not have an account?
                <NavLink to="/register" rel="noopener noreferrer" className="underline text-pink-800">Please Register</NavLink>
            </p>
        </div>
        <ToastContainer />
      </div>
    );
};

export default Login;