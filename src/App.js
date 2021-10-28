import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initializeNotes } from "./reducers/noteReducer";
import noteService from "./services/notes" 

//components
import AddForm from "./components/AddForm";
import Notes from "./components/Notes";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    noteService
      .getAll()
      .then(notes => dispatch(initializeNotes(notes)))
  }, [dispatch]);

  return (
    <div>
      <h1>Todo App</h1>
      <AddForm />
      <Notes />
    </div>
  );
};

export default App;
