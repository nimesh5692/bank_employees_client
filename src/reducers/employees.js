const empReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_ALL_EMPLOYEES":
      return action.payload;

    case "CREATE_EMPLOYEE":
      return [...empReducer, action.payload];
    default:
      return state;
  }
};

export default empReducer;
