import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/UserContext";
import MyReview from "./MyReview";

const MyReviews = ({ review }) => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  console.log(reviews);
  useEffect(() => {
    fetch(`http://localhost:5000/MyReviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [reviews]);
  return (
    <div className="grid grid-cols-3 gap-10 my-10">
      {reviews.map((review) => (
        <MyReview key={review._id} review={review}></MyReview>
      ))}
    </div>
  );
};

export default MyReviews;
