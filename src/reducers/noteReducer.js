const noteReducer = (state=[], action) => {
  switch (action.type) {
    case "NEW_NOTE":
      return [...state, action.data];

    case "INIT_NOTES":
      return action.data
    default:
      return state;
  }
};

// random ID generator
const generateId = () => {
  return Number((Math.random() * 1000000).toFixed(0));
};

// action-creator for creating new notes

export const createNote = (content) => {
  return {
    type: "NEW_NOTE",
    data: {
      id: generateId(),
      note: content,
    },
  };
};

// action-creator for initializing already exisiting notes from the JSON-server.

export const initializeNotes = (notes) => {
  return {
    type: 'INIT_NOTES',
    data: notes,
  }
}

export default noteReducer;
