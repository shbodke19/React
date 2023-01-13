import React,{useState} from "react";

const SignUpF=()=>{
    const name="How are you";
    const [FullName, setFullName]=useState({
        FirstName:'',
        LastName:'',
    });
  
    const InputEvent =(event)=>{
        console.log(event.target.value);
        console.log(event.target.name);
        
        const value=event.target.value;
        const name=event.target.name;

        setFullName((preValue)=>{
            if(name === 'FName'){
                return{
                    FirstName:value,
                    LastName:preValue.LastName,
                };
            }else if(name === 'LName'){
                return{
                    FirstName:preValue.FirstName,
                    LastName:value,
                };
            }
            
        })
    };
    const OnSubmit=(event)=>{
        event.preventDefault();
        alert('Form Submitted')
       
    };

    return(
        <>
         <div className="main_div">
         <form onSubmit={OnSubmit}>
         <div>
            <h1>Hello {FullName.FirstName} {FullName.LastName}</h1>
            <input type='text' placeholder="Enter Your Name" name="FName" onChange={InputEvent} value={FullName.FirstName}  />
            <input type='text' placeholder="Enter Your LastName" name="LName" onChange={InputEvent} value={FullName.LastName} />
            <button type="Submit">Submit Form 👍</button>
            </div>
            </form>
        </div>
        </>
    )
};

export default SignUpF;;