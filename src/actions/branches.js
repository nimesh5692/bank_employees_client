import * as api from "../api";

// Actions
export const getBranches = () => async (dispatch) => {
  try {
    const response = await api.fetchBranches();

    return dispatch({
      type: "FETCH_ALL_BRANCHES",
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};
