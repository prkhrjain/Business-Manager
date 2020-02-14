import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    name: "",
    email: "",
    orderid: "",
    product: "",
    quantity: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      name: "",
      email: "",
      orderid: "",
      product: "",
      quantity: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <label>
        OrderID:<input
            name="orderid"
            onChange={handleChange}
            value={note.orderid}
            placeholder="OrderID"
          />
        </label>
       <label>Name: <input
          name="name"
          onChange={handleChange}
          value={note.name}
          placeholder="name"
        /></label> 
        <label>
          Email:<input
          name="email"
          onChange={handleChange}
          value={note.email}
          placeholder="email"
        /></label>
        <label>
        Product No.:
        <input
          name="product"
          onChange={handleChange}
          value={note.product}
          placeholder="Product no."
        />
        </label>
        <label>
        Quantity:
        <input
          name="quantity"
          onChange={handleChange}
          value={note.quantity}
          placeholder="Quantity"
        />
        </label>
        
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
