import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";
import UpdateReview from "./UpdateReview";

const MyReview = ({ review, handleDelete, reviews }) => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div>
      {user && user.uid ? (
        <>
          <div className="rounded-lg bg-gray-300 p-4 ">
            <div>
              <div className="flex justify-between mt-2 ">
                <img
                  className="rounded-full w-10"
                  src={review?.user?.photoURL}
                  alt=""
                />
                <h1>{review?.user?.displayName}</h1>
              </div>
              <p className="my-4 font-bold text-lg">{review?.serviceName}</p>
              <p>{review.comment}</p>
              <div className="flex justify-between my-2 ">
                <p>
                  <button
                    onClick={() => handleDelete(review?._id)}
                    className="btn btn-active"
                  >
                    Delete
                  </button>
                </p>
                <p>
                  <Link
                    to={`/update/${review._id}`}
                    className="btn btn-outline btn-success ml-5"
                  >
                    Update
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div class="grid h-screen place-items-center">
            <h2>Sorry No user Available Please </h2>
            <Link to="/login">Log in</Link>{" "}
          </div>
        </>
      )}
    </div>
  );
};

export default MyReview;
