import { Link } from "react-router-dom";
const ErrorPage = () => {
    return (
        <div className="grid h-screen px-4 bg-white place-content-center">
  <div className="text-center">
    <div>
      <img src="https://i.ibb.co/c1g7ryt/404-animation.gif" alt="" />
    </div>

    <p className="mt-4 text-gray-500">We can not find that page.</p>
    <p className="my-2 text-fuchsia-200">The page you are looking for seems to have wandered off to an imaginary land of toys. </p>

    <Link
      to="/"
      className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
    >
      Go Back Home
    </Link>
  </div>
</div>
    );
};

export default ErrorPage;