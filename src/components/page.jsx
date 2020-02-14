import React, { useState } from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";

function Page() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            orderid={noteItem.orderid}
            name={noteItem.name}
            email={noteItem.email}
            product={noteItem.product}
            quantity={noteItem.quantity}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
}

export default Page;
