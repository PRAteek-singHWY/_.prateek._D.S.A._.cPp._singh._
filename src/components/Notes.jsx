import React, { useState } from "react";
import NoteCard from "./NoteCard";
import CreateArea from "./InputNote";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (title, content) => {
    setNotes((prevNotes) => [...prevNotes, { newTitle: title, newContent: content }]);
  };

  const deleteItem = (id) => {
    setNotes((prevNotes) => prevNotes.filter((item, index) => index !== id));
  };

  return (
    <div>
      <div>
        <CreateArea onClickHandle={addNote} />
      </div> 
      <div>
        {notes.map((note, index) => (
          <NoteCard
            key={index}
            title={note.newTitle}
            content={note.newContent}
            id={index}
            onChecked={deleteItem}
          />
        ))}
      </div>
    </div>
  );
};

export default Notes;
