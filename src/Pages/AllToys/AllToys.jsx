import { useLoaderData } from "react-router-dom";
import TableData from './TableData';

const AllToys = () => {
    const toys = useLoaderData()
    // console.log(toys)
    return (
        <div>
            <h1 className="sm:text-3xl text-4xl text-center font-medium title-font mb-1 text-gray-900">All Toy in a Table</h1>
              <div className="w-full mt-5 mx-auto overflow-auto">
      <table className="table-auto w-full mx-auto text-left whitespace-no-wrap">
        <thead>
          <tr>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Seller</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Toy Name</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Sub-category</th>
            
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Available Quantity</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Price</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                View details
            </th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
            </th>
          </tr>
        </thead>
        <tbody>
          {
            toys.map(item=><TableData
            key={item._id}
            item={item}
            ></TableData>)
          }
        </tbody>
      </table>
    </div>
        </div>
    );
};

export default AllToys;