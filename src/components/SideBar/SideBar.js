import React from "react";
import iconMeditation from "../../assets/iconMeditation.svg";
import iconBike from "../../assets/iconBike.svg";
import iconSwiming from "../../assets/iconSwiming.svg";
import iconDumbBell from "../../assets/iconDumbBell.svg";
import { NavLink } from "react-router-dom";
import "./SideBar.scss";

export default function SideBar() {
  return (
    <div className="Container">
      <div className="Nav">
        <div className="Wrapper">
          <NavLink to="#">
            <img src={iconMeditation} alt="Meditation" />
          </NavLink>
          <NavLink to="#">
            <img src={iconSwiming} alt="Swiming" />
          </NavLink>
          <NavLink to="#">
            <img src={iconBike} alt="Bike" />
          </NavLink>
          <NavLink to="#">
            <img src={iconDumbBell} alt="Dumb-Bell" />
          </NavLink>
        </div>
        <div className="NavText">Copyright, SportSee 2023</div>
      </div>
    </div>
  );
}
