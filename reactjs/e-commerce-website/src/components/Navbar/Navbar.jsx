import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [value, setValue] = useState("");
  return (
    <nav className="navbar">
      <h1>CONVERSE</h1>
      <div>
        <input
          type="search"
          value={value}
          onChange={function (event) {
            setValue(event.target.value);
          }}
        />
        <button
          onClick={function () {
            alert(value);
          }}
        >
          Search
        </button>
      </div>
      <h1>The value is {value}</h1>
      <ul className="links">
        <li className="link-item">Home</li>
        <li className="link-item">About Us</li>
        <li className="link-item">Products</li>
        <li className="link-item">Contact Us</li>
      </ul>
    </nav>
  );
}
