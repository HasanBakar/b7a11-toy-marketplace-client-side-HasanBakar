/* eslint-disable react/no-unknown-property */

const MyToys = () => {
  
    return (
        <div>
         <div className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
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
          <tr className="py-3">
            <td className="px-4 py-3">Start</td>
            <td className="px-4 py-3">Start</td>
            <td className="px-4 py-3">Start</td>
            <td className="px-4 py-3">
              <img className="w-8 h-8" src="https://i.ibb.co/rpg5ZC8/Edit.png" alt="" />
            </td>
            <td className="px-4 py-3">
              <img className="w-8 h-8" src="https://i.ibb.co/jrHRct2/delete.png" alt="" />
            </td>
          </tr>
          
        </tbody>
      </table>
    </div>
    
  </div>
</div>
        </div>
    );
};

export default MyToys;