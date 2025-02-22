import React from "react";
import "./Search.css";
import Icon from "../Icon/icon";
export default function Search() {
  return (
    <section id="mini-section">
      <div className="search">
        <Icon />
        <input type="search" placeholder="Search for contry..."></input>
      </div>
      <div className="filtre"> Filtre by Region</div>
    </section>
  );
}
