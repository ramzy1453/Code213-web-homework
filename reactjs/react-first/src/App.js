import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Grid from "./components/Grid/Grid";
import Results from "./components/Results/Results";

import { useState } from "react";

function App() {
  let username = "Wassim";

  // let counter = 0;
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState("blue");

  function handleClick() {
    // counter++;
    setCounter(counter + 1);
    setColor("red");
  }

  function handleMove() {
    console.log("Hello " + username + " you moved your mouse on the button");
  }

  return (
    <div className="App">
      <h1>Hello {username}</h1>
      <Hero />

      <Results />

      <Grid />

      <Footer />
      <button
        onClick={function () {
          console.log("Salam");
        }}
        style={{
          marginTop: "48px",
          color: "black",
          backgroundColor: color,
          padding: "12px",
          fontSize: "24px",
          cursor: "pointer",
          border: "3px blue solid",
        }}
      >
        Click
      </button>

      <div>Counter : {counter}</div>
    </div>
  );
}

export default App;
