import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/UserContext";

const UpdateReview = () => {
  const storeReview = useLoaderData();
  console.log(storeReview);
  const handleUpdateReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const text = form.updateText.value;
    console.log(text);
    const upText = {
      text: text,
    };
    fetch(
      `https://review-website-server.vercel.app/updateReview/${storeReview._id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(upText),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Wow!", "Review Updated", "success");
        }
        console.log(data);
      });
  };
  console.log(storeReview);
  return (
    <div className="my-10 flex justify-center ">
      <div className="mx-10 bg-cyan-200 p-4 rounded-2xl shadow-2xl w-1/2 ">
        <p className="text-lg font-bold text-cyan-700 text-center my-10">
          Update Your Review
        </p>
        <form onSubmit={handleUpdateReview}>
          <textarea
            name="updateText"
            className="textarea textarea-bordered bg-cyan-100 h-24 w-full"
            placeholder="Review Description"
            required
          ></textarea>
          <p>
            <input
              type="submit"
              className="btn bg-cyan-600 w-full my-4"
              value="Update Your Review"
            />
          </p>
        </form>
      </div>
    </div>
  );
};

export default UpdateReview;
