import React from "react";

export default function ShoeItem(props) {
  return (
    <div
      className="shoe-item"
      onClick={function () {
        props.changeShoeWithProps(props.imageUrl);
      }}
    >
      <img alt="" src={props.imageUrl} width={200} />
      <p className="shoe-brand">{props.name}</p>
    </div>
  );
}
