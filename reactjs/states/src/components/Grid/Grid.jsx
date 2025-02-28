import React from "react";
import "./Grid.css";
import GridItem from "./GridItem";

function Grid(props) {
  return (
    <div className="grid-container">
      <GridItem title="HTML" />
      <GridItem title="CSS" />
      <GridItem title="JavaScript" />
      <GridItem title="React" />
      <GridItem title="Node.js" />
      <GridItem title="MongoDB" />
    </div>
  );
}

export default Grid;
