import axios from "axios";

//official website https://restcountries.com/#api-endpoints-v3-all

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1/",
});

export default api;
