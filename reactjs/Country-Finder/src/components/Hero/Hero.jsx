import React from "react";
import "./Hero.css";
import CountryItem from "../Country/CountryItem";
const countries = [
  {
    name: "Algeria",
    population: "44,700,000",
    region: "Africa",
    capital: "Algiers",
    flag: "https://flagcdn.com/dz.svg",
  },
  {
    name: "France",
    population: "67,391,582",
    region: "Europe",
    capital: "Paris",
    flag: "https://flagcdn.com/fr.svg",
  },
  {
    name: "Canada",
    population: "38,005,238",
    region: "Americas",
    capital: "Ottawa",
    flag: "https://flagcdn.com/ca.svg",
  },
  {
    name: "Belgium",
    population: "11,555,997",
    region: "Europe",
    capital: "Brussels",
    flag: "https://flagcdn.com/be.svg",
  },
  {
    name: "Switzerland",
    population: "8,636,896",
    region: "Europe",
    capital: "Bern",
    flag: "https://flagcdn.com/ch.svg",
  },
  {
    name: "Greece",
    population: "10,715,549",
    region: "Europe",
    capital: "Athens",
    flag: "https://flagcdn.com/gr.svg",
  },
  {
    name: "Germany",
    population: "83,240,525",
    region: "Europe",
    capital: "Berlin",
    flag: "https://flagcdn.com/de.svg",
  },
  {
    name: "Netherlands",
    population: "17,441,139",
    region: "Europe",
    capital: "Amsterdam",
    flag: "https://flagcdn.com/nl.svg",
  },
  {
    name: "Italy",
    population: "59,554,023",
    region: "Europe",
    capital: "Rome",
    flag: "https://flagcdn.com/it.svg",
  },
  {
    name: "Luxembourg",
    population: "632,275",
    region: "Europe",
    capital: "Luxembourg",
    flag: "https://flagcdn.com/lu.svg",
  },
  {
    name: "Sweden",
    population: " 10,353,442",
    region: "Europe",
    capital: "Stockholm",
    flag: "https://flagcdn.com/se.svg",
  },
  {
    name: "Finland",
    population: " 5,530,719",
    region: "Europe",
    capital: "Helsinki",
    flag: "https://flagcdn.com/fi.svg",
  },
];
export default function Hero() {
  return (
    <section id="hero">
      <div className="box-container">
        {countries.map((country) => (
          <CountryItem
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
            flag={country.flag}
          />
        ))}
      </div>
    </section>
  );
}
