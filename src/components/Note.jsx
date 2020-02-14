import React from "react";
import data from "./DummyData.json";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>Orderid : {props.orderid}</h1>
      <h1>Name : {props.name}</h1>
      <h1>Email : {props.email}</h1>
      <h1>Product no. : {props.product}</h1>
      <h1>Quantity : {props.quantity}</h1>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}
export default Note;
