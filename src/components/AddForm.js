import React from "react";
import { useDispatch } from "react-redux";
import { createNote } from "../reducers/noteReducer";
import { addNoteToServer } from "../services/notes";

const AddForm = () => {
  const dispatch = useDispatch();

  // random ID generator
  const generateId = () => {
    return Number((Math.random() * 1000000).toFixed(0));
  };

  //add note function
  const addNote = (event) => {
    const id = generateId();

    // changing the redux state
    event.preventDefault();
    const content = event.target.note.value;
    event.target.note.value = "";
    dispatch(createNote(content, id));
    console.log(content);
    // adding the note to JSON server
    addNoteToServer({ id: id, note: content, strikeThrough: false });
  };

  return (
    <div>
      <form onSubmit={addNote}>
        Add a new note:
        <input name="note" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddForm;
