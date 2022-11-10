import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../Hooks/useTitle";
import { AuthContext } from "../Context/UserContext";
import MyReview from "./MyReview";

const MyReviews = ({ review }) => {
  const { user, logOut } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useTitle("MyReview");
  useEffect(() => {
    if (!user?.email) return;
    fetch(`http://localhost:5000/MyReviews?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("tutor-token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => setReviews(data));
  }, [reviews, user?.email]);

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
    <div className="grid grid-cols-3 gap-10 my-10 p-5">
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
          <div className=" grid h-screen place-items-center ">
            <h2 className="my-36 text-red-400 font-bold text-xl ml-2">
              No reviews were added Please{" "}
              {user.uid ? (
                <>
                  <Link to="/services">
                    <span className="underline text-red-700">
                      {" "}
                      Post Review{" "}
                    </span>
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
