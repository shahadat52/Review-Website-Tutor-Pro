import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import tutor from "../../../assets/tutor.jpg";
import useTitle from "../../../Hooks/useTitle";
import ServiceLimit from "./ServiceLimit";

const Home = () => {
  useTitle("Home");
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://review-website-server.vercel.app/servicesLimit")
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
      <div className="p-5">
        <h2 className="text-5xl font-bold text-center my-10">
          My Successful Students
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          <div className="bg-cyan-800 rounded-xl p-5 text-gray-300">
            <div className="flex justify-between">
              <div>
                <img
                  className="rounded-xl w-20  "
                  src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=996&t=st=1668056933~exp=1668057533~hmac=5f74d310ddf50c83e1379934694fe8f6de6372e8c16ddccfed5b0128a4120e7b"
                  alt=""
                />
                <p className="font-bold mb-4">University of London</p>
              </div>
              <p className="font-bold">Tom William</p>
            </div>
            <div>
              <p className="text-xs">
                Daniel sir is the best teacher of my life and I have learned a
                lot from him. His teachings have applied in all areas of my
                life. The greatest contribution to my success in life is from my
                teacher. I feel very lucky to have learned from such a great
                man. I wish success in all situations for my teacher
              </p>
            </div>
          </div>
          <div className="bg-cyan-800 rounded-xl p-5 text-gray-300">
            <div className="flex justify-between">
              <div>
                <img
                  className="rounded-xl w-20  "
                  src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=826&t=st=1668059021~exp=1668059621~hmac=91a716a0b78035a6e9ea26d3c5aa0102a4ae7d91310ea9dee05b8b919e4367c5"
                  alt=""
                />
                <p className="font-bold mb-4">University of Oxford</p>
              </div>
              <p className="font-bold">Olivia</p>
            </div>
            <div>
              <p className="text-xs">
                Daniel sir is the best teacher of my life and I have learned a
                lot from him. His teachings have applied in all areas of my
                life. The greatest contribution to my success in life is from my
                teacher. I feel very lucky to have learned from such a great
                man. I wish success in all situations for my teacher
              </p>
            </div>
          </div>
          <div className="bg-cyan-800 rounded-xl p-5 text-gray-300">
            <div className="flex justify-between">
              <div>
                <img
                  className="rounded-xl w-20  "
                  src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=826&t=st=1668058930~exp=1668059530~hmac=00f8fc6917188a10eb30091fb068151b3888deecc1fc8ba1d1747d0d8daacec8"
                  alt=""
                />
                <p className="font-bold mb-4">MIT</p>
              </div>
              <p className="font-bold">Jayden Harry</p>
            </div>
            <div>
              <p className="text-xs">
                Daniel sir is the best teacher of my life and I have learned a
                lot from him. His teachings have applied in all areas of my
                life. The greatest contribution to my success in life is from my
                teacher. I feel very lucky to have learned from such a great
                man. I wish success in all situations for my teacher
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
