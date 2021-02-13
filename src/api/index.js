import axios from "axios";

const DEFAULT_URL = "http://localhost:5000/api";

export const fetchBranches = async () => {
  return axios.get(`${DEFAULT_URL}/branches`);
};

export const fetchEmployees = async () => {
  return await axios.get(`${DEFAULT_URL}/employees`);
};

export const createEmployee = async (newEmployee) => {
  return axios.post(`${DEFAULT_URL}/employees`, newEmployee);
};

export const login = async (credentials) => {
  return axios.post(`${DEFAULT_URL}/login`, credentials);
};
