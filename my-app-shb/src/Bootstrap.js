import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Bootstrap() {
  return (
    <>
      <div className="mb-3">
        <label
          for="exampleFormControlInput1"
          className="form-label text-bg-danger"
        >
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label
          for="exampleFormControlTextarea1"
          className="form-label text-bg-danger"
        >
          Example textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
    </>
  );
}

export default Bootstrap;
