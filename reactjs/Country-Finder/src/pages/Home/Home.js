import { useState } from "react";
import "./Home.css";
import Navbar from "../../components/Navebar/Navbar";
import SearchSection from "../../components/SearchSection/Search";
import Hero from "../../components/Hero/Hero";

function Home() {
  const [isDarkMode, setDarkMode] = useState(false);

  return (
    <div className={isDarkMode === true ? "dark-mode" : "light-mode"}>
      <Navbar isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
      <SearchSection />
      <Hero />
    </div>
  );
}

export default Home;
