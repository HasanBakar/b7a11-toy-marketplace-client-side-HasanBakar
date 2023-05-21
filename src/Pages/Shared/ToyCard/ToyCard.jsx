/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
/* eslint-disable no-unused-vars */
const ToyCard = ({item}) => {
    const {AvailableQuantity,Ratings, Price,_id, ToyName,picture} = item;
    return (
        <div>
            <div className="card w-96 glass">
                <figure><img className="py-2 px-4" src={picture} alt=" "/></figure>
                <div className="card-body">
                    <h2 className="card-title">{ToyName}</h2>
                    <div>
                        <p>price: ${Price} </p>
                        <p>Rating: {Ratings} </p>
                        <p>Quantity: {AvailableQuantity} </p>
                    </div>
                    <div className="card-actions justify-end">
                    <Link to={`/allToys/${_id}`}>
                    <button className="btn btn-primary">View details</button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;