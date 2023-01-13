import React, { useState } from "react";
import TodoLi from "./TodoLi";

const TodoList = () => {
  const [InputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const ItemEvent = (event) => {
    setInputList(event.target.value);
  };
  const ListOfItem = () => {
    setItems((oldItems) => {
      return [...oldItems, InputList];
    });
    setInputList("");
  };

  const DeleteItems = (id) => {
    console.log("Deleted");
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
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
            placeholder="Add a Items"
            value={InputList}
            onChange={ItemEvent}
          />
          <button onClick={ListOfItem}> + </button>

          <ol>
            {/* <li>{InputList}</li> */}
            {Items.map((itemval, index) => {
              return (
                <TodoLi
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={DeleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
export default TodoList;
