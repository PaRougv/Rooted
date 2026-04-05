import axios from "axios";

const BASE = import.meta.env.VITE_API_BASE_URL || "";

const api = axios.create({
  baseURL: BASE,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  // Only attach Bearer token for requests going to our own backend
  const url = config.url || "";
  const isOwnApi = url.startsWith("/") || url.startsWith(BASE);
  if (isOwnApi) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

export default api;
