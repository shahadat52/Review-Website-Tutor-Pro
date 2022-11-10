import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://review-website-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full mx-10 my-10">
      {services.map((service) => (
        <Service key={service._id} service={service}></Service>
      ))}
    </div>
  );
};

export default Services;
