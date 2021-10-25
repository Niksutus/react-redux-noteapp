import React from 'react';

//components
import AddForm from './components/AddForm';
import Note from './components/Note'


const App = () => {
  return (
    <div>
      <h1>Todo App</h1>
      <AddForm />
      <Note />
    </div>
  );
};

export default App;
