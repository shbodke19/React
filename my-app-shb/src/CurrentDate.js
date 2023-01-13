import React, { Component } from "react";

const date=new Date().toLocaleDateString();
const time=new Date().toLocaleTimeString();

class CurrentDate extends Component{
    render(){
        return(
            <>
                <h1>Hello, My name is Shree Bodke</h1>
                {/* <p>{`Todya's current Date is ${d.toDateString()} `}</p>
                <p>{`Todya's current Time is ${d.toLocaleTimeString()} `}</p> */}
                <p>Current Date is = {date}</p>
                <p>Current Time is = {time}</p>
            </>
        )
    }
}

export default CurrentDate;