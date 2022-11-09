import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
      {user.uid && reviews.length ? (
        <>
          {reviews.map((review) => (
            <MyReview
              key={review._id}
              review={review}
              handleDelete={handleDelete}
              reviews={reviews}
            ></MyReview>
          ))}
        </>
      ) : (
        <>
          <div class="flex justify-center ">
            <h2 className="my-36 text-red-400 font-bold text-xl ml-2">
              Sorry For Not Available Please{" "}
              {user.uid ? (
                <>
                  <Link to="/services">
                    <span className="underline text-red-700">Review Post</span>
                  </Link>{" "}
                </>
              ) : (
                <>
                  <Link to="/login">
                    <span className="underline text-red-700">Log in</span>
                  </Link>{" "}
                </>
              )}
            </h2>
          </div>
        </>
      )}
    </div>
  );
};

export default MyReviews;
