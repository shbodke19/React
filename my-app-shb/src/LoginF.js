import React, {useState} from "react";

const LoginF =()=>{

    const name="How are you";
    const [Name, setName]=useState("");
    const [LastName, setLastName]=useState("");
    const [Fullname, setFullname]=useState("");
    const [LastNameNew, setLastNameNew]=useState("");

    const InputEvent =(event)=>{
        // console.log(event.target.value);
        setName(event.target.value)
    }
    const OnSubmit=(event)=>{
        event.preventDefault();
        setFullname(Name)
        setLastNameNew(LastName)
    }
    const InputEventTwo=(event)=>{
         setLastName(event.target.value);
    }

    return(
        <>
         <div className="main_div">
         <form onSubmit={OnSubmit}>
         <div>
            <h1>Hello {Fullname} {LastNameNew}</h1>
            <input type='text' placeholder="Enter Your Name" onChange={InputEvent} value={Name}/>
            <input type='text' placeholder="Enter Your LastName" onChange={InputEventTwo} value={LastName}/>
            <button type="Submit">Submit Form 👍</button>
            </div>
            </form>
        </div>
        </>
    )
};

export default LoginF;