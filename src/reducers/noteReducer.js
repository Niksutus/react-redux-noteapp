const noteReducer = (state = [], action) => {
  switch (action.type) {
    case "NEW_Note":
      return [...state, action.data];
    default:
      return state;
  }
};

// random ID generator
const generateId = () => {
  Number((Math.random() * 1000000).toFixed(0));
};

export const createNote = (content) => {
  return {
    type: "NEW_NOTE",
    data: {
      content,
      id: generateId(),
    },
  };
};

export default noteReducer;
