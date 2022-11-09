import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/UserContext";
import Review from "./Review";

const Reviews = ({ service }) => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [reviews]);

  const serviceReview = reviews.filter(
    (review) => review.serviceId === service
  );
  // setReview(serviceReview);
  console.log(serviceReview);

  return (
    <div className="grid grid-cols-3 gap-10 my-10">
      {serviceReview?.map((rev) => (
        <Review key={rev._id} rev={rev}></Review>
      ))}
    </div>
  );
};

export default Reviews;
