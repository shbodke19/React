import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <>
      <div>
        <br />
        <input type="search" placeholder="Search Products" />
      </div>
      <nav className="primary">
        <br />
        <Link to="featured"> Featured </Link>
        <Link to="new"> New </Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Products;
