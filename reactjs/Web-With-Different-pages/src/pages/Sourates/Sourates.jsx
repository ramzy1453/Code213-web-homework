import React from "react";
import Audio from "../../components/Audio/Audio";
import "./Sourates.css";
export default function Sourates() {
  return (
    <div className="Grid-container">
      {audios.map((audio) => (
        <Audio
          name={audio.name}
          nameSurah={audio.nameSurah}
          img={audio.image}
        />
      ))}
    </div>
  );
}

const audios = [
  {
    name: "Islam Sobhi",
    nameSurah: "Maryam",
    image:
      "https://tvquran.com/uploads/authors/images/%D9%8A%D8%A7%D8%B3%D8%B1%20%D8%A7%D9%84%D8%AF%D9%88%D8%B3%D8%B1%D9%8A.jpg",
  },
  {
    name: "Mishary Rashid Alafasy",
    nameSurah: "Al Fatiha",
    image:
      "https://tvquran.com/uploads/authors/images/%D9%8A%D8%A7%D8%B3%D8%B1%20%D8%A7%D9%84%D8%AF%D9%88%D8%B3%D8%B1%D9%8A.jpg",
  },
  {
    name: "Shuraym",
    nameSurah: "Al Baqarah",
    image:
      "https://tvquran.com/uploads/authors/images/%D9%8A%D8%A7%D8%B3%D8%B1%20%D8%A7%D9%84%D8%AF%D9%88%D8%B3%D8%B1%D9%8A.jpg",
  },
];
