import React, { Component } from "react";

const name='Shree';
const lname='Bodke'
class HelloWorld extends Component{
    render(){
        return(
          <>
          <h1>Hello World</h1>
          {/* <p>My name is Shree Bodke</p> */}
          {/* <p>My name is {name + " " +lname}</p> */}
          <p>{`My name is ${name} ${lname} I'm from degloor `}</p>
          <p>Addtion of two number is {2+3} and mul {Math.random()}</p>

          </>
        )     
    }};

export default HelloWorld;