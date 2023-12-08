/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import { HomePage } from "../styles/HomePage";
import "../styles/reset.scss";

function Home() {
  return (
    <HomePage>
      <NavLink className="link" to="user/12">
        Karl &#x1F466;
      </NavLink>

      <NavLink className="link" to="user/18">
        Cecilia &#x1F469;
      </NavLink>
    </HomePage>
  );
}

export default Home;
