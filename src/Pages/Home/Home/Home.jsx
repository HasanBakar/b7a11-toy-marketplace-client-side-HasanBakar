import Banner from './../Banner/Banner';
import Gallery from './../Gallery/Gallery';
import ShopByCategory from './../ShopByCategory/ShopByCategory';
import Statistics from './../Statistics/Statistics';
import Feedback from './Feedback/Feedback';
const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Statistics></Statistics>
            <ShopByCategory></ShopByCategory>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;