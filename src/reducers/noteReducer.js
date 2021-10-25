const noteReducer = (state = [{id:1, note:"great"}], action) => {
  switch (action.type) {
    case "NEW_NOTE":
      return [...state, action.data];
    default:
      return state;
  }
};

// random ID generator
const generateId = () => {
  return Number((Math.random() * 1000000).toFixed(0));
};

export const createNote = (content) => {
  return {
    type: "NEW_NOTE",
    data: {
      id: generateId(),
      note: content,
    },
  };
};

export default noteReducer;
