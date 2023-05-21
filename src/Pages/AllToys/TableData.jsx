/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
const TableData = ({item}) => {
  const {_id} = item;
  return (
    <tr className="shadow-sm my-2 py-2">
      <td className="px-4 py-3">Start</td>
      <td className="px-4 py-3">Start</td>
      <td className="px-4 py-3">Start</td>
      <td className="px-4 py-3">Start</td>
      <td className="px-4 py-3">Start</td>
      <td><Link to={`/allToys/${_id}`}>
             <button className="btn btn-primary">View details</button>
          </Link>
      </td>
    </tr>
  );
};

export default TableData;