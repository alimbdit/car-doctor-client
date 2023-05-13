import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://car-doctor-server-beta-nine.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-red-400 mb-2">Service</h2>
        <h1 className="text-5xl font-bold ">Our Service Area</h1>
        <p className="py-6">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don&apos;t look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          services && services.map(service => <ServiceCard 
            key={service._id}
            service={service}
            ></ServiceCard>)  
        }
        </div>
    </div>
  );
};

export default Service;
