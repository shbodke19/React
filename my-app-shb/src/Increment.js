import React, { useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Clock from "react-digital-clock";

const Increment = () => {
  const [Num, setNum] = useState(0);

  const IncNum = () => {
    setNum(Num + 1);
  };
  const DecNum = () => {
    if (Num > 0) {
      setNum(Num - 1);
    } else {
      alert("Value is not less than Zero(0)");
      setNum(0);
    }
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1> {Num} </h1>
          <div className="btn_div">
            <button onClick={IncNum}>
              <AddIcon />
            </button>

            <button onClick={DecNum}>
              <RemoveIcon />
            </button>
            <br />
            <br />
          </div>
          <Clock />
        </div>
      </div>
    </>
  );
};
export default Increment;
