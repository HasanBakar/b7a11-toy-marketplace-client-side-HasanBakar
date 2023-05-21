/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
/* eslint-disable no-unused-vars */
const ToyCard = ({item}) => {
    const {quantity,rating, price,_id, name,picture} = item;
    return (
        <div>
            <div className="card w-96 glass">
                <figure><img className="py-2 h-52 w-64 px-4" src={picture} alt=" "/></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div>
                        <p>price: ${price} </p>
                        <p>Rating: {rating} </p>
                        <p>Quantity: {quantity} </p>
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