import { NavLink,useNavigate } from "react-router-dom";
import { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from './../../Providers/AuthProviders/AuthProviders';
const Register = () => {
    const navigate = useNavigate();
    const [registerError, setRegisterError] = useState("")
    const {createUser,setSellerName, setUser, Update} = useContext(AuthContext);

    const handleRegister = event =>{
        event.preventDefault();
        const form = event?.target;
        const name = form?.name?.value;
        const photo = form?.photo?.value;
        const email = form?.email?.value;
        const password = form?.password?.value;
        setSellerName(name);
        createUser(email, password)
        .then(result=>{
            Update(name, photo)
            .then()
            .catch(error =>{
                setRegisterError(error.message);
                toast.error('Please check your information right or wrong!', {
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
            const u = result.user;
            setUser(u);
            form.reset();
            navigate("/");
            toast("Your registration is complete, now you are a member of our family!", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
        })
        .catch(error =>{
            setRegisterError(error.message);
            toast.error('Please check your information right or wrong!', {
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
        
    }

    return (
      <div className="flex mt-4 justify-center items-center">
         <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800">
	<h1 className="text-2xl font-bold text-center">Please Register</h1>
    <p className="text-red-600 font-bold text-sm">{registerError}</p>
	<form onSubmit={handleRegister} className="space-y-6 ng-untouched ng-pristine ng-valid">
		<div className="space-y-1 text-sm">
			<label htmlFor="name" className="block text-gray-600">Name</label>
			<input type="text" name="name" id="name" placeholder="Your Name" className="w-full border px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-pink-600" required />
		</div>
		<div className="space-y-1 text-sm">
			<label htmlFor="photo" className="block text-gray-600">Photo URL</label>
			<input type="text" name="photo" id="photo" placeholder="Your photo url" className="w-full border px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-pink-600" required />
		</div>
		<div className="space-y-1 text-sm">
			<label htmlFor="email" className="block text-gray-600">Email</label>
			<input type="email" name="email" id="email" placeholder="Your Email Address" className="w-full border px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-pink-600" required />
		</div>
		<div className="space-y-1 text-sm">
			<label htmlFor="password" className="block text-gray-600">Password</label>
			<input type="password" name="password" id="password" placeholder="**********" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 border  focus:border-pink-600" required />
		</div>
		<button type="submit" className="block w-full p-3 text-center rounded-sm text-gray-50 bg-pink-600">Register</button>
	</form>
	<div className="flex items-center pt-4 space-x-1">
		<div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
		<p className="px-3 text-sm text-gray-600">Or</p>
		<div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
	</div>
	<div className="flex justify-center space-x-4">
		
            </div>
            <p className="text-xs font-semibold text-center sm:px-6  text-gray-600">If you  have already an account?
                <NavLink to="/login" rel="noopener noreferrer" className="underline text-pink-800">Please Login</NavLink>
            </p>
        </div>
      <ToastContainer />
      </div>     
    );
};

export default Register;