import { Button } from "@mui/material";
import AudioItem from "../../components/Audio/AudioItem";
import { useState } from "react";
export default function Home() {
  const [color, setColor] = useState("white");
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, auto)",
        gap: "20px",
        padding: "20px",
        backgroundColor: color,
      }}
    >
      <AudioItem setColor={setColor} />
      <AudioItem setColor={setColor} />
      <AudioItem setColor={setColor} />
      <AudioItem setColor={setColor} />
      <AudioItem setColor={setColor} />
      <AudioItem setColor={setColor} />
    </div>
  );
}

const sourates = [
  {
    name: "الفاتحة",
    reciter: "محمد علي",
    image: "https://cdn.alquran.cloud/media/image/1_1_128.png",
  },
  {
    name: "البقرة",
    reciter: "محمد علي",
    image: "https://cdn.alquran.cloud/media/image/1_2_128.png",
  },
  {
    name: "آل عمران",
    reciter: "محمد علي",
    image: "https://cdn.alquran.cloud/media/image/1_3_128.png",
  },
];
