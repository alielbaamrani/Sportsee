import React from "react";
import {
  Header,
  KeyDataInfo,
  KeyDataQuantity,
  KeyDataName,
} from "../styles/keyDataStyle";
export default function KeyData({ icon, name, quantity }) {
  return (
    <div>
      <Header>
        <img src={icon} alt="keyDataIcon"></img>
        <KeyDataInfo>
          <KeyDataQuantity>{quantity}</KeyDataQuantity>
          <KeyDataName>{name}</KeyDataName>
        </KeyDataInfo>
      </Header>
    </div>
  );
}
