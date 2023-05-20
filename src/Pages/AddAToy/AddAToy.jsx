import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddAToy = () => {
    const handleAddAToy = event =>{
        event.preventDefault();
        const form = event.target;

        const picture = form.picture.value;
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const subCategoryType = form.subCategoryType.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const item = {picture, name, sellerName, sellerEmail, subCategoryType, price, quantity, rating, description};

        fetch('http://localhost:5000/addAToy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
        .then(res =>res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                        toast("Toy item successfully added!", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                        form.reset();
                 }
        })
    }
    
    return (
        <div className="box-content shadow-xl py-3 bg-slate-100">
            <h1 className="text-center text-3xl pt-8 font-bold">Add a Toy</h1>
            <form onSubmit={handleAddAToy} className="w-1/2 mx-auto">
                <div className="px-8 py-3">
                    <label className="font-semibold" htmlFor="picture">Picture URL of the toy</label>
                    <input type="text" className="w-full pl-3 py-2" name="picture" placeholder="Toy Picture" defaultValue="" required />
                </div>
                <div className="px-8 py-3">
                    <label className="font-semibold" htmlFor="name">Name</label>
                    <input type="text" className="w-full pl-3 py-2" name="name" placeholder="Toy name" defaultValue="" required />
                </div>
                <div className="px-8 py-3">
                    <label className="font-semibold" htmlFor="seller name ">Seller name </label>
                    <input type="text" className="w-full pl-3 py-2" name="sellerName" placeholder="seller name" defaultValue="" required />
                </div>
                <div className="px-8 py-3">
                    <label className="font-semibold" htmlFor="seller email">Seller email</label>
                    <input type="email" className="w-full pl-3 py-2" name="sellerEmail" placeholder="Seller email" defaultValue="" required />
                </div>
                <div className="md:flex w-full">
                    <div className="px-8 py-3">
                        <label className="font-semibold" htmlFor="Sub Category Type">Sub Category Type</label> <br />
                        <input type="text" className="md:w-64 pl-3 py-2" name="subCategoryType" placeholder="Sub Category Type" defaultValue="" required />
                    </div>
                    <div className="px-8 py-3">
                        <label className="font-semibold" htmlFor="Price">Toy price</label> <br />
                        <input type="number" className="md:w-64 pl-3 py-2" name="price" placeholder="457" defaultValue="" required />
                    </div>
                </div>
                <div className="md:flex w-full">
                    <div className="px-8 py-3">
                        <label className="font-semibold" htmlFor="Available quantity">Available quantity</label> <br />
                        <input type="number" className="md:w-64 pl-3 py-2" name="quantity" placeholder="Available quantity" defaultValue="" required />
                    </div>
                    <div className="px-8 py-3">
                        <label className="font-semibold" htmlFor="Rating">Rating</label> <br />
                        <input type="text" className="md:w-64 pl-3 py-2" name="rating" placeholder="457" defaultValue="" required />
                    </div>
                </div>
                <div className="px-8 py-3">
                    <label className="font-semibold" htmlFor="Detail description">Detail description</label><br />
                    <textarea name="description" className="w-64 md:w-full h-32 md:h-44"></textarea>
                </div>
                <input className="ml-8 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" type="submit" value="Add" />
                <ToastContainer />
            </form>
            
        </div>
    );
};

export default AddAToy;