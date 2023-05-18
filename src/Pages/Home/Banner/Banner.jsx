import { NavLink } from 'react-router-dom';
const Banner = () => {
    return (
        <div className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 pb-5 pt-10 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded" alt="hero" src="https://i.ibb.co/VSSdCGr/Banner.jpg"/>
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to our magical ToyQuest,<br /> Where Dreams Soar and <br /> Play Knows No Limits!
                    </h1>
                    <p className="mb-8 leading-relaxed">Unleash the Magic of Play at our ToyQuest!</p>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            <NavLink to="/register" >Become a member</NavLink>
                        </button>
                        <button className="ml-4 inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-800 rounded text-lg">Shop instantly</button>
                    </div>
                    </div>
                </div>
        </div>
    );
};

export default Banner;