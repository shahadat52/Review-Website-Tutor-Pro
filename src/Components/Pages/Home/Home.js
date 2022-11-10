import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import tutor from "../../../assets/tutor.jpg";
import useTitle from "../../../Hooks/useTitle";
import ServiceLimit from "./ServiceLimit";

const Home = () => {
  useTitle("Home");
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
            <h1 className="mb-5 text-5xl font-bold text-cyan-400">
              Welcome to <br /> Tutor Pro
            </h1>
            <p className="mb-5 text-cyan-400">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link to="/services" className="btn bg-cyan-400">
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  my-10 mx-auto">
          {services.map((service) => (
            <ServiceLimit key={service._id} service={service}></ServiceLimit>
          ))}
        </div>
      </div>
      <div className="flex justify-center mb-10 ">
        <Link to="/services" className="btn btn-outline bg-cyan-500 ">
          View All
        </Link>
      </div>
      {/* start */}
      <h2 className="text-5xl font-bold text-center my-10">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 p-5 bg-cyan-500 m-5 rounded-2xl shadow-2xl">
        <div>
          <img
            className="rounded-xl h-fit"
            src="https://img.freepik.com/free-photo/senior-male-professor-holding-notebook-standing-against-blackboard_23-2148200961.jpg?t=st=1668059127~exp=1668059727~hmac=a9559ea4f9dccc420edc3d5c669a3ba981c3d753172d14f456d47dce3e7395aa"
            alt=""
          />
        </div>
        <div className=" p-5">
          <p className="text-3xl font-bold mt-20 text-teal-700 mb-5">
            Daniel Craig
          </p>
          <p className="text-justify">
            I am a teacher, I love to teach people. I know how to learn people.
            I always try to teach with unique technique and enjoy. Teaching is
            my passion. I have been in the teaching profession for almost 40
            years. I have trained many students with myself. I will teaching
            with all my life
          </p>
        </div>
      </div>
      {/* end */}
    </div>
  );
};

export default Home;
