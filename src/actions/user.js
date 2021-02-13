import * as api from "../api";

export const login = (credentials) => async (dispatch) => {
  try {
    const response = await api.login(credentials);

    dispatch({
      type: "LOGIN",
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};
