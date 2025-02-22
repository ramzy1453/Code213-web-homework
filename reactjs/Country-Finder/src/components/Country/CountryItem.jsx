import React from "react";
import { Link } from "react-router";
export default function CountryItem(props) {
  return (
    <Link to={`/country/${props.name}`} className="link-mini-box">
      <img src={props.flag} height={182} alt="" />
      <div className="text">
        <h3>{props.name}</h3>
        <p>
          Population :<span> {props.population} </span>
        </p>
        <p>
          Region :<span> {props.region} </span>
        </p>
        <p>
          Capital : <span>{props.capital} </span>
        </p>
      </div>
    </Link>
  );
}
