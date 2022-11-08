import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { img, description, title, price, ratting } = service;
  return (
    <div className="">
      <div className="max-w-xs rounded-md shadow-2xl dark:bg-gray-900 dark:text-gray-100">
        <img
          src={img}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-xl font-bold tracking-wide">{title}</h2>
            <p className="dark:text-gray-100">{price}</p>
            <p className="dark:text-gray-100">
              Ratting: {ratting} <small>stars</small>
            </p>
            <p className="dark:text-gray-100">{description.slice(0, 80)}...</p>
          </div>
          <Link
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
