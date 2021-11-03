import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeNote, strikeOutNote } from "../reducers/noteReducer"
import { deleteNoteFromServer, updateNoteOnServer } from "../services/notes";

const Note = ({ id, note, strikeThrough }) => {
  const dispatch = useDispatch();

  const deleteNote = (id) => {
    dispatch(removeNote(id))
    deleteNoteFromServer(id)
  };

  const strikeOut = (id) => {
    console.log(id)

    const updatedNote = {
      id: id,
      note: note,
      strikeThrough: !strikeThrough
    }

    updateNoteOnServer(id, updatedNote)
    dispatch(strikeOutNote(id))

  }
  if(strikeThrough === true){
    return(
      <div>
      <p style={{textDecoration:"line-through"}} onClick={()=>strikeOut(id)}>{note}</p>
      <button onClick={() => deleteNote(id)}>Delete</button>
    </div>
    )
  }

  return (
    <div>
      <p onClick={()=>strikeOut(id)}>{note}</p>
      <button onClick={() => deleteNote(id)}>Delete</button>
    </div>
  );
};

const Notes = () => {
  const notes = useSelector((state) => state);
  console.log(notes);

  return (
    <div>
      {notes.map((note) => (
        <Note key={note.id} id={note.id} note={note.note} strikeThrough={note.strikeThrough} />
      ))}
    </div>
  );
};

export default Notes;
