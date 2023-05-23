/* eslint-disable react/no-unknown-property */
import { useLoaderData } from 'react-router-dom';
import MyToyTableData from './MyToyTableData';
const MyToys = () => {
    const toys = useLoaderData();
    console.log(toys);
    return (
        <div>
         <div className="text-gray-600 body-font">
          <div className="container px-5 py-14 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-4xl font-medium title-font mb-1 text-gray-900">My Toys</h1>
      
       </div>
    <div className="w-full mx-auto overflow-auto">
      <table className="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Price</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Available Quantity</th>
            
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Detail description</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Update</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Delete</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
            </th>
          </tr>
        </thead>
        <tbody>
          {

            toys.map(toy =><MyToyTableData
            key={toy._id}
            toy={toy}
            ></MyToyTableData> )

          }
        </tbody>
      </table>
    </div>
    
  </div>
</div>
        </div>
    );
};

export default MyToys;