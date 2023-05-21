import Banner from './../Banner/Banner';
import Gallery from './../Gallery/Gallery';
import ShopByCategory from './../ShopByCategory/ShopByCategory';
import Statistics from './../Statistics/Statistics';
const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Statistics></Statistics>
            <ShopByCategory></ShopByCategory>
        </div>
    );
};

export default Home;