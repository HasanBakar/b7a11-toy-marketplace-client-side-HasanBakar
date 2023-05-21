import { useLoaderData } from "react-router-dom";
import ToyCard from './../Shared/ToyCard/ToyCard';
const AllToys = () => {
    const toys = useLoaderData()
    // console.log(toys)
    return (
        <div className="grid md:grid-cols-3 my-6 gap-5">
            {
                toys.map(item =><ToyCard
                key={item._id}
                item={item}
                ></ToyCard> )
            }
        </div>
    );
};

export default AllToys;