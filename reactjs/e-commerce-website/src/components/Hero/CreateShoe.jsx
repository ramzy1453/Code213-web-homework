import { useState } from "react";

export default function CreateShoe() {
  const [price, setPrice] = useState(0);
  const [taxe, setTaxe] = useState(0);
  return (
    <div className="inputs">
      <input
        type="text"
        placeholder="Price"
        value={price}
        onChange={function (event) {
          setPrice(event.target.value);
        }}
      />
      <input type="text" placeholder="Taxe" />
      <div>Price final is : 2300da</div>
      <button>Add Shoe to DB</button>
    </div>
  );
}
