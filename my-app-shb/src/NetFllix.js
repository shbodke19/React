import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";

const NetFllix=()=>{
    return(
        <Card 
            key={Sdata[0].id}
           sname={Sdata[0].sname}
           imgsrc={Sdata[0].imgsrc}
            title={Sdata[0].title}
           links={Sdata[0].links} />
    );
}

export default NetFllix;