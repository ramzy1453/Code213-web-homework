import CustomButton from "../CustomButton/CustomButton";
import "./Grid.css";

import React from "react";

export default function GridItem(props) {
  return (
    <div className="grid-item">
      <div>{props.title}</div>
      <CustomButton />
    </div>
  );
}
