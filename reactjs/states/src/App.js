import { useStore } from "./lib/state";
import "./App.css";
import Grid from "./components/Grid/Grid";

function App() {
  const color = useStore((state) => state.color);
  return (
    <div
      className="app-container"
      style={{
        backgroundColor: color,
      }}
    >
      <header className="header">
        <h1>My Amazing Website</h1>
        <h3>I am Kemmoun Ramzy, a Web Developer</h3>
        <p>My website is under construction 🚧</p>
      </header>

      <Grid />
    </div>
  );
}

export default App;
