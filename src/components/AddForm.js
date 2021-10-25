import React from "react";
import { useDispatch } from "react-redux";
import { createNote } from "../reducers/noteReducer";

const AddForm = () => {
  const dispatch = useDispatch();

  //add note function
  const addNote = (event) => {
    event.preventDefault();
    const content = event.target.note.value;
    event.target.note.value = "";
    dispatch(createNote(content));
    console.log(content)
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
