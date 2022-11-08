import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  const { _id, title, price, name } = service;
  console.log(user);
  const handleReviewSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = `${form.first.value} ${form.last.value}`;
    const phone = form.phone.value;
    const comment = form.review.value;
    console.log(email, name, phone, comment);
    const reviewInfo = {
      serviceName: title,
      reviewer: name,
      serviceId: _id,
      price,
      email,
      phone,
      comment,
    };
    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewInfo),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
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

      <div>
        <form onSubmit={handleReviewSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10 ">
            <input
              name="first"
              type="text"
              placeholder="First Name"
              className="input input-bordered input-md w-full  "
            />
            <input
              name="last"
              type="text"
              placeholder="Last Name"
              className="input input-bordered input-md w-full  "
            />
            <input
              name="phone"
              type="text"
              placeholder="Your Phone"
              className="input input-bordered input-md w-full  "
            />
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
              className="textarea textarea-bordered h-24 w-full"
              placeholder="Your Review"
            ></textarea>
            <input
              type="submit"
              className="btn btn-success w-full my-4"
              value="Place Your Review "
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceDetails;
