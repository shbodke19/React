import React, { Component } from "react";
import logo from "./logo.svg";

import "./App.css";
import Greet from "./components/Greet";
import Hello from "./components/Hello";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import Functionclick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import JSXDemo from "./JSXDemo";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Garage from "./components/Lists";
import Keys from "./components/Keys";
import StyleSheet from "./components/StyleSheet";
import Inline from "./components/Inline";
import "./components/AppStyle.css";
import styles from "./components/AppStyle.module.css";
import Form from "./components/Form";
import LifeCycleA from "./components/LifeCycleA";
import ULifeCycleA from "./components/ULifeCycleA";
import ParentComp from "./components/ParentComp";

class App extends Component {
  render() {
    // var myStyle={
    //   fontSize:80,
    //   color:'red'
    // }
    return (
      <div className="App">
        {/* <Hello /> */}
        {/* <Greet name="Boss" heroName="Ram">
          <p> This is a children tag </p>
        </Greet>
        <Greet name="Shb" heroName="Shyam">
          <button>CLick Me</button>
        </Greet> */}
        {/* <Welcome name="BOSS" heroName="RAM" />
        <Welcome name="SHB" heroName="SHYAM" /> */}
        {/* <Message /> */}
        {/* <Counter /> */}
        {/* <h1 style={myStyle}>www.javatpoint.com</h1> */}
        {/* <Functionclick />
        <ClassClick /> */}
        {/* <EventBind /> */}
        {/* <JSXDemo /> */}
        {/* <ParentComponent /> */}
        {/* <UserGreeting /> */}
        {/* <NameList /> */}
        {/* <Garage /> */}
        {/* <Keys /> */}
        {/* <StyleSheet Primary={true} /> */}
        {/* <Inline /> */}
        {/* <h1 className="error">Error</h1>
        <h1 className={styles.success}>Success</h1> */}
        {/* <Form /> */}
        {/* <LifeCycleA /> */}
        {/* <ULifeCycleA /> */}
        {/* <ParentComp /> */}
      </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello World!
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
