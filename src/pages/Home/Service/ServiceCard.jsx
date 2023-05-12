import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const {_id, img, title, price } = service;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body ">
        <div className="flex justify-between items-end">
        <div>
          <h2 className="card-title text-2xl font-bold">{title}</h2>
          <p className="font-semibold text-xl text-red-400 mt-5">Price: ${price}</p>
        </div>
        <div className="card-actions">
          <Link to={`/checkout/${_id}`}>
          <button className="cursor-pointer p-2"><FaArrowRight className="text-xl text-red-400 "></FaArrowRight></button></Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
