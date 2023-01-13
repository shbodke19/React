import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Nlist from "./Nlist";
// import Button from "@mui/material/Button";

const NTODOLIST = () => {
  const [Item, setItem] = useState("");
  const [NewItem, NewsetItm] = useState([]);

  const ItemEvent = (event) => {
    setItem(event.target.value);
  };

  const ListOfItems = () => {
    NewsetItm((prev) => {
      return [...prev, Item];
    });
    setItem("");
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            value={Item}
            placeholder="Add an Items"
            onChange={ItemEvent}
          />
          <button className="newBtn" onClick={ListOfItems}>
            <AddIcon />
          </button>

          <br />
          <ol>
            {/* {NewItem.map((val, index) => {
              return <li key={index}>{val}</li>;
            })} */}
            {NewItem.map((val, index) => {
              return <Nlist key={index} text={val} />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default NTODOLIST;
