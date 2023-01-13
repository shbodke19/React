import React, { useState } from "react";
import Images from "./Images";
import "./Search.css";

const Search = () => {
  const [img, setImg] = useState("");

  const InputEvent = (event) => {
    const data = event.target.value;
    console.log(data);
    setImg(data);
  };
  return (
    <>
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search Anything"
          value={img}
          onChange={InputEvent}
        />
        <Images name={img} />
      </div>
    </>
  );
};

export default Search;
