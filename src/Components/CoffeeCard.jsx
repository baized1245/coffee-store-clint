import { useLoaderData } from "react-router-dom";

const CoffeeCard = ({ coffee }) => {

    const { name, quantity, supplier, test, category, details, photo, } = coffee;

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="flex justify-between w-full pr-4">
                <div className="ml-4">
                <h2 className="card-title">Name: {name}</h2>
                <p>quantity: {quantity}</p>
                <p>supplier: {supplier}</p>
                <p>test: {test}</p>
                <p>category: {category}</p>
                <p>details: {details}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-4">
                        <button className="btn bg-sky-400">View</button>
                        <button className="btn bg-orange-400">Edit</button>
                        <button className="btn bg-red-800">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;