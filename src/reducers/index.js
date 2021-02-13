import { combineReducers } from "redux";
import empReducer from "./employees";
import branchReducer from "./branches";
import userReducer from "./user";

export default combineReducers({
  employees: empReducer,
  branches: branchReducer,
  user: userReducer,
});
