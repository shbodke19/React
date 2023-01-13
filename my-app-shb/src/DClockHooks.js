import React, { useState } from "react";

const DClockHooks=()=>{

    let time = new Date().toLocaleTimeString();
    const [cTime, setTime]=useState(time);

    // const UTime=()=>{
    //     time=new Date().toLocaleTimeString();
    //    setTime(time);
    // }

    // setInterval(UTime,1000);

    
    setInterval(()=>{
        time=new Date().toLocaleTimeString();
         setTime(time);
        },1000)


    return(
        <>
            <h1>{cTime} </h1>
        </>
    );
};

export default DClockHooks;