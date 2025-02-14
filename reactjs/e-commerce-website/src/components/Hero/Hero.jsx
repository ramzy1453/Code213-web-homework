import { useState } from "react";
import "./Hero.css";

export default function Hero() {
  const [actualShoe, setActualShoe] = useState(
    "https://converse-store.vercel.app/assets/big-shoe1-VFPhAFde.png"
  );
  return (
    <section id="hero">
      <div className="left-hero">
        <div className="title">Our Summer Collection</div>
        <div className="big-title">
          New Collection <span className="converse-title">Converse</span>
        </div>
        <p>
          Discover stylish Converse arrivals, quality comfort, and innovation
          for your active life.
        </p>
        <button>Shop Now</button>
      </div>
      <div className="right-hero">
        <img src={actualShoe} width={500} alt="" />
        <div className="shoes-container">
          <div
            className="shoe-item"
            onClick={function () {
              setActualShoe(
                "https://converse-store.vercel.app/assets/big-shoe2-DQX3Rp_U.png"
              );
            }}
          >
            <img
              alt=""
              src="https://converse-store.vercel.app/assets/big-shoe2-DQX3Rp_U.png"
              width={200}
            />
          </div>
          <div
            className="shoe-item"
            onClick={function () {
              setActualShoe(
                "https://converse-store.vercel.app/assets/big-shoe3-ncxL7lz9.png"
              );
            }}
          >
            <img
              alt=""
              src="https://converse-store.vercel.app/assets/big-shoe3-ncxL7lz9.png"
              width={200}
            />
          </div>
          <div
            className="shoe-item"
            onClick={function () {
              setActualShoe(
                "https://converse-store.vercel.app/assets/big-shoe1-VFPhAFde.png"
              );
            }}
          >
            <img
              alt=""
              src="https://converse-store.vercel.app/assets/big-shoe1-VFPhAFde.png"
              width={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
