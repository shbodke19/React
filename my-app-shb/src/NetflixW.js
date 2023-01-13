import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";
import NetFllix from "./NetFllix";
import Amazon from "./Amazon";


/// If Else conditional

const Favweb="Amazon";
// const Favweb="Netflix";

// const FavS=()=>{
// if(Favweb=== "Netflix"){
//     return <NetFllix />
//     // return(
//     //     <Card 
//     //         key={Sdata[0].id}
//     //        sname={Sdata[0].sname}
//     //        imgsrc={Sdata[0].imgsrc}
//     //         title={Sdata[0].title}
//     //        links={Sdata[0].links} />
//     // );
// }else{
//     return <Amazon />
//     // return(
//     //     <Card 
//     //         key={Sdata[2].id}
//     //        sname={Sdata[2].sname}
//     //        imgsrc={Sdata[2].imgsrc}
//     //         title={Sdata[2].title}
//     //        links={Sdata[2].links} />
//     // );
// }};



const NetflixW=()=>{
    return (
        <>
        <h1 className="heading-style">List of Top 5 Netflix WebSeries and Movies in 2020</h1>
        {/* <FavS /> */}

        {(Favweb=== "Netflix") ? <NetFllix /> : <Amazon />}

        {/* { Sdata.map((val)=>{
    // console.log(val);
    return(
        <Card 
            key={val.id}
           sname={val.sname}
           imgsrc={val.imgsrc}
            title={val.title}
           links={val.links} />
    );
})}; */}

         </>  
       );
}

export default NetflixW;