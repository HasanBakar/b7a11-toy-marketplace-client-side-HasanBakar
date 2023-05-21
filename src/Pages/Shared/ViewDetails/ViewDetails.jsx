import { useLoaderData } from "react-router-dom";
const ViewDetails = () => {
    const singleToy = useLoaderData();
    console.log(singleToy)
    return (
        <div>
            <h1>view details</h1>
        </div>
    );
};

export default ViewDetails;