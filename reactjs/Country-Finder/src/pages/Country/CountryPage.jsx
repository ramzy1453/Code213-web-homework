import React, { useEffect, useState } from "react";
import "./CountryPage.css";
import { Link, useParams } from "react-router";
export default function CountryPage() {
  const params = useParams();
  const [country, setCountry] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("starting to send the request");

    fetch(`https://restcountries.com/v3.1/name/${params.nameOfCountry}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("request done");
        setCountry(data[0]);
        setLoading(false);
      });

    console.log("done");
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="country-info-container">
      <Link to="/" className="btn-back">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-2 w-2 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
          width={36}
          height={22}
        >
          <path
            fill-rule="evenodd"
            d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <p>Back</p>
      </Link>
      <div className="right-left-container">
        <div className="right">
          <img src={country.flags.svg} width={460} height={310} alt="" />
        </div>
        <div className="left">
          <h1>{country.name.official}</h1>
          <div className="information-container">
            <div className="info-right">
              <p>
                nativeName :<span> {country.name.official}</span>
              </p>
              <p>
                Population :<span> 44,700,000</span>
              </p>
              <p>
                Region :<span> {country.continents[0]}</span>
              </p>
              <p>
                Sub Region :<span> Northern Africa</span>
              </p>
              <p>
                Capital :<span> Algiers </span>
              </p>
            </div>
            <div className="info-left">
              <p>
                Top Level Domain :<span> .dz</span>
              </p>
              <p>
                Currencies :<span> Algerian dinar</span>
              </p>
              <p>
                Languages :<span> Arabic</span>
              </p>
            </div>
          </div>
          <div className="border-countries">
            <h3>Border Countries:</h3>
            <div className="item">Tunisia</div>
            <div className="item">Morocco</div>
          </div>
        </div>
      </div>
    </div>
  );
}
