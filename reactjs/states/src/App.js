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
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243378.06542627863!2d3.1571431147060287!3d36.7286614753382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb26977ea659f%3A0x4231102d38a36f49!2sAlger!5e0!3m2!1sfr!2sdz!4v1740821960634!5m2!1sfr!2sdz"
        width="600"
        height="450"
        style={{
          border: "1px black",
        }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <Grid />
    </div>
  );
}

export default App;
