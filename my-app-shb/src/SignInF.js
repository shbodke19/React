import React, { useState } from "react";

const SignInF = () => {
  const name = "How are you";
  const [FullName, setFullName] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Number: "",
    Address: "",
  });

  const InputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    // const value=event.target.value;
    // const name=event.target.name;
    //Object Destructering
    const { value, name } = event.target;

    setFullName((preValue) => {
      console.log(preValue);
      return {
        ...preValue,
        [name]: value,
      };

      // if(name === 'FName'){
      //     return{
      //         FirstName:value,
      //         LastName:preValue.LastName,
      //         Email:preValue.Email,
      //         Number:preValue.Number
      //     };
      // }else if(name === 'LName'){
      //     return{
      //         FirstName:preValue.FirstName,
      //         LastName:value,
      //         Email:preValue.Email,
      //         Number:preValue.Number
      //     };
      // }else if(name === 'email'){
      //     return{
      //         FirstName:preValue.FirstName,
      //         LastName:preValue.LastName,
      //         Email:value,
      //         Number:preValue.Number
      //     };
      // }else if(name === 'number'){
      //     return{
      //         FirstName:preValue.FirstName,
      //         LastName:preValue.LastName,
      //         Email:preValue.Email,
      //         Number:value
      //     };
      // }
    });
  };
  const OnSubmit = (event) => {
    event.preventDefault();
    alert("Form Submitted");
  };

  return (
    <>
      <div className="main_div">
        <form onSubmit={OnSubmit}>
          <div>
            <h1>
              Hello Your Name is : {FullName.FirstName} {FullName.LastName}
            </h1>
            <p>Email : {FullName.Email}</p>
            <p>Number : {FullName.Number}</p>
            <p>Address : {FullName.Address}</p>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="FirstName"
              onChange={InputEvent}
              value={FullName.FirstName}
            />
            <input
              type="text"
              placeholder="Enter Your LastName"
              name="LastName"
              onChange={InputEvent}
              value={FullName.LastName}
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              name="Email"
              onChange={InputEvent}
              value={FullName.Email}
            />
            <input
              type="number"
              placeholder="Enter Your Number"
              name="Number"
              onChange={InputEvent}
              value={FullName.Number}
            />
            <input
              type="text"
              placeholder="Enter Your Address"
              name="Address"
              onChange={InputEvent}
              value={FullName.Address}
            />
            <button type="Submit">Submit Form 👍</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignInF;
