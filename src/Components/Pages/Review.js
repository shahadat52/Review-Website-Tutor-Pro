import React from "react";

const Review = ({ rev }) => {

  return (
    <div>
      <div className=" flex justify-center rounded-lg bg-gray-300 p-5">
      <div className="">
        <div className="flex justify-between mt-2 ">
          <img className="rounded-full w-10" src={rev?.user?.photoURL} alt="" />
          <h1>{rev?.user?.displayName}</h1>
        </div>
        <p>{rev?.serviceName}</p>
        <p>{rev.comment}</p>
      </div>
    </div>
    </div>
  );
};

export default Review;
