const branchReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_ALL_BRANCHES":
      return action.payload;

    default:
      return state;
  }
};

export default branchReducer;
