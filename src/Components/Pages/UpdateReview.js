import React from "react";

const UpdateReview = () => {
  return (
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
  );
};

export default UpdateReview;
