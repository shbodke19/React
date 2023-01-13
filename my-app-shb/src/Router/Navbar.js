import { fontWeight } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const linkstyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };

  return (
    <>
      <NavLink style={linkstyle} to="/">
        Home{" "}
      </NavLink>
      {/* <NavLink style={linkstyle} to="/Contact">
        Contact{" "}
      </NavLink> */}
      <NavLink style={linkstyle} to="/About">
        About{" "}
      </NavLink>
      {/* <NavLink style={linkstyle} to="/Service">
        Service{" "}
      </NavLink> */}
      <NavLink style={linkstyle} to="/user/shree/bodke">
        {" "}
        User{" "}
      </NavLink>
      <NavLink style={linkstyle} to="/Products">
        Products{" "}
      </NavLink>
      <NavLink style={linkstyle} to="/search">
        Search{" "}
      </NavLink>
    </>
  );
};

export default Navbar;
