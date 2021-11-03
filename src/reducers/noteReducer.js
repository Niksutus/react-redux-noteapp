const noteReducer = (state = [], action) => {
  switch (action.type) {
    case "NEW_NOTE":
      return [...state, action.data];

    case "INIT_NOTES":
      return action.data;

    case "DELETE_NOTE":
      return [...state.filter((note) => note.id !== action.data)];

    case "STRIKEOUT_NOTE":
      const id = action.data
      const noteToChange = state.find(note => note.id === id)
      const changedNote = {
        ...noteToChange,
        strikeThrough: !noteToChange.strikeThrough
      }

      console.log(changedNote)
      
      return state.map(note =>
        note.id !== id ? note : changedNote)
    
    default:
      return state;
  }
};

// action-creator for creating new notes

export const createNote = (content, id) => {
  return {
    type: "NEW_NOTE",
    data: {
      id: id,
      note: content,
      strikeThrough: false,
    },
  };
};

// action-creator for initializing already exisiting notes from the JSON-server.

export const initializeNotes = (notes) => {
  return {
    type: "INIT_NOTES",
    data: notes,
  };
};

export default noteReducer;

// action-creator for deleting a note

export const removeNote = (id) => {
  return {
    type: "DELETE_NOTE",
    data: id,
  };
};

// action-creator to strikeout a note

export const strikeOutNote = (id) => {
  return {
    type: "STRIKEOUT_NOTE",
    data: id,
  };
};
