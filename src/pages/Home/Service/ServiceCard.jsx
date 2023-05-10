import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  const { img, title, price } = service;

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
          <button className="cursor-pointer p-2"><FaArrowRight className="text-xl text-red-400 "></FaArrowRight></button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
