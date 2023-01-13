import React, { useState } from "react";

const Events=()=>{
    const purple = "grey";
    const [bg,setbg]=useState(purple);
    const [Name, setName]=useState('click me');

    const MyFunction=()=>{
        // console.log('clicked');
        let newBg='green';
        setbg(newBg);
        setName('Ayyo🤭')
    }

    const BgBack=()=>{
        setbg(purple);
        setName('Angry 😠');
    }


    return(
        <>
            <div style={{backgroundColor:bg}}>
                <button onClick={MyFunction} onDoubleClick={BgBack} > {Name} </button>
                {/* <button onMouseEnter={MyFunction} onMouseLeave={BgBack} > {Name} </button> */}
                {/* <button onKeyDown={MyFunction}> {Name} </button> */}
                {/* <button onMouseEnter={MyFunction}> {Name} </button> */}
                {/* <button onDoubleClick={BgBack}> {Name} </button> */}
            </div>
        </>
    );
};
export default Events;