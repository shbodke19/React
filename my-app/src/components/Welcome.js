import React, { Component } from "react";

class Welcome extends Component {
  render() {
    const { name, heroName } = this.props; ////// 1st way of destructuring props in parathisis
    // const { state1, state2 } = this.state;   //////  destructuring state in parathisis
    return (
      <h1>
        Welcome To Class Component {name} and {heroName}
      </h1>
    );

    // return (
    //   <h1>
    //     Welcome To Class Component {this.props.name} and {this.props.heroName}
    //   </h1>
    // );
  }
}

export default Welcome;
