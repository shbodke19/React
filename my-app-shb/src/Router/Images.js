import React from "react";

const Images = (props) => {
  const img = `https://source.unsplash.com/400*400/?${props.name}`;

  return (
    <>
      <div>
        <img src={img} alt="search" />
      </div>
    </>
  );
};

export default Images;
