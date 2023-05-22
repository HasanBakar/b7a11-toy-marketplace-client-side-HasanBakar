import { useLoaderData } from "react-router-dom";
import TableData from './TableData';
import { useState,useEffect } from "react";

const AllToys = () => {
    const toys = useLoaderData()
    const [searchControl, setSearchControl] = useState(toys);
    const [searchText, setSearchText] = useState("");

     useEffect(()=>{
       fetch(`https://b7a11-toy-marketplace-server-side-hasan-bakar.vercel.app/allToy/search/${searchText}`)
      .then(res => res.json())
      .then(data=>setSearchControl(data))

     },[searchControl,searchText])

    const handleSearch = e =>{
      e.preventDefault();
      const tName = e.target.text.value;
        setSearchText(tName)
    }
    return (
        <div>
            <h1 className="sm:text-3xl text-4xl text-center font-medium title-font mb-1 text-gray-900">All Toy in a Table</h1>
            <form onSubmit={handleSearch} className="flex md:mx-56">
              <input className="w-full border px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-pink-600" type="text" placeholder="Search with Toy name" name="text" />
              <button type="submit" className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Search</button>
            </form>
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
            searchControl.map(item=><TableData
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