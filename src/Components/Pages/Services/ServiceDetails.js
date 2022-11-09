import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/UserContext";
import Reviews from "../Reviews";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  const { _id, title, price, name } = service;
  console.log(user);

  const handleReviewSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const comment = form.review.value;
    console.log(email, comment);
    const reviewInfo = {
      serviceName: title,
      reviewer: name,
      serviceId: _id,
      price,
      email,
      comment,
      user,
    };
    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire("Wow!", "Review Added!", "success");
          form.reset();
        }
      })
      .catch((error) => console.error(error));

    console.log(service);
  };

  return (
    <div>
      <div className="hero">
        <div className="hero-content grid grid-cols-1 md:grid-cols-2">
          <div className="text-justify w-2/3 mx-auto col-span-1 ">
            <h1 className="text-5xl font-bold">{service?.title}</h1>
            <p className="text-xl font-bold mt-4">
              Price: <small>{service?.price}$</small>
            </p>
            <p className="text-xl font-bold">
              Ratting:
              <small> {service?.ratting} star</small>
            </p>
            <p className="py-6">{service?.description}</p>
          </div>
          <div className="card  w-full   shadow-2xl bg-base-100">
            <img className="rounded-lg h-screen" src={service?.img} alt="" />
          </div>
        </div>
      </div>

      {user && user.uid ? (
        <>
          <div className="flex justify-center">
            <div className="mx-10 bg-cyan-200 p-4 rounded-2xl shadow-2xl w-1/2">
              <p className="text-lg font-bold text-cyan-700">Service Review</p>
              <form onSubmit={handleReviewSubmit}>
                <div className=" my-10   ">
                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    className="input input-bordered input-md w-full  "
                    defaultValue={user?.email}
                    readOnly
                  />
                </div>
                <div>
                  <textarea
                    name="review"
                    className="textarea textarea-info h-24 w-full"
                    placeholder="Your Review"
                  ></textarea>
                  <br />
                  <input
                    type="submit"
                    className="btn bg-cyan-500 w-full my-4"
                    value="Place Your Review "
                  />
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <>
          <div class="flex justify-center ">
            <h2 className="my-36 text-red-400 font-bold text-2xl">
              Sorry No user Available Please{" "}
              <Link to="/login">
                <span className="underline text-red-700">Log in</span>
              </Link>{" "}
            </h2>
          </div>
        </>
      )}

      <Reviews key={_id} service={_id}></Reviews>
    </div>
  );
};

export default ServiceDetails;
