import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Count: 0,
    };
  }
  Incre() {
    // this.setState(
    //   {
    //     Count: this.state.Count + 1,
    //   },
    //   () => {
    //     console.log("Callback value is : " + this.state.Count);
    //   }
    // );
    // console.log(this.state.Count);

    this.setState((prevState) => ({
      Count: prevState.Count + 1,
    }));
    console.log(this.state.Count);
  }

  IncreFive() {
    this.Incre();
    this.Incre();
    this.Incre();
    this.Incre();
    this.Incre();
  }

  render() {
    return (
      <div>
        <div>Count - {this.state.Count}</div>
        <button onClick={() => this.IncreFive()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
