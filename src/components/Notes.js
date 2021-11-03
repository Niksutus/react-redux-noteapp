import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeNote } from "../reducers/noteReducer"
import { deleteNoteFromServer } from "../services/notes";

const Note = ({ id, note }) => {
  const dispatch = useDispatch();

  const deleteNote = (id) => {
    dispatch(removeNote(id))
    deleteNoteFromServer(id)
  };

  return (
    <div>
      <p>
        {note} <button onClick={() => deleteNote(id)}>Delete</button>
      </p>
    </div>
  );
};

const Notes = () => {
  const notes = useSelector((state) => state);
  console.log(notes);

  return (
    <div>
      {notes.map((note) => (
        <Note key={note.id} id={note.id} note={note.note} />
      ))}
    </div>
  );
};

export default Notes;
