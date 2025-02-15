import { useState } from "react";
import "./Hero.css";
import ShoeItem from "./ShoeItem";

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
          <ShoeItem
            changeShoeWithProps={setActualShoe}
            name="Adidas"
            imageUrl="https://converse-store.vercel.app/assets/big-shoe1-VFPhAFde.png"
          />
          <ShoeItem
            changeShoeWithProps={setActualShoe}
            name="Fila"
            imageUrl="https://converse-store.vercel.app/assets/big-shoe2-DQX3Rp_U.png"
          />
          <ShoeItem
            changeShoeWithProps={setActualShoe}
            name="Nike"
            imageUrl="https://converse-store.vercel.app/assets/big-shoe3-ncxL7lz9.png"
          />
        </div>
      </div>
    </section>
  );
}
