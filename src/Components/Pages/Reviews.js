import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/UserContext";
import Review from "./Review";

const Reviews = ({ service }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://review-website-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [reviews]);

  const serviceReview = reviews.filter(
    (review) => review.serviceId === service
  );
  console.log(serviceReview);

  return (
    <div className="flex justify-center gap-10 p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto my-10">
        {serviceReview?.map((rev) => (
          <Review key={rev._id} rev={rev}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
