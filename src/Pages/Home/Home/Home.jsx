import { useContext } from "react";
import { AuthContext } from './../../../Providers/AuthProviders/AuthProviders';
import Banner from './../Banner/Banner';
import Gallery from './../Gallery/Gallery';




const Home = () => {
    const {user} = useContext(AuthContext);
    console.log(user)
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;