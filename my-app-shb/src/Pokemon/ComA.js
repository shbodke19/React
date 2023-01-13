import React, { useEffect, useState } from "react";
import axios from "axios";

const ComA = () => {
  const [num, setNum] = useState();
  const [name, setName] = useState();
  const [moves, setMove] = useState();

  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      //   console.log(res.data.name);
      console.log(res);
      setName(res.data.name);
      setMove(res.data.moves.length);
    }
    getData();
  });
  return (
    <>
      <h1 style={{ textAlign: "left", fontSize: "50px" }}>
        You Choose <span style={{ color: "red" }}>{num}</span> value
      </h1>
      <h1 style={{ textAlign: "left", fontSize: "50px" }}>
        My name is <span style={{ color: "red" }}>{name}</span>
      </h1>
      <h1 style={{ textAlign: "left", fontSize: "50px" }}>
        I have <span style={{ color: "red" }}>{moves}</span> moves
      </h1>
      <br />
      <select
        value={num}
        style={{ fontSize: "30px" }}
        onChange={(event) => {
          setNum(event.target.value);
        }}
      >
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </>
  );
};

export default ComA;
