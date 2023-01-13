import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import Netflix from "./Netflix";
import CurrentDate from "./CurrentDate";
import Attribute from "./Attribute";
// import "./Attribute.css";
import InternalStyling from "./InternalStyling";
import Greeting from "./Greeting";
// import './Greeting.css'
import FirstComp from "./FirstComp";
import Calculator from "./Calculator";
// import "./NetflixW.css";
import NetflixW from "./NetflixW";
import Emoji from "./Emoji";
import SlotGame from "./SlotGame";
import Hooks from "./Hooks";
// import "./index.css";
import TimeHooks from "./TimeHooks";
import DClockHooks from "./DClockHooks";
import Events from "./Events";
import Forms from "./Forms";
import LoginF from "./LoginF";
import SignUpF from "./SignUpF";
import SignInF from "./SignInF";
import TodoList from "./TodoList";
import Increment from "./Increment";
import NTODOLIST from "./NTODOLIST";
// import "./ToDoList.css";
import Bootstrap from "./Bootstrap";
import Accordion from "./Accordion/Accordion";
import MiniProject from "./MiniProject";
import ContextAPI from "./Context API/ContextAPI";
import UseContext from "./Context API/UseContext";
import UseEffect from "./Context API/UseEffect";
import ChUseEffect from "./Context API/ChUseEffect";
import StateWise from "./StateWiseData/StateWise";
import ComA from "./Pokemon/ComA";
import { Route, Routes } from "react-router-dom";
import About from "./Router/About";
import Contact from "./Router/Contact";
import Error from "./Router/Error.js";
import Home from "./Router/Home";
import Navbar from "./Router/Navbar";
import Service from "./Router/Service";
import User from "./Router/User";
import Order from "./Router/Order";
import Products from "./Router/Products";
import FeaturedPro from "./Router/FeaturedPro";
import NewProduct from "./Router/NewProduct";
import Users from "./Router/Users";
import UsersDetails from "./Router/UsersDetails";
import Admin from "./Router/Admin";
import Search from "./Router/Search";
import ErrorPage from "./Router/ErrorPage";
import GKeep from "./Google Keep/GKeep";
import UseReff from "./UseReff";
import UseReducer from "./UseReducer";

function App() {
  return (
    <>
      {/* <HelloWorld /> */}
      {/* <Netflix /> */}
      {/* <CurrentDate /> */}
      {/* <Attribute /> */}
      {/* <InternalStyling /> */}
      {/* <Greeting /> */}
      {/* <FirstComp /> */}
      {/* <Calculator /> */}
      {/* <NetflixW /> */}
      {/* <SlotGame /> */}
      {/* <Emoji /> */}
      {/* <Hooks /> */}
      {/* <TimeHooks /> */}
      {/* <DClockHooks /> */}
      {/* <Events /> */}
      {/* <Forms /> */}
      {/* <LoginF /> */}
      {/* <SignUpF /> */}
      {/* <SignInF /> */}
      {/* <TodoList /> */}
      {/* <Increment /> */}
      {/* <NTODOLIST /> */}
      {/* <Bootstrap /> */}
      {/* <Accordion /> */}
      {/* <MiniProject /> */}
      {/* <ContextAPI /> */}
      {/* <UseEffect /> */}
      {/* <ChUseEffect /> */}
      {/* <StateWise /> */}
      {/* <ComA /> */}
      {/* <About />
      <Contact /> */}
      {/* <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} exact />
        <Route path="contact" element={<Contact />} />
        <Route path="service" element={<Service />} />
        <Route path="search" element={<Search />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedPro />} />
          <Route path="featured" element={<FeaturedPro />} />
          <Route path="new" element={<NewProduct />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UsersDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="user/:fname/:lname" element={<User />} />
        <Route path="order-summary" element={<Order />} />
      </Routes> */}
      {/* <GKeep /> */}
      {/* <UseReff /> */}
      <UseReducer />
    </>
  );
}

export default App;
