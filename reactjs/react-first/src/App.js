import "./App.css";

function App() {
  return (
    <div className="App">
      <section id="hero">
        <input type="search" placeholder="Search in the web..." />
        <button>Search</button>
      </section>

      <section id="results">
        <h1>Voici le resultat de ta recherche</h1>
        <ul className="results-list">
          <li className="result">
            <h2>Result 1</h2>
            <p>
              lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              autem.
            </p>
          </li>

          <li className="result">
            <h2>Result 2</h2>
            <p>
              lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              autem.
            </p>
          </li>

          <li className="result">
            <h2>Result 3</h2>
            <p>
              lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              autem.
            </p>
          </li>
        </ul>
      </section>

      <div className="grid-box">
        <div className="box">
          <h3>Box 1</h3>
          <button>Click</button>
        </div>
        <div className="box">
          <h3>Box 2</h3>
          <button>Click</button>
        </div>
        <div className="box">
          <h3>Box 3</h3>
          <button>Click</button>
        </div>
        <div className="box">
          <h3>Box 4</h3>
          <button>Click</button>
        </div>
        <div className="box">
          <h3>Box 5</h3>
          <button>Click</button>
        </div>
        <div className="box">
          <h3>Box 6</h3>
          <button>Click</button>
        </div>
      </div>

      <footer>Copyright &copy; 2025 RAMZY</footer>
    </div>
  );
}

export default App;
