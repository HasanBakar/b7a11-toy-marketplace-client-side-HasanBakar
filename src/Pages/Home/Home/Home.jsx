import { useContext } from "react";
import { AuthContext } from './../../../Providers/AuthProviders/AuthProviders';
import Banner from './../Banner/Banner';
import Gallery from './../Gallery/Gallery';
import ShopByCategory from './../ShopByCategory/ShopByCategory';




const Home = () => {
    const {user} = useContext(AuthContext);
    console.log(user)
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
        </div>
    );
};

export default Home;