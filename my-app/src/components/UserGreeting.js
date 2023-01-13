import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //   isLoggedIn: false,
      isLoggedIn: true,
    };
  }
  render() {
    /* .     */
    /// /// // . Logical && Operator  or  Short Circuit Operator
    return this.state.isLoggedIn && <div>Welcome Shree</div>;

    /* .     */
    /// ///// Ternary Operator
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Shree</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );
    /* .     */
    // /// Element Variables Conditional Statement
    // let Message;
    // if (this.state.isLoggedIn) {
    //   Message = <div>Welcome Shree</div>;
    // } else {
    //   Message = <div>Welcome Guest</div>;
    // }
    // return <div>{Message}</div>;
    /* .     */
    // //// If Else Condition
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Shree</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }
    /* .     */
    // return (
    //   <>
    //     <div>Welcome Shree</div>
    //     <div>Welcome Guest</div>
    //   </>
    // );
  }
}

export default UserGreeting;
