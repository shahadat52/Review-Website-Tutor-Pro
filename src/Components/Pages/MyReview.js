import React from "react";

const MyReview = ({ review }) => {
  return (
    <div className=" flex justify-center rounded-lg bg-gray-300 p-4 ">
      <div className="">
        <div className="flex justify-between mt-2 ">
          <img
            className="rounded-full w-10"
            src={review?.user?.photoURL}
            alt=""
          />
          <h1>{review?.user?.displayName}</h1>
        </div>
        <p>{review?.serviceName}</p>
        <p>{review.comment}</p>
        <div className="flex justify-between my-2 ">
          <p>
            <button className="btn btn-active">Delete</button>
          </p>
          <p>
            <button className="btn btn-outline btn-success ml-5">Update</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyReview;
