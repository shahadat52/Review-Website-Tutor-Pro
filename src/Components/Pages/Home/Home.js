import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import tutor from "../../../assets/tutor.jpg";
import ServiceLimit from "./ServiceLimit";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/servicesLimit")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://img.freepik.com/free-vector/seminar-concept-illustration_114360-7480.jpg?w=996&t=st=1667866172~exp=1667866772~hmac=86e749076472412d7c8da8f0546d1d4d0fc0c830cfe73a4a8488bf6814f6f3b5")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-blue-600">
              Welcome to <br /> Tutor Pro
            </h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link to="/services" className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 my-10 mx-auto">
        {services.map((service) => (
          <ServiceLimit key={service._id} service={service}></ServiceLimit>
        ))}
      </div>
      <div className="flex justify-center mb-10">
        <Link to="/services" className="btn btn-outline btn-success ">
          View All
        </Link>
        {/* <button className="btn btn-outline btn-success">Success</button> */}
      </div>
    </div>
  );
};

export default Home;
