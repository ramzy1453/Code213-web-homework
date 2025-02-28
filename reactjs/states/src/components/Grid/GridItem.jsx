import "./Grid.css";

import React from "react";

export default function GridItem(props) {
  return <div className="grid-item">{props.title}</div>;
}
