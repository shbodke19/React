import React from "react";

const Hello = () => {
  // With JSX

  return (
    <div id="hello">
      <h1 className="dummyclass">Hello Everyone</h1>
    </div>
  );

  // Without JSX
  // return React.createElement(
  // "div",
  //  {id:'hello' },
  //  React.createElement('h1', {className:'dummyclass'}, 'Hello React'))
};

export default Hello;
