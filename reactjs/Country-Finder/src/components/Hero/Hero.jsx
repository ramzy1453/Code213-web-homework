import React, { useEffect, useState } from "react";
import "./Hero.css";
import CountryItem from "../Country/CountryItem";

export default function Hero() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    console.log("starting to send the request");

    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        console.log("request done");
        setCountries(data);
      });

    console.log("done");
  }, []);

  console.log(countries);
  return (
    <section id="hero">
      <div className="box-container">
        {countries.map((country) => (
          <CountryItem
            name={country.name.official}
            population={country.population}
            region={country.region}
            capital={"X"}
            flag={country.flags.svg}
          />
        ))}
      </div>
    </section>
  );
}
