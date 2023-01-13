import React, { useState } from "react";

const TimeHooks=()=>{
    let newTime=new Date().toLocaleTimeString();

    const [cTime, setTime]=useState(newTime);

    const UTime=()=>{
        newTime=new Date().toLocaleTimeString();
       setTime(newTime);
    }

    return(
        <>
            <h1> {cTime} </h1>
            <button onClick={UTime}> Get Time</button>

        </>
    );
};

export default TimeHooks;