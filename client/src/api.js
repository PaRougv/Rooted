import axios from "axios";

// In development: baseURL is empty → Vite proxy handles /api/* → localhost:3000
// In production:  baseURL is VITE_API_BASE_URL (set in Vercel dashboard) → calls go directly to Render
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "",
  withCredentials: true,
});

export default api;
