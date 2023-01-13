import React, { Component } from "react";


const imgs="https://picsum.photos/400/400";
const imgs1="https://picsum.photos/450/400";
const imgs2="https://picsum.photos/410/400";
const imgs3="https://picsum.photos/420/400";
const links="https://www.javatpoint.com/reactjs-tutorial";

const heading={
    color: 'brown',
    textAlign: 'center',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    textShadow: '0px 2px 4px #ffe9c5',
    margin: '70px 0',
    fontFamily: "'Lobster', cursive"
}
const imgdiv={
    display: 'flex',
    justifyContent: 'center'
}

class InternalStyling extends Component{
    render(){
        return(
            <>
               
                <h1 style={heading}>My name is Shree Bodke</h1>
                <div style={imgdiv}>
                <img src={imgs} alt="Lorem Images"/>
                <img src={imgs2} alt="Lorem Images"/>
                <a href={links} target="_blank"><img src={imgs3} alt="Lorem Images"/></a>
                <img src={imgs1} alt="Lorem Images"/></div>
            </>
        )
    }
}
export default InternalStyling;