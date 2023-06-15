import React from "react";
import { NavLink } from "react-router-dom";
import { HomePage } from "../styles/HomePage";
import "../styles/reset.scss";

function Home() {
  return (
    <HomePage>
      <NavLink to="user/12"> Karl </NavLink>
      
      <NavLink to="user/18"> Cecilia </NavLink>
    </HomePage>
  );
}

export default Home;
