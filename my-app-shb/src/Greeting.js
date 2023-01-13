import React from "react";


function Greeting(){
        
                let dates = new Date(2022,11,29,19);
                let greetings="";
                const csst={
                };

            if(dates.getHours() >=1 && dates.getHours() <12 ){
            greetings='Good Morning!';
            csst.color='Green';
            }else if(dates.getHours() >=12 && dates.getHours()<18 ){
                greetings='Good AfterNoon!';
                csst.color='Orange';
            }else if(dates.getHours() >=18 && dates.getHours()<20 ){
                greetings='Good Evening!';
                csst.color='brown';
            }else{
                greetings = "Good Night!";
                csst.color='Black'
            }
                
        return(
             <>
            <div>
                <h1>Hello sir, <span style={csst}>{greetings}</span></h1>
            </div> 
             </>
                )
        }

export default Greeting;