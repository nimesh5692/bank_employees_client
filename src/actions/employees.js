import * as api from "../api";

// Actions
export const getEmployees = () => async (dispatch) => {
  try {
    const response = await api.fetchEmployees();

    // // const action = {
    // //   type: "FETCH_ALL",
    // //   payload: response.data,
    // // };

    dispatch({
      type: "FETCH_ALL_EMPLOYEES",
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createEmployee = (employee) => async (dispatch) => {
  try {
    const response = await api.createEmployee(employee);

    dispatch({
      type: "CREATE_EMPLOYEE",
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};
