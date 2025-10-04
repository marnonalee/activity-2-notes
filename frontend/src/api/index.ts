import axios from "axios";

const API_URL = "http://localhost:3000"; // Your backend URL

const axiosInstance = axios.create({
  baseURL: API_URL,
});

// Attach JWT token automatically
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
