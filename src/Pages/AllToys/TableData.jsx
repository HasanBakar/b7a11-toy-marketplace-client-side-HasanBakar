/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
const TableData = ({item}) => {
  const { quantity, subCategoryType, price, name, sellerName, _id } = item;
  return (
    <tr className="shadow-sm my-2 py-2">
      <td className="px-4 py-3">{sellerName}</td>
      <td className="px-4 py-3">{name}</td>
      <td className="px-4 py-3">{subCategoryType}</td>
      <td className="px-4 py-3">{quantity}</td>
      <td className="px-4 py-3"> ${price}</td>
      <td><Link to={`/allToys/${_id}`}>
             <button className="btn btn-primary">View details</button>
          </Link>
      </td>
    </tr>
  );
};

export default TableData;