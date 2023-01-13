import React, { useState } from "react";

const Forms = () => {
    const name="How are you";
    const [Name, setName]=useState("");
    const [Fullname, setFullname]=useState();

    const InputEvent =(event)=>{
        // console.log(event.target.value);
        setName(event.target.value)
    }
    const OnSubmit=()=>{
        setFullname(Name)
    }

    return(
        <>
        <div>
            <h1>Hello {Fullname}</h1>
            <input type='text' placeholder="Enter Your Name" onChange={InputEvent} value={Name}/>
            <button onClick={OnSubmit}>Click Me 👍</button>
        </div>
        </>
    );
};

export default Forms;