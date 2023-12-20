import axios from "axios";

export const url = "https://api.potterdb.com/v1/";

const api = axios.create({
  baseURL: url,
});

export default api;
