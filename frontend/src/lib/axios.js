import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api",
    // Ensuring cookies (like session tokens) are sent with each request
  withCredentials: true,
});