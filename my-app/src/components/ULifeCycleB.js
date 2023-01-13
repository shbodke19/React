import React, { Component } from "react";

class ULifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Name: "Shree",
    };
    console.log("ULifeCycleB Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("ULifeCycleB getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate() {
    console.log("ULifeCycleB shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("ULifeCycleB getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("ULifeCycleB componentDidUpdate");
  }

  render() {
    console.log("ULifeCycleB Render");
    return (
      <div>
        <div>ULifeCycle B</div>
      </div>
    );
  }
}

export default ULifeCycleB;
