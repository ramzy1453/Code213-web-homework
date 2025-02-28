import React from "react";
import "./CustomButton.css";
import { useStore } from "../../lib/state";

const CustomButton = (props) => {
  // const setColor = useStore((state) => state.setColor);
  const setColor = useStore(function (state) {
    return state.setColor;
  });
  return (
    <button className="icon-button" onClick={() => setColor("yellow")}>
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="#25314C"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm4.692 10.287a.755.755 0 0 1-.162.243l-3 3a.75.75 0 0 1-1.06-1.06l1.719-1.72H8a.75.75 0 0 1 0-1.5h6.189L12.47 9.53a.75.75 0 0 1 1.06-1.06l3 3a.751.751 0 0 1 .162.817Z"></path>
      </svg>
    </button>
  );
};

export default CustomButton;
