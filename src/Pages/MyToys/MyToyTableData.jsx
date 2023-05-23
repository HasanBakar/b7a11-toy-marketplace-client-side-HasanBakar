/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const MyToyTableData = ({toy}) => {
    const {price, quantity,_id, description} = toy;
    const handleUpdate = toyId =>{
        console.log("*******update***********",toyId);
    }
    const handleDelete = toyId =>{
        console.log("*******delete***********",toyId);
        fetch(`http://localhost:5173/myToys/${toyId}`, {method: 'DELETE',
      headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toyId)
      })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    return (
        <tr className="py-3">
            <td className="px-4 py-3">{price}</td>
            <td className="px-4 py-3">{quantity}</td>
            <td className="px-4 py-3">{description}</td>
            <td className="px-4 py-3">
              <img onClick={() => handleUpdate(_id)} className="w-8 h-8" src="https://i.ibb.co/rpg5ZC8/Edit.png" alt="" />
            </td>
            <td className="px-4 py-3">
              <img onClick={() => handleDelete(_id)}  className="w-8 hover:bg-orange-800" src="https://i.ibb.co/jrHRct2/delete.png" alt="" />
            </td>
          </tr>
    );
};

export default MyToyTableData;