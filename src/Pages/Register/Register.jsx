import { NavLink } from "react-router-dom";
const Register = () => {
    return (
      <div className="flex mt-4 justify-center items-center">
         <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800">
	<h1 className="text-2xl font-bold text-center">Please Register</h1>
	<form noValidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
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
		<button className="block w-full p-3 text-center rounded-sm text-gray-50 bg-pink-600">Register</button>
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
      </div>


       
    );
};

export default Register;