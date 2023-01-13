import React from "react";

function Keys() {
  const Names = ["Shree", "Bodke", "SHB", "Shree"];
  const NameList = Names.map((name, index) => (
    <li key={index}>
      {index}
      {name}
    </li>
  ));

  return (
    <div>
      <ul>{NameList}</ul>
    </div>
  );
}

export default Keys;
