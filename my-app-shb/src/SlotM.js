import React from "react";

const SlotM=(props)=>{
    // let x = '😄';
    // let y = '😄';
    // let z = '🎅';
    // let x=props.x;
    // let y=props.y;
    // let z=props.z;
//Object Destructuring
let{x,y,z}=props;

if (x===y && y===z){
    return(
        <>
            <div className="slot-inner">
        <h1> {x} {y} {z} </h1>
        <h3>This is matching.</h3>
        <hr />
            </div>
        </>
    )
}else{
    return(
        <>
            <div className="slot-inner">
        <h1> {x} {y} {z} </h1>
        <h3>This is Not matching.</h3>
        <hr />
            </div>
        </>
    )
}
}
export default SlotM;