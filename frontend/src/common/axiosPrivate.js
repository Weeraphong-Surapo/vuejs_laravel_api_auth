import axios from "axios";
import { computed } from "vue";

// Create a function to get the token from localStorage
const getToken = () => {
  const session = localStorage.getItem("session");
  return session ? JSON.parse(session).token : null;
};

// Create an Axios instance
export const axiosPrivate = axios.create({
  baseURL: "http://127.0.0.1:8001/api",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosPrivate.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosPrivate;
