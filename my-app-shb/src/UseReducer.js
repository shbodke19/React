import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import React, { useReducer, useState } from "react";
import { act } from "react-dom/test-utils";

const initialVal = 0;

const reducer = (state, action) => {
  console.log(state, action);
  if (action.type === "Increment") {
    return state + 1;
  } else if (action.type === "Decrement") {
    return state - 1;
  }
  return state;
};

const UseReducer = () => {
  //   const [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(reducer, initialVal);
  return (
    <>
      <div>
        <p>{state}</p>
        <div>
          <button
            onClick={() => {
              dispatch({ type: "Increment" });
            }}
          >
            Incre
          </button>
          <button
            onClick={() => {
              dispatch({ type: "Decrement" });
            }}
          >
            Decre
          </button>
        </div>
      </div>
    </>
  );
};

export default UseReducer;
