const sorterReducer = (state = [], action) => {
  switch (action.type) {
    case "SORT_DIRECT":
      return state;
    case "STRAIGHTEN_ORDER":
      return state;
    case "REVERSE_ORDER":
      return state;
    default:
      return state;
  }
};

export default sorterReducer;
