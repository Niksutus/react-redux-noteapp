import React from 'react';

//components
import AddForm from './components/AddForm';
import Notes from './components/Notes'


const App = () => {
  return (
    <div>
      <h1>Todo App</h1>
      <AddForm />
      <Notes />
    </div>
  );
};

export default App;
