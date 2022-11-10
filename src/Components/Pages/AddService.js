import React from "react";
import Swal from "sweetalert2";
import useTitle from "../../Hooks/useTitle";
import "./AddService.css";

const AddService = () => {
  useTitle("Add Service");
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const image = form.image.value;
    const price = form.price.value;
    const ratting = form.ratting.value;
    const description = form.description.value;
    console.log(name);
    const service = {
      title: name,
      img: image,
      price: price,
      ratting: ratting,
      description: description,
    };

    fetch("https://review-website-server.vercel.app/service", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
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
  };
  return (
    <div className="hero ">
      <div className="hero-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  ">
        <div className="text-justify my-10 p-10 bg-cyan-200 p-4 rounded-2xl shadow-2xl ">
          <h1 className="text-5xl font-bold">Add Your New Service!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-cyan-200 p-4 rounded-2xl shadow-2xl"
        >
          <div className="grid grid-cols-1   gap-4 my-10 ">
            <input
              name="name"
              type="text"
              placeholder="Service Name"
              className="input input-bordered bg-cyan-100 input-md w-full "
              required
            />
            <input
              name="image"
              type="text"
              placeholder="Link"
              className="input input-bordered bg-cyan-100 input-md w-full  "
              required
            />
            <input
              name="price"
              type="text"
              placeholder="Price"
              className="input input-bordered bg-cyan-100 input-md w-full  "
              required
            />
            <input
              name="ratting"
              type="text"
              placeholder="Ratting"
              className="input input-bordered bg-cyan-100 input-md w-full  "
              required
            />
          </div>
          <div>
            <textarea
              name="description"
              className="textarea textarea-bordered bg-cyan-100 h-24 w-full"
              placeholder="Service Description"
              required
            ></textarea>
            <input
              type="submit"
              className="btn bg-cyan-600 w-full my-4"
              value="Place Your Order"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
