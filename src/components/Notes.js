import React from 'react';
import { useSelector } from 'react-redux';

const Note = ({ note }) => {
  return (
    <div>
      <p>{note} <button>Delete</button></p>
    </div>
  );
};

const Notes = () => {

  const notes = useSelector(state => state)
  console.log(notes)

  return(
    <div>
      {notes.map(note => <Note key={note.id} note= {note.note}/>)}
    </div>
  )
}

export default Notes;