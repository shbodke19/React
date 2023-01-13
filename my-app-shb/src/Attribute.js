import React, { Component } from "react";

const imgs="https://picsum.photos/400/400";
const imgs1="https://picsum.photos/450/400";
const imgs2="https://picsum.photos/410/400";
const imgs3="https://picsum.photos/420/400";
const links="https://www.javatpoint.com/reactjs-tutorial";


class Attribute extends Component{
    render(){
        return(
            <>
                {/* <h1 contentEditable="true">My name is Shree Bodke</h1> */}
                <h1 className="heading">My name is Shree Bodke</h1>
                <div className="imgdiv">
                <img src={imgs} alt="Lorem Images"/>
                <img src={imgs2} alt="Lorem Images"/>
                <a href={links} target="_blank"><img src={imgs3} alt="Lorem Images"/></a>
                <img src={imgs1} alt="Lorem Images"/></div>
            </>
        )
    }
}
export default Attribute;