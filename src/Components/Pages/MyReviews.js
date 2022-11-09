import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
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

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, You will cancel the order");
    if (proceed) {
      fetch(`http://localhost:5000/MyReviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire("Good job!", "Delete successful", "success");

            const restReviews = reviews.filter((rev) => rev._id !== id);
            setReviews(restReviews);
          }
        });
    }
  };
  return (
    <div className="grid grid-cols-3 gap-10 my-10">
      {reviews.map((review) => (
        <MyReview
          key={review._id}
          review={review}
          handleDelete={handleDelete}
        ></MyReview>
      ))}
    </div>
  );
};

export default MyReviews;
