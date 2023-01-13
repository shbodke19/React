import React, { Component } from "react";
import ULifeCycleB from "./ULifeCycleB";

class ULifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Name: "Shree",
    };
    console.log("ULifeCycleA Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("ULifeCycleA getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate() {
    console.log("ULifeCycleA shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("ULifeCycleA getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("ULifeCycleA componentDidUpdate");
  }

  changeState = () => {
    this.setState({
      Name: "Boss",
    });
  };

  render() {
    console.log("ULifeCycleA Render");
    return (
      <div>
        <div>ULifeCycle A</div>
        <button onClick={this.changeState}>Change State</button>
        <ULifeCycleB />
      </div>
    );
  }
}

export default ULifeCycleA;
