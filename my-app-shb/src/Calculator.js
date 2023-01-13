import React from "react";
import {Add,Sub,Mul,Div} from './Calc'

const Calculator=()=>{
    return(
        <>
            <ul>
                <li>Addition of two number is {Add(40,12)}</li>
                <li>Substraction of two number is {Sub(40,12)}</li>
                <li>Multiplication of two number is {Mul(40,12)}</li>
                <li>Divison of two number is {Div(40,112)}</li>
            </ul>
        </>
    )
}
export default Calculator;