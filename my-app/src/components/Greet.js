import React from "react";

// function Greet(){
//     return <h1>Hello Greet</h1>
// }
const Greet = (props) => {
  // const Greet = ({ name, heroName }) => {    /// 1st way of destructuring in parathisis
  const { name, heroName } = props; ////// 2nd way
  // console.log(props)
  return (
    <div>
      <h1>
        Hello Greet {name} a.k.a {heroName}
      </h1>
      {props.children}
    </div>
  );

  //   return (
  //     <div>
  //       <h1>
  //         Hello Greet {props.name} a.k.a {props.heroName}
  //       </h1>
  //       {props.children}
  //     </div>
  //   );
};

export default Greet;
