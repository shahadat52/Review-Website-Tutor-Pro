import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Home/Header";
import Footer from "./Footer";

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
