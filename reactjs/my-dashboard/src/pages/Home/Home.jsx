import AudioItem from "../../components/Audio/AudioItem";

export default function Home() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, auto)",
        gap: "20px",
        padding: "20px",
      }}
    >
      <AudioItem />
      <AudioItem />
      <AudioItem />
      <AudioItem />
      <AudioItem />
      <AudioItem />
      <AudioItem />
      <AudioItem />
      <AudioItem />
    </div>
  );
}
