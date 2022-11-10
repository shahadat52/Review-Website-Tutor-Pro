import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Service = ({ service }) => {
  console.log(service);
  const { img, description, title, price, ratting, _id } = service;
  return (
    <div className="">
      <div className="max-w-xs rounded-md shadow-2xl dark:bg-gray-900 dark:text-gray-100">
        <PhotoProvider
          speed={() => 800}
          easing={(type) =>
            type === 2
              ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
              : "cubic-bezier(0.34, 1.56, 0.64, 1)"
          }
        >
          <PhotoView src={img} className="rounded-xl">
            <img className="rounded-tl-xl rounded-tr-xl" src={img} alt="" />
          </PhotoView>
        </PhotoProvider>
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-xl font-bold tracking-wide">{title}</h2>
            <p className="dark:text-gray-100">{price}</p>
            <p className="dark:text-gray-100">
              Ratting: {ratting} <small>stars</small>
            </p>
            <p className="dark:text-gray-100">{description.slice(0, 80)}...</p>
          </div>
          {/*fancy button start*/}
          <Link
            to={`/details/${_id}`}
            className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-cyan-200 group"
          >
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-cyan-500 group-hover:h-full"></span>
            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg
                className="w-5 h-5 text-cyan-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg
                className="w-5 h-5 text-cyan-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-indigo-900">
              View Details
            </span>
          </Link>
          {/*fancy button end*/}
        </div>
      </div>
    </div>
  );
};

export default Service;
