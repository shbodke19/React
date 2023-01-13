import React from "react";
import SlotM from "./SlotM";

const SlotGame=()=>{
    return(
        <>
            <h1 className="heading-style">
                🎰 Welcome to <span style={{fontWeight:'bold'}}>Slot Machine Game</span> 🎰
            </h1>
            <div className="slotmachine">
            <SlotM x='😄' y='😄' z='😄' />
            <hr />
            <SlotM x='😐' y='😢' z='😄'/>
            <hr />
            <SlotM x='🍌' y='🍎' z='🍊'/>
            <hr />
            <SlotM x='👪' y='👪' z='👪'/>
            </div>
        </>
    )
};

export default SlotGame;